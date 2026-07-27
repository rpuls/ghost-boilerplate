"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomField = void 0;
const zod_1 = require("zod");
const custom_field_types_1 = require("@tryghost/custom-field-types");
const schema_1 = require("./schema");
// The domain shape of a field definition (camelCase; distinct from the DB row).
exports.CustomField = zod_1.z.object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
    status: schema_1.FieldStatusSchema,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date().nullable()
});
