"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serializers_1 = require("../../../../../services/members-custom-fields/serializers");
const serializeOne = (field, _apiConfig, frame) => {
    frame.response = serializers_1.toCustomFieldsResponse.parse([field]);
};
const serializeMany = (fields, _apiConfig, frame) => {
    frame.response = serializers_1.toCustomFieldsResponse.parse(fields);
};
// module.exports (not export): the API framework loads serializers via require(). The endpoint ->
// serializer mapping lives here; the response shaping lives with the members-custom-fields service.
module.exports = {
    browse: serializeMany,
    read: serializeOne,
    // Create is a batch, so it returns every definition it made. The response is
    // already an array, so a one-item create looks exactly as it did before.
    add: serializeMany,
    edit: serializeOne
};
