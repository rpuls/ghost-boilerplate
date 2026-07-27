"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_scheduling_1 = __importDefault(require("./post-scheduling"));
const internal_keys_1 = __importDefault(require("../internal-keys"));
const adapter_manager_1 = __importDefault(require("../adapter-manager"));
const error_capture_1 = require("../../adapters/scheduling/error-capture");
// CJS modules without TS declarations — typed loosely at the boundary.
const urlUtils = require('../../../shared/url-utils').default;
exports.default = new post_scheduling_1.default({
    apiUrl: urlUtils.urlFor('api', { type: 'admin' }, true),
    adapter: (0, error_capture_1.withErrorCapture)(adapter_manager_1.default.getAdapter('scheduling')),
    internalKeys: internal_keys_1.default
});
