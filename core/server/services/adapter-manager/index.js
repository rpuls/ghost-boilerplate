"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ghost_storage_base_1 = require("ghost-storage-base");
const adapter_base_scheduling_1 = require("@tryghost/adapter-base-scheduling");
const adapter_base_sso_1 = require("@tryghost/adapter-base-sso");
const adapter_base_cache_1 = require("@tryghost/adapter-base-cache");
const adapter_base_redirects_1 = require("@tryghost/adapter-base-redirects");
const adapter_base_route_settings_1 = require("@tryghost/adapter-base-route-settings");
const adapter_manager_1 = require("./adapter-manager");
const config_1 = __importDefault(require("../../../shared/config"));
const adapterPaths = new Set([
    '', // A blank path will cause us to check node_modules for the adapter
    config_1.default.get('paths').internalAdaptersPath,
    // custom docker builds may install adapters in a separate path from content,
    // since the content dir is often bind-mounted into the container. Offering
    // an escape hatch here to allow for this
    config_1.default.get('paths').installedAdaptersPath ?? '',
    // load adapters from content last, so that they don't override any other
    // internal or platform-installed adapters
    // TODO: potentially deprecate/remove as part of Ghost 7.0
    config_1.default.getContentPath('adapters'),
]);
// A singleton adapter manager, preconfigured with the base classes for every
// known adapter type. `getAdapter` resolves the active adapter and its options
// from config on each call, so runtime config changes are always reflected.
const adapterManager = new adapter_manager_1.AdapterManager({
    loadAdapterFromPath: require,
    config: config_1.default,
    pathsToAdapters: Array.from(adapterPaths),
    baseClasses: {
        storage: ghost_storage_base_1.StorageBase,
        scheduling: adapter_base_scheduling_1.SchedulingBase,
        sso: adapter_base_sso_1.SSOBase,
        cache: adapter_base_cache_1.CacheBase,
        redirects: adapter_base_redirects_1.RedirectsStoreBase,
        'route-settings': adapter_base_route_settings_1.RouteSettingsStoreBase
    }
});
exports.default = adapterManager;
