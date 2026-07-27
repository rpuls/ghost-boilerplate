"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_base_sso_1 = require("@tryghost/adapter-base-sso");
class DefaultSSOAdapter extends adapter_base_sso_1.SSOBase {
    async getRequestCredentials() {
        return null;
    }
    async getIdentityFromCredentials() {
        return null;
    }
    async getUserForIdentity() {
        return null;
    }
}
exports.default = DefaultSSOAdapter;
;
