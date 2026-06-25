"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_scheduling_1 = __importDefault(require("./post-scheduling"));
const internal_keys_1 = __importDefault(require("../internal-keys"));
// CJS modules without TS declarations — typed loosely at the boundary.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterManager = require('../adapter-manager');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const urlUtils = require('../../../shared/url-utils');
exports.default = new post_scheduling_1.default({
    apiUrl: urlUtils.urlFor('api', { type: 'admin' }, true),
    adapter: adapterManager.getAdapter('scheduling'),
    internalKeys: internal_keys_1.default
});
