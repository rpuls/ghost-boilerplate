"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldValuesService = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const zod_1 = require("zod");
const custom_field_types_1 = require("@tryghost/custom-field-types");
const schema_1 = require("./schema");
const queries_1 = require("./queries");
const storage_1 = require("./storage");
const FIELDS_TABLE = 'members_custom_fields';
const VALUES_TABLE = 'members_custom_field_values';
// Matches the `members_custom_fields.key` column (schema.js), so no key a site
// could actually have minted is ever refused by it.
const MAX_KEY_LENGTH = 191;
// Values arrive keyed by field key. Each value stays `unknown` here: it is
// validated by its own field type's schema, which isn't known until the key is
// resolved to a definition.
const ValuesInput = zod_1.z.record(zod_1.z.string().max(MAX_KEY_LENGTH), zod_1.z.unknown());
/**
 * The value half of member custom fields: reading and writing what a member holds
 * for each defined field. It belongs to the member aggregate — a value is data
 * about a member — while field definitions belong to the site's settings; that
 * aggregate boundary, not a technical layer, is why this is a separate service.
 *
 * It owns the `members_custom_field_values` table and reads `members_custom_fields`
 * directly for the reference data it needs (which fields are active, and how they
 * validate), rather than calling the definitions service — the same way the other
 * knex services here talk to the database.
 */
class CustomFieldValuesService {
    knex;
    /**
     * @private
     * A getter rather than a number: the ceiling is an operator setting that can
     * change between requests.
     */
    getMaxDefinitions;
    constructor({ knex, getMaxDefinitions }) {
        this.knex = knex;
        this.getMaxDefinitions = getMaxDefinitions;
    }
    /**
     * The active fields for a set of keys, keyed by key, for resolving a write.
     * Scoped to the keys the caller is actually writing rather than every active
     * field, since a publisher may have defined many and an edit touches few.
     */
    async activeFieldsByKey(keys) {
        if (keys.length === 0) {
            return new Map();
        }
        const fields = await (0, queries_1.activeFields)(this.knex)
            .whereIn('key', keys)
            .select('id', 'key', 'name', 'type');
        return new Map(fields.map(field => [field.key, field]));
    }
    /**
     * Members' values for every active field, keyed by member id, then by field
     * key. A member with no values is absent from the outer map; a field a member
     * has no value for is absent from the inner one — "not set" is the absence of
     * a key, told apart from a value by not being there. Archived fields are
     * excluded to match the definitions `browse`: their values stay in the
     * database, they just stop being addressable.
     *
     * One query for the whole set, so a member list can't turn into an N+1.
     *
     * Reading is best-effort per value: a stored value whose type has since left
     * the catalog, or that won't decode, is omitted and logged rather than failing
     * the whole read. Stored data outlives the catalog, so one stale row must not
     * take down a member's payload.
     */
    async getValuesForMembers(memberIds) {
        const byMember = new Map();
        if (memberIds.length === 0) {
            return byMember;
        }
        const rows = await this.knex(VALUES_TABLE)
            .join(FIELDS_TABLE, `${VALUES_TABLE}.custom_field_id`, `${FIELDS_TABLE}.id`)
            .whereIn(`${VALUES_TABLE}.member_id`, memberIds)
            // Read join, so the status filter is qualified and lives inline — it
            // shares the invariant's vocabulary with queries.ts, not its builder.
            .where(`${FIELDS_TABLE}.status`, schema_1.FIELD_STATUS.active)
            .orderBy(`${FIELDS_TABLE}.created_at`, 'asc')
            .orderBy(`${FIELDS_TABLE}.id`, 'asc')
            .select(`${VALUES_TABLE}.member_id`, `${FIELDS_TABLE}.key`, `${FIELDS_TABLE}.type`, `${VALUES_TABLE}.value_text`, `${VALUES_TABLE}.value_json`);
        for (const row of rows) {
            try {
                const { member_id: memberId, key, type, ...stored } = schema_1.DbCustomFieldValueWithField.parse(row);
                const codec = (0, storage_1.storageCodecFor)(type);
                const raw = stored[codec.column];
                // The column the type routes to is the only one that can hold this
                // field's value; a null there means the row is not carrying one.
                if (raw === null) {
                    continue;
                }
                const values = byMember.get(memberId) ?? {};
                values[key] = codec.decode(raw);
                byMember.set(memberId, values);
            }
            catch (err) {
                logging_1.default.warn(`Skipping undecodable custom field value (field '${row.key}', type '${row.type}'): ${err instanceof Error ? err.message : String(err)}`);
            }
        }
        return byMember;
    }
    /**
     * @private
     * Input as the values object it claims to be, rejecting anything that isn't
     * one. Shared by every caller so they cannot disagree on what a values object
     * is, or on the error when it isn't one.
     */
    parseValues(input) {
        const parsed = ValuesInput.safeParse(input);
        if (!parsed.success) {
            throw new errors_1.default.ValidationError({ message: 'Custom field values must be an object keyed by field key.', property: 'custom_fields' });
        }
        return parsed.data;
    }
    /**
     * Whether input names any values. An absent key names none; anything present
     * that isn't a values object throws, with the same error resolving it would
     * have raised.
     *
     * Answers the shape question alone, with no catalog lookup, so it can be asked
     * before a write is known to be permitted.
     */
    namesValues(input) {
        if (input === undefined) {
            return false;
        }
        return Object.keys(this.parseValues(input)).length > 0;
    }
    /**
     * Resolve input into the writes it implies, rejecting anything invalid, and
     * writing nothing. Returned so a caller can validate before it commits to a
     * change it would have to unwind (the member edit validates up front), then
     * apply the same plan without re-resolving or re-validating.
     */
    async planWrite(input) {
        const values = this.parseValues(input);
        const keys = Object.keys(values);
        // A write cannot name more fields than the site may define, so the
        // definitions ceiling bounds it. This also holds the lookup below within the
        // database driver's bound-parameter limit, which one key per parameter would
        // otherwise exceed.
        const maxKeys = this.getMaxDefinitions();
        if (keys.length > maxKeys) {
            throw new errors_1.default.ValidationError({
                message: `Custom field values are limited to ${maxKeys} fields per request.`,
                property: 'custom_fields'
            });
        }
        const byKey = await this.activeFieldsByKey(keys);
        const writes = [];
        for (const [key, raw] of Object.entries(values)) {
            const field = byKey.get(key);
            if (!field) {
                // Unknown (or archived) key. Rejected rather than ignored: a typo
                // that silently drops a value is worse than a failed save.
                throw new errors_1.default.ValidationError({ message: `Unknown custom field: ${key}`, property: `custom_fields.${key}` });
            }
            // `null` clears any field. An empty string clears a text-backed field —
            // an emptied input — but for any other storage type '' is a value to
            // validate, not a clear, so nothing is coerced: a string sent to a
            // (future) non-text field fails validation rather than silently deleting.
            if (raw === null || (raw === '' && custom_field_types_1.FIELD_TYPES[field.type].storageType === 'text')) {
                writes.push({ field });
                continue;
            }
            // The field type owns what a valid value is — core just runs it. For a
            // composite the issue path points at the offending sub-field, so the
            // property reads `custom_fields.home_address.postal_code`.
            const value = custom_field_types_1.FIELD_TYPES[field.type].value.safeParse(raw);
            if (!value.success) {
                const issue = value.error.issues[0];
                throw new errors_1.default.ValidationError({
                    message: `Invalid value for custom field '${field.name}'.`,
                    context: issue.message,
                    property: [`custom_fields.${key}`, ...issue.path].join('.')
                });
            }
            writes.push({ field, value: value.data });
        }
        return writes;
    }
    /**
     * Apply a plan from `planWrite`.
     *
     * Merge, not replace: only the fields in the plan are touched, so a caller
     * that doesn't know about a field can't erase it. The whole plan is applied in
     * one transaction, so a mid-batch failure rolls the batch back.
     */
    async applyWrite(memberId, writes) {
        if (writes.length === 0) {
            return;
        }
        await this.knex.transaction(async (trx) => {
            for (const { field, value } of writes) {
                const target = { member_id: memberId, custom_field_id: field.id };
                if (value === undefined) {
                    await trx(VALUES_TABLE).where(target).del();
                    continue;
                }
                const valueColumns = (0, storage_1.storageColumnsFor)(field.type, value);
                await trx(VALUES_TABLE)
                    .insert({ id: new bson_objectid_1.default().toHexString(), ...target, ...valueColumns, created_at: new Date() })
                    // The unique index on (member_id, custom_field_id) is
                    // what makes this an upsert rather than a read-then-write race.
                    .onConflict(['member_id', 'custom_field_id'])
                    .merge({ ...valueColumns, updated_at: new Date() });
            }
        });
    }
}
exports.CustomFieldValuesService = CustomFieldValuesService;
