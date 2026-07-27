"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCustomFieldsResponse = void 0;
const zod_1 = require("zod");
const case_keys_1 = require("../../lib/case-keys");
const models_1 = require("./models");
// Response schema — the field-definition shape the admin endpoints emit. `id` is
// the DB primary key and deliberately never leaves the API; a field is addressed
// by its immutable `key`. The `.pipe` below strips id from the mapped output.
const CustomFieldResource = zod_1.z.object({
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    status: zod_1.z.string(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date().nullable()
});
const CustomFieldsResponse = zod_1.z.object({ members_custom_fields: zod_1.z.array(CustomFieldResource) });
exports.toCustomFieldsResponse = zod_1.z.array(models_1.CustomField)
    .transform((fields) => ({
    members_custom_fields: fields.map(field => (0, case_keys_1.snakeKeys)(field))
}))
    .pipe(CustomFieldsResponse);
