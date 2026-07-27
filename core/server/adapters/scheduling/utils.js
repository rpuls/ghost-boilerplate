"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignedAdminToken = getSignedAdminToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
function getSignedAdminToken({ publishedAt, apiUrl, key }) {
    const opts = {
        keyid: key.id,
        algorithm: 'HS256',
        audience: apiUrl,
        noTimestamp: true
    };
    // Default token expiry is till 6 hours after scheduled time
    // or if published_at is in past then till 6 hours after blog start
    // to allow for retries in case of network issues
    // and never before 10 mins to publish time
    let tokenExpiry = (0, moment_1.default)(publishedAt).add(6, 'h');
    if (tokenExpiry.isBefore((0, moment_1.default)())) {
        tokenExpiry = (0, moment_1.default)().add(6, 'h');
    }
    return jsonwebtoken_1.default.sign({
        exp: tokenExpiry.unix(),
        nbf: (0, moment_1.default)(publishedAt).subtract(10, 'm').unix(),
    }, Buffer.from(key.secret, 'hex'), opts);
}
