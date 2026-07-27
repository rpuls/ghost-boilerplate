"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAll = bindAll;
const node_path_1 = __importDefault(require("node:path"));
const node_url_1 = require("node:url");
const DEFAULT_HOST_ARG = /.*/;
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getHostInfo(config) {
    const frontendHost = new node_url_1.URL(config.getSiteUrl()).hostname;
    const adminUrl = config.getAdminUrl();
    const backendHost = adminUrl ? new node_url_1.URL(adminUrl).hostname : '';
    const hasSeparateBackendHost = backendHost && backendHost !== frontendHost;
    return {
        backendHost,
        hasSeparateBackendHost
    };
}
function getBackendMountPath() {
    const { backendHost, hasSeparateBackendHost } = getHostInfo(this);
    // with a separate admin url only serve on that host, otherwise serve on all hosts
    return (hasSeparateBackendHost) && backendHost ? backendHost : DEFAULT_HOST_ARG;
}
function getFrontendMountPath() {
    const { backendHost, hasSeparateBackendHost } = getHostInfo(this);
    // with a separate admin url we adjust the frontend vhost to exclude requests to that host, otherwise serve on all hosts
    return (hasSeparateBackendHost && backendHost) ? new RegExp(`^(?!${escapeRegExp(backendHost)}).*`) : DEFAULT_HOST_ARG;
}
function isPrivacyDisabled(privacyFlag) {
    if (!this.get('privacy')) {
        return false;
    }
    // CASE: disable all privacy features
    if (this.get('privacy').useTinfoil === true) {
        // CASE: you can still enable single features
        if (this.get('privacy')[privacyFlag] === true) {
            return false;
        }
        return true;
    }
    return this.get('privacy')[privacyFlag] === false;
}
function getContentPath(type) {
    switch (type) {
        case 'images':
            return node_path_1.default.join(this.get('paths:contentPath'), 'images/');
        case 'media':
            return node_path_1.default.join(this.get('paths:contentPath'), 'media/');
        case 'files':
            return node_path_1.default.join(this.get('paths:contentPath'), 'files/');
        case 'themes':
            return node_path_1.default.join(this.get('paths:contentPath'), 'themes/');
        case 'adapters':
            return node_path_1.default.join(this.get('paths:contentPath'), 'adapters/');
        case 'logs':
            return node_path_1.default.join(this.get('paths:contentPath'), 'logs/');
        case 'data':
            return node_path_1.default.join(this.get('paths:contentPath'), 'data/');
        case 'settings':
            return node_path_1.default.join(this.get('paths:contentPath'), 'settings/');
        case 'public':
            return node_path_1.default.join(this.get('paths:contentPath'), 'public/');
        default:
            // new Error is allowed here, as we do not want config to depend on @tryghost/error
            // @TODO: revisit this decision when @tryghost/error is no longer dependent on all of ghost-ignition
            // eslint-disable-next-line ghost/ghost-custom/no-native-error
            throw new Error('getContentPath was called with: ' + type);
    }
}
function isTestEnv() {
    return this.get('env').startsWith('test');
}
/**
 * env defaults to 'development' when NODE_ENV is unset (see getNodeEnv() in
 * ./utils.ts), matching ghost.js's own `process.env.NODE_ENV = process.env.NODE_ENV
 * || 'development'` at the real CLI entry point — so in any Ghost boot via the
 * normal entry point, this and a raw `process.env.NODE_ENV` check agree. They
 * only diverge for programmatic embedders that require core modules directly
 * without going through ghost.js and never set NODE_ENV themselves — those now
 * count as 'development' (e.g. explore-ping/update-check will phone home)
 * rather than being silently skipped.
 */
function isProductionOrDevelopment() {
    return ['development', 'production'].includes(this.get('env'));
}
function bindAll(nconf) {
    const target = nconf;
    target.isPrivacyDisabled = isPrivacyDisabled.bind(nconf);
    target.getContentPath = getContentPath.bind(nconf);
    target.getBackendMountPath = getBackendMountPath.bind(nconf);
    target.getFrontendMountPath = getFrontendMountPath.bind(nconf);
    target.isTestEnv = isTestEnv.bind(nconf);
    target.isProductionOrDevelopment = isProductionOrDevelopment.bind(nconf);
}
