"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterManager = void 0;
const node_path_1 = __importDefault(require("node:path"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const utils_1 = require("./utils");
/**
 * AdapterManager loads, validates and caches adapter instances by type.
 *
 * The set of known adapter types (and the base class each must extend) is fixed
 * at construction time via the `baseClasses` map. The `BaseClasses` type
 * parameter is inferred from that map, so `getAdapter` can return a
 * precisely-typed instance:
 *
 * ```ts
 * const mgr = new AdapterManager({
 *     pathsToAdapters,
 *     loadAdapterFromPath,
 *     config,
 *     baseClasses: {sso: SSOBase, storage: StorageBase}
 * });
 *
 * mgr.getAdapter('sso');            // => SSOBase instance
 * mgr.getAdapter('storage:images'); // => StorageBase instance
 * ```
 */
class AdapterManager {
    baseClasses;
    instanceCache;
    pathsToAdapters;
    loadAdapterFromPath;
    config;
    constructor({ pathsToAdapters, loadAdapterFromPath, baseClasses, config }) {
        this.baseClasses = {};
        this.instanceCache = {};
        this.pathsToAdapters = pathsToAdapters;
        this.loadAdapterFromPath = loadAdapterFromPath;
        this.config = config;
        for (const [type, BaseClass] of Object.entries(baseClasses)) {
            if (type.includes(':')) {
                throw new errors_1.default.IncorrectUsageError({
                    message: `Adapter type "${type}" cannot contain a colon.`
                });
            }
            this.instanceCache[type] = {};
            this.baseClasses[type] = BaseClass;
        }
    }
    /**
     * Force recreation of all instances instead of reusing cached instances.
     * Use when editing config file during tests.
     */
    clearCache() {
        for (const key of Object.keys(this.instanceCache)) {
            this.instanceCache[key] = {};
        }
    }
    getAdapter(name) {
        if (!name) {
            throw new errors_1.default.IncorrectUsageError({
                message: 'getAdapter must be called with an adapter name.'
            });
        }
        const { Adapter, adapterConfig, adapterType, adapterClassName } = this.loadAdapter(name);
        const adapterCache = this.instanceCache[adapterType];
        // @NOTE: example cache key value 'email:newsletters:custom-newsletter-adapter'
        const adapterCacheKey = `${name}:${adapterClassName}`;
        if (adapterCache[adapterCacheKey]) {
            return adapterCache[adapterCacheKey];
        }
        // `Adapter` is an abstract-compatible constructor type; the runtime value
        // is always a concrete class here, so instantiation is safe.
        const AdapterClass = Adapter;
        const adapter = new AdapterClass(adapterConfig);
        const BaseClass = this.baseClasses[adapterType];
        if (!(adapter instanceof BaseClass)) {
            if (Object.getPrototypeOf(Adapter).name !== BaseClass.name) {
                throw new errors_1.default.IncorrectUsageError({
                    message: `${adapterType} adapter ${adapterClassName} does not inherit from the base class.`
                });
            }
        }
        if (!Array.isArray(adapter.requiredFns)) {
            throw new errors_1.default.IncorrectUsageError({
                message: `${adapterType} adapter ${adapterClassName} does not have the requiredFns array.`
            });
        }
        for (const requiredFn of adapter.requiredFns) {
            if (typeof adapter[requiredFn] !== 'function') {
                throw new errors_1.default.IncorrectUsageError({
                    message: `${adapterType} adapter ${adapterClassName} is missing the ${requiredFn} method.`
                });
            }
        }
        adapterCache[adapterCacheKey] = adapter;
        return adapter;
    }
    /**
     * Resolve the active adapter class name and options for `name` from config,
     * then locate and load the adapter constructor from `pathsToAdapters`.
     *
     * Does not instantiate the adapter or touch the instance cache — shared by
     * `getAdapter` (which instantiates + caches) and `init` (which validates).
     */
    loadAdapter(name) {
        // Re-read config on every call so runtime config changes (and test config
        // overrides) are reflected, matching the original JS implementation.
        const adapterServiceConfig = (0, utils_1.normalizeAdapterConfig)(this.config);
        const { adapterClassName, adapterConfig } = (0, utils_1.resolveAdapterOptions)(name, adapterServiceConfig);
        const [adapterType] = name.split(':');
        if (!this.baseClasses[adapterType]) {
            throw new errors_1.default.NotFoundError({
                message: `Unknown adapter type ${adapterType}. Please register adapter.`
            });
        }
        if (!adapterClassName) {
            throw new errors_1.default.IncorrectUsageError({
                message: `Unable to find ${adapterType} adapter in ${this.pathsToAdapters}.`
            });
        }
        let Adapter = null;
        for (const pathToAdapters of this.pathsToAdapters) {
            let pathToAdapter = node_path_1.default.join(pathToAdapters, adapterType, adapterClassName);
            if (pathToAdapters === '') {
                // We are loading from node_modules, we can remove the `adapterType` prefix
                pathToAdapter = node_path_1.default.join(pathToAdapters, adapterClassName);
            }
            // An adapter directory may be a full module with its own
            // package.json, in which case this resolves the `exports` entry
            // point; otherwise the path passes through unchanged.
            const moduleToLoad = (0, utils_1.resolveAdapterEntryPoint)(pathToAdapter);
            try {
                const adapterModule = this.loadAdapterFromPath(moduleToLoad);
                Adapter = (0, utils_1.resolveAdapterExport)(adapterModule);
                if (Adapter) {
                    break;
                }
            }
            catch (err) {
                // Catch runtime errors
                if (!(err instanceof Error) || err.code !== 'MODULE_NOT_FOUND') {
                    throw new errors_1.default.IncorrectUsageError({ err: err });
                }
                // Catch missing dependencies BUT NOT missing adapter.
                // Only check the first line — Node appends a "Require stack"
                // that includes the adapter's own path, which would false-positive.
                const firstLine = err.message.split('\n')[0];
                if (!firstLine.includes(pathToAdapter)) {
                    // Name the unresolved module so the error is actionable, e.g.
                    // "Cannot find module 'superagent'" -> 'superagent'.
                    const missingMatch = /Cannot find module '([^']+)'/.exec(firstLine);
                    const missingModule = missingMatch ? ` '${missingMatch[1]}'` : '';
                    throw new errors_1.default.IncorrectUsageError({
                        message: `You are missing a dependency${missingModule} in your adapter ${pathToAdapter}`,
                        err: err
                    });
                }
            }
        }
        if (!Adapter) {
            throw new errors_1.default.IncorrectUsageError({
                message: `Unable to find ${adapterType} adapter ${adapterClassName} in ${this.pathsToAdapters}.`
            });
        }
        return { Adapter, adapterConfig: adapterConfig ?? {}, adapterType, adapterClassName };
    }
    /**
     * Validate the config of every configured adapter up-front, so
     * misconfiguration fails at boot rather than on first lazy `getAdapter`.
     *
     * Enumerates the active adapter for each registered type plus every
     * configured feature variant (e.g. `storage:media`), resolves each to a
     * distinct class + config, and calls the adapter's optional static
     * `validate` when present. All failures — bad config or a failure to load a
     * configured adapter — are aggregated into a single error so an operator
     * sees every problem at once. Types with no configured adapter are skipped;
     * presence is still enforced on use by `getAdapter`.
     */
    init() {
        const adapterServiceConfig = (0, utils_1.normalizeAdapterConfig)(this.config);
        // 1. Enumerate every configured adapter name (active + feature variants).
        const names = [];
        for (const adapterType of Object.keys(this.baseClasses)) {
            names.push(adapterType);
            for (const feature of (0, utils_1.getConfiguredFeatures)(adapterServiceConfig[adapterType])) {
                names.push(`${adapterType}:${feature}`);
            }
        }
        // 2. Resolve to distinct class + config pairs, skipping unconfigured
        //    types/features and deduping identical class+config combinations.
        const distinct = new Map();
        for (const name of names) {
            const { adapterClassName, adapterConfig } = (0, utils_1.resolveAdapterOptions)(name, adapterServiceConfig);
            if (!adapterClassName) {
                continue;
            }
            const [adapterType] = name.split(':');
            const key = `${adapterType}:${adapterClassName}:${JSON.stringify(adapterConfig ?? {})}`;
            if (!distinct.has(key)) {
                distinct.set(key, name);
            }
        }
        // 3. Load + validate each distinct adapter, aggregating all failures.
        const failures = [];
        for (const name of distinct.values()) {
            try {
                const { Adapter, adapterConfig } = this.loadAdapter(name);
                if (typeof Adapter.validate === 'function') {
                    Adapter.validate(adapterConfig);
                }
            }
            catch (err) {
                failures.push({ name, err: err });
            }
        }
        if (failures.length > 0) {
            const details = failures.map(({ name, err }) => `- ${name}: ${err.message}`).join('\n');
            throw new errors_1.default.IncorrectUsageError({
                message: `Invalid adapter configuration:\n${details}`,
                errorDetails: failures.map(({ name, err }) => ({ adapter: name, message: err.message }))
            });
        }
    }
}
exports.AdapterManager = AdapterManager;
