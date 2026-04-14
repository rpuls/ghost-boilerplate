"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const messages = {
    invalidExpiresAt: 'expires_at must be a valid ISO 8601 date string'
};
// module.exports required - using `export` causes the module to fail to register
// with the serializer layer as it's loaded via require()
module.exports = {
    disable(_apiConfig, frame) {
        if (frame.data.expires_at !== undefined && frame.data.expires_at !== null) {
            const parsed = new Date(frame.data.expires_at);
            if (isNaN(parsed.getTime())) {
                throw new errors_1.default.ValidationError({
                    message: (0, tpl_1.default)(messages.invalidExpiresAt),
                    property: 'expires_at'
                });
            }
            frame.data.expires_at = parsed;
        }
    }
};
