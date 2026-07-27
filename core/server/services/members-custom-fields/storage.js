"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageCodecFor = storageCodecFor;
exports.storageColumnsFor = storageColumnsFor;
const custom_field_types_1 = require("@tryghost/custom-field-types");
const STORAGE_CODECS = {
    // The value is already a string by the time it gets here — the field type's
    // schema validated it — so encoding is identity.
    text: {
        column: 'value_text',
        encode: value => String(value),
        decode: stored => stored
    },
    json: {
        column: 'value_json',
        encode: value => JSON.stringify(value),
        decode: stored => JSON.parse(stored)
    }
};
function storageCodecFor(type) {
    return STORAGE_CODECS[custom_field_types_1.FIELD_TYPES[type].storageType];
}
/**
 * The value columns for a row, with the one this field type doesn't use
 * explicitly nulled — the "exactly one column populated" invariant is written
 * out on every insert and update rather than left to convention.
 */
function storageColumnsFor(type, value) {
    const codec = storageCodecFor(type);
    return {
        value_text: null,
        value_json: null,
        [codec.column]: codec.encode(value)
    };
}
