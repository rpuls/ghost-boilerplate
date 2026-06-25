"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectsService = void 0;
const logging_1 = __importDefault(require("@tryghost/logging"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors = __importStar(require("@tryghost/errors"));
const dynamic_redirect_manager_1 = __importDefault(require("../lib/dynamic-redirect-manager"));
const errify_1 = require("../../../shared/errify");
const messages = {
    redirectsRegister: 'Could not register custom redirects.',
    redirectsHelp: 'https://ghost.org/docs/themes/routing/#redirects',
    skippedInvalidRedirect: 'Skipped invalid redirect: {context}',
    rejectedRedirect: 'Could not register redirect: {from} -> {to}',
    allRedirectsSkipped: 'None of the {total} redirect(s) in the store could be activated. Check the logged errors above.'
};
const defaultCreateDryRunManager = () => new dynamic_redirect_manager_1.default({
    permanentMaxAge: 0,
    getSubdirectoryURL: (pathname) => pathname
});
/**
 * Splits storage from activation so the in-memory router can be
 * rebuilt without writing a file. The future cross-instance notifier
 * (out of scope here) needs `activate()` standalone.
 */
class RedirectsService {
    store;
    redirectManager;
    validate;
    createDryRunManager;
    constructor({ store, redirectManager, validate, createDryRunManager = defaultCreateDryRunManager }) {
        this.store = store;
        this.redirectManager = redirectManager;
        this.validate = validate;
        this.createDryRunManager = createDryRunManager;
    }
    /**
     * Read-then-clear ordering: if the store throws, the previously
     * active redirects are left in place rather than wiped to empty.
     */
    async activate() {
        const redirects = await this.store.getAll();
        this._loadIntoManager(redirects, { validatePerItem: true, failFast: false });
    }
    /**
     * Pre-flights every entry into a throwaway manager so a regex
     * that survives `validate()` but fails the manager's stricter
     * buildRegex rejects the whole upload. Without this,
     * `store.replaceAll()` could succeed and the per-item skip path
     * would leave disk and memory partially synchronised.
     */
    async replace(redirects) {
        this.validate(redirects);
        this._verifyAllLoadable(redirects);
        await this.store.replaceAll(redirects);
        this._loadIntoManager(redirects, { validatePerItem: false, failFast: true });
    }
    _verifyAllLoadable(redirects) {
        const dryRun = this.createDryRunManager();
        for (const redirect of redirects) {
            // addRedirect signals rejection two ways — `null` for an
            // invalid built regex, or a thrown error otherwise. Unify
            // into ValidationError so replace() returns 4xx not 500.
            let id;
            try {
                id = dryRun.addRedirect(redirect.from, redirect.to, {
                    permanent: redirect.permanent
                });
            }
            catch (err) {
                throw this._buildRejectedError(redirect, err);
            }
            if (id === null) {
                throw this._buildRejectedError(redirect);
            }
        }
    }
    /**
     * - `validatePerItem`: boot calls `validate()` per entry because
     *   nothing else has; upload has already batch-validated.
     * - `failFast`: upload re-throws on any failure because the
     *   dry-run was supposed to make this branch unreachable.
     *   Reaching it means an invariant broke (e.g. dry-run and live
     *   manager construction drifted apart) and silent partial
     *   activation is worse than a 5xx. Boot keeps skip-and-log so a
     *   single bad redirect on disk doesn't take the whole config out.
     */
    _loadIntoManager(redirects, { validatePerItem, failFast }) {
        this.redirectManager.removeAllRedirects();
        let loaded = 0;
        for (const redirect of redirects) {
            try {
                if (validatePerItem) {
                    this.validate([redirect]);
                }
                const id = this.redirectManager.addRedirect(redirect.from, redirect.to, {
                    permanent: redirect.permanent
                });
                if (id === null) {
                    throw this._buildRejectedError(redirect);
                }
                loaded += 1;
            }
            catch (rawError) {
                if (failFast) {
                    throw rawError;
                }
                const err = (0, errify_1.errify)(rawError);
                logging_1.default.error(new errors.IncorrectUsageError({
                    message: (0, tpl_1.default)(messages.skippedInvalidRedirect, { context: err.message }),
                    err
                }));
            }
        }
        if (!failFast && redirects.length > 0 && loaded === 0) {
            logging_1.default.error(new errors.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.allRedirectsSkipped, { total: redirects.length }),
                help: (0, tpl_1.default)(messages.redirectsHelp)
            }));
        }
    }
    _buildRejectedError(redirect, cause) {
        return new errors.ValidationError({
            message: (0, tpl_1.default)(messages.rejectedRedirect, {
                from: redirect.from,
                to: redirect.to
            }),
            help: (0, tpl_1.default)(messages.redirectsHelp),
            ...(cause !== undefined ? { err: (0, errify_1.errify)(cause) } : {})
        });
    }
    async getAll() {
        return this.store.getAll();
    }
    /**
     * Boot wrapper. Swallows errors so a misconfigured / unreadable
     * store doesn't crash Ghost.
     */
    async init() {
        try {
            await this.activate();
        }
        catch (rawError) {
            const err = (0, errify_1.errify)(rawError);
            if (errors.utils.isGhostError(err)) {
                logging_1.default.error(err);
            }
            else {
                logging_1.default.error(new errors.IncorrectUsageError({
                    message: (0, tpl_1.default)(messages.redirectsRegister),
                    context: err.message,
                    help: (0, tpl_1.default)(messages.redirectsHelp),
                    err
                }));
            }
        }
    }
}
exports.RedirectsService = RedirectsService;
