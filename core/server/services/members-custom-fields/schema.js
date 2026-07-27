"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCustomFieldValueWithField = exports.DbCustomFieldValue = exports.DbCustomField = exports.FieldStatusSchema = exports.FIELD_STATUS = void 0;
const zod_1 = require("zod");
const custom_field_types_1 = require("@tryghost/custom-field-types");
const db_date_1 = require("../../lib/db-date");
// A field's lifecycle state. `archived` is a soft state: the field drops out of
// the values path but stays visible in the definition list (with its status) so
// admins can find, rename, restore, or permanently delete it. The values mirror
// schema.js's `isIn` constraint on the column — which is static config and can't
// import this, so that one stays literal with a pointer back here.
exports.FIELD_STATUS = { active: 'active', archived: 'archived' };
exports.FieldStatusSchema = zod_1.z.enum([exports.FIELD_STATUS.active, exports.FIELD_STATUS.archived]);
// The members_custom_fields row: the single source for the read projection and the
// knex table type below. `type` is validated as the field-type enum here (the DB
// only stores registered types), so the row already carries the narrow type and
// the definition codec needs no cast. `status` travels with the row: it's part of
// the read projection so the definition list can group active vs archived.
exports.DbCustomField = zod_1.z.object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
    status: exports.FieldStatusSchema,
    created_at: db_date_1.DbDate,
    updated_at: db_date_1.DbDate.nullable()
});
// A member's stored value for one field. `value_text`/`value_json` are the raw
// columns — which one carries the value, and how it decodes, is the storage
// codec's business (see storage.ts), so they're plain nullable strings here.
exports.DbCustomFieldValue = zod_1.z.object({
    id: zod_1.z.string(),
    custom_field_id: zod_1.z.string(),
    member_id: zod_1.z.string(),
    value_text: zod_1.z.string().nullable(),
    value_json: zod_1.z.string().nullable(),
    created_at: db_date_1.DbDate,
    updated_at: db_date_1.DbDate.nullable()
});
// The value join a read needs: the field's identity and type travel with the
// stored columns, so a row can be decoded without a second lookup. `type` is
// parsed as the field-type enum, which narrows it with no cast.
exports.DbCustomFieldValueWithField = zod_1.z.object({
    member_id: zod_1.z.string(),
    key: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
    value_text: zod_1.z.string().nullable(),
    value_json: zod_1.z.string().nullable()
});
