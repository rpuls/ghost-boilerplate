"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectAdminApiRestrictedFieldsTransformer = exports.rejectContentApiRestrictedFieldsTransformer = void 0;
const mongo_utils_1 = require("@tryghost/mongo-utils");
const CONTENT_API_RESTRICTED_FIELDS = new Set([
    'password',
    'email'
]);
const ADMIN_API_RESTRICTED_FIELDS = new Set([
    'password'
]);
function hasRestrictedSegment(key, fields) {
    return key.toLowerCase().split('.').some(segment => fields.has(segment));
}
const rejectContentApiRestrictedFieldsTransformer = (input) => {
    return (0, mongo_utils_1.rejectStatements)(input, (key) => hasRestrictedSegment(key, CONTENT_API_RESTRICTED_FIELDS));
};
exports.rejectContentApiRestrictedFieldsTransformer = rejectContentApiRestrictedFieldsTransformer;
const rejectAdminApiRestrictedFieldsTransformer = (input) => {
    return (0, mongo_utils_1.rejectStatements)(input, (key) => hasRestrictedSegment(key, ADMIN_API_RESTRICTED_FIELDS));
};
exports.rejectAdminApiRestrictedFieldsTransformer = rejectAdminApiRestrictedFieldsTransformer;
