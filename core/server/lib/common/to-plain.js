"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPlain = void 0;
const isJsonSerializable = (modelOrObj) => !!(modelOrObj
    && typeof modelOrObj === 'object'
    && 'toJSON' in modelOrObj
    && typeof modelOrObj.toJSON === 'function');
const toPlain = (modelOrObj) => (isJsonSerializable(modelOrObj) ? modelOrObj.toJSON() : modelOrObj);
exports.toPlain = toPlain;
