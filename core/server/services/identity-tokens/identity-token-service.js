"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityTokenService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class IdentityTokenService {
    privateKey;
    issuer;
    keyId;
    constructor(privateKey, issuer, keyId) {
        this.privateKey = privateKey;
        this.issuer = issuer;
        this.keyId = keyId;
    }
    async getTokenForUser(email, role) {
        const claims = {
            sub: email
        };
        if (typeof role === 'string') {
            claims.role = role;
        }
        const token = (0, jsonwebtoken_1.sign)(claims, this.privateKey, {
            issuer: this.issuer,
            expiresIn: '5m',
            algorithm: 'RS256',
            keyid: this.keyId
        });
        return token;
    }
}
exports.IdentityTokenService = IdentityTokenService;
