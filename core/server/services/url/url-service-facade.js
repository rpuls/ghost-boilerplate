"use strict";
/**
 * UrlServiceFacade
 *
 * Sits in front of the URL service so callers can use a stable, resource-based
 * interface regardless of the underlying implementation. The facade can be
 * built with two backends:
 *
 *  - urlService:     the legacy eager UrlService that precomputes a full
 *                    resource → URL map at boot.
 *  - lazyUrlService: an on-demand implementation (LazyUrlService) that
 *                    computes URLs and ownership per call.
 *
 * When `lazyUrlService` is provided the facade routes calls to it; otherwise
 * it delegates to the eager `urlService`. This lets the lazy implementation be
 * swapped in behind a config flag without touching individual callers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlServiceFacade = void 0;
const _ = require('lodash');
const logging = require('@tryghost/logging');
const errors = require('@tryghost/errors');
class UrlServiceFacade {
    urlService;
    lazyUrlService;
    compare;
    fetchRoutableResources;
    enumComparesInFlight;
    constructor({ urlService, lazyUrlService = null, compare = false, fetchRoutableResources = null }) {
        this.urlService = urlService;
        this.lazyUrlService = lazyUrlService;
        this.compare = compare;
        this.fetchRoutableResources = fetchRoutableResources;
        this.enumComparesInFlight = new Set();
    }
    isLazy() {
        return !!this.lazyUrlService && !this.compare;
    }
    isComparing() {
        return this.compare && !!this.lazyUrlService;
    }
    /**
     * The full resource record is required: the lazy backend evaluates NQL
     * filters and applies permalink templates against it.
     */
    getUrlForResource(resource, options) {
        if (this.isLazy()) {
            return this.lazyUrlService.getUrlForResource(resource, options);
        }
        const url = this.urlService.getUrlByResourceId(resource.id, options);
        if (this.isComparing() && !options?.skipComparison) {
            const context = this._compareContext(resource);
            // Snapshot: callers mutate the resource's nested objects in place
            // after this returns, but the comparison runs later via setImmediate.
            const snapshot = _.cloneDeep(resource);
            setImmediate(() => this._compare('getUrlForResource', url, () => this.lazyUrlService.getUrlForResource(snapshot, options), context));
        }
        return url;
    }
    /**
     * All routable rows of a type. Eager answers from its in-memory cache;
     * lazy fetches from the database on demand. In compare mode the eager
     * answer is returned and the lazy fetch runs in the background, with any
     * id-set divergence logged — counts and id samples only, never row
     * bodies (a large site has hundreds of thousands).
     */
    async getRoutableResources(type, options = {}) {
        if (this.isLazy()) {
            if (!this.fetchRoutableResources) {
                throw new errors.IncorrectUsageError({
                    message: 'getRoutableResources requires an injected fetchRoutableResources in lazy mode'
                });
            }
            return this.fetchRoutableResources(type, options);
        }
        const eagerRows = (this.urlService.resources.getAllByType(type) || []).map(resource => resource.data);
        // Single-flight per type: rapid invalidation cycles must not stack
        // concurrent full-table comparison walks.
        if (this.isComparing() && this.fetchRoutableResources && !this.enumComparesInFlight.has(type)) {
            this.enumComparesInFlight.add(type);
            void this._compareRoutableResources(type, options, eagerRows).finally(() => {
                this.enumComparesInFlight.delete(type);
            });
        }
        return eagerRows;
    }
    async _compareRoutableResources(type, options, eagerRows) {
        let lazyRows;
        try {
            lazyRows = await this.fetchRoutableResources(type, options);
        }
        catch (err) {
            this._reportLazyError('getRoutableResources', err, { type });
            return;
        }
        const eagerIds = new Set(eagerRows.map(row => row.id));
        const lazyIds = new Set(lazyRows.map(row => row.id));
        const missingFromLazy = [...eagerIds].filter(id => !lazyIds.has(id));
        const extraInLazy = [...lazyIds].filter(id => !eagerIds.has(id));
        if (!missingFromLazy.length && !extraInLazy.length) {
            return;
        }
        this._report(new errors.InternalServerError({
            message: 'URL service parity mismatch',
            code: 'LAZY_URL_PARITY_MISMATCH',
            errorDetails: {
                method: 'getRoutableResources',
                type,
                eagerCount: eagerIds.size,
                lazyCount: lazyIds.size,
                missingFromLazy: missingFromLazy.slice(0, 10),
                extraInLazy: extraInLazy.slice(0, 10)
            }
        }));
    }
    ownsResource(routerIdentifier, resource) {
        if (this.isLazy()) {
            return this.lazyUrlService.ownsResource(routerIdentifier, resource);
        }
        const owns = this.urlService.owns(routerIdentifier, resource.id);
        if (this.isComparing()) {
            const context = this._compareContext(resource, { routerIdentifier });
            // Snapshot, as in getUrlForResource.
            const snapshot = _.cloneDeep(resource);
            setImmediate(() => this._compare('ownsResource', owns, () => this.lazyUrlService.ownsResource(routerIdentifier, snapshot), context));
        }
        return owns;
    }
    // Context for a compare report. Must be built synchronously in the calling
    // frame: the comparison itself runs from setImmediate, where the caller's
    // stack is gone — so a lazy throw reported there names only the URL service
    // internals, not which caller handed over the (possibly thin) resource.
    // `caller` recaptures those frames; `resourceKeys` fingerprints the shape
    // the caller passed (e.g. a Content-API-serialized post vs a full model).
    _compareContext(resource, extra = {}) {
        const caller = {};
        Error.captureStackTrace(caller, this._compareContext);
        return {
            type: resource.type,
            id: resource.id,
            status: resource.status,
            resourceKeys: Object.keys(resource),
            caller: caller.stack,
            ...extra
        };
    }
    /**
     * Reverse URL lookup. Returns a flat resource shape (e.g. `{type, id, slug}`)
     * rather than the legacy `{config: {type}, data: {...}}` envelope. Async to
     * match the lazy implementation's contract.
     */
    async resolveUrl(urlPath) {
        if (this.isLazy()) {
            return this.lazyUrlService.resolveUrl(urlPath);
        }
        const resource = this.urlService.getResource(urlPath);
        // The routing-level type ('posts', 'pages', 'tags', 'authors') wins
        // over any DB type field on resource.data so the flat Resource is
        // unambiguous.
        const eagerResult = resource
            ? Object.assign({}, resource.data, { type: resource.config.type })
            : null;
        if (this.isComparing()) {
            // Fire-and-forget: don't await lazy so the reverse lookup adds no
            // latency for its callers; the lazy DB read runs in the background.
            // Snapshot the eager result, as in getUrlForResource.
            const eagerSnapshot = _.cloneDeep(eagerResult);
            void this._compareAsync('resolveUrl', eagerSnapshot, () => this.lazyUrlService.resolveUrl(urlPath), { path: urlPath }, (a, b) => this._resolvesToSameResource(a, b));
        }
        return eagerResult;
    }
    // Returns [] when there is no lazy backend: eager looks URLs up by id and
    // never touches a resource's relations.
    getRequiredRelations() {
        if (this.lazyUrlService) {
            return this.lazyUrlService.getRequiredRelations();
        }
        return [];
    }
    // Columns a resource of this type must carry for the lazy backend to build
    // its URL. [] with no lazy backend: eager looks URLs up by id and never
    // reads these fields.
    getRequiredFields(routerType) {
        if (this.lazyUrlService) {
            return this.lazyUrlService.getRequiredFields(routerType);
        }
        return [];
    }
    hasFinished() {
        if (this.isLazy()) {
            return this.lazyUrlService.hasFinished();
        }
        // Track eager when comparing: lazy always reports ready and would gate traffic in early.
        return this.urlService.hasFinished();
    }
    // While comparing, register on both so lazy sees the same routers as eager.
    onRouterAddedType(...args) {
        if (this.isComparing()) {
            this._runLazyHook('onRouterAddedType', () => this.lazyUrlService.onRouterAddedType(...args));
            return this.urlService.onRouterAddedType(...args);
        }
        if (this.lazyUrlService) {
            return this.lazyUrlService.onRouterAddedType(...args);
        }
        return this.urlService.onRouterAddedType(...args);
    }
    onRouterUpdated(...args) {
        if (this.isComparing()) {
            this._runLazyHook('onRouterUpdated', () => this.lazyUrlService.onRouterUpdated(...args));
            return this.urlService.onRouterUpdated(...args);
        }
        if (this.lazyUrlService) {
            return this.lazyUrlService.onRouterUpdated(...args);
        }
        return this.urlService.onRouterUpdated(...args);
    }
    /**
     * Reset all router registrations. Used when routes.yaml is reloaded in
     * lazy mode. In eager mode the URL service handles resets via its queue.
     */
    reset() {
        if (this.lazyUrlService) {
            this._runLazyHook('reset', () => this.lazyUrlService.reset());
        }
    }
    // Runs a lazy router hook in compare mode. Lazy failures are swallowed and
    // reported so they can never block the authoritative eager hook (or, for
    // reset, break a routes reload).
    _runLazyHook(method, fn) {
        try {
            fn();
        }
        catch (err) {
            this._reportLazyError(method, err, {});
        }
    }
    // Runs lazy alongside eager and logs any divergence; eager's value is always
    // returned. Lazy errors are swallowed so a comparison can't break a request.
    _compare(method, eagerValue, getLazyValue, context, isEqual = (a, b) => a === b) {
        let lazyValue;
        try {
            lazyValue = getLazyValue();
        }
        catch (err) {
            this._reportLazyError(method, err, context);
            return;
        }
        this._reportMismatch(method, eagerValue, lazyValue, context, isEqual);
    }
    async _compareAsync(method, eagerValue, getLazyValue, context, isEqual = (a, b) => a === b) {
        let lazyValue;
        try {
            lazyValue = await getLazyValue();
        }
        catch (err) {
            this._reportLazyError(method, err, context);
            return;
        }
        this._reportMismatch(method, eagerValue, lazyValue, context, isEqual);
    }
    _isNotFound(value) {
        return typeof value === 'string' && value.endsWith('/404/');
    }
    // resolveUrl's contract is which resource a path maps to, not the exact
    // serialized record. Eager (raw-knex) and lazy (model.toJSON) shape the same
    // DB row differently — lazy carries a `parent` key eager omits, eager keeps
    // __GHOST_URL__ placeholders lazy expands, timestamps differ in precision —
    // so comparing whole records reports the same resolved resource as a
    // mismatch. Compare resolved identity instead.
    _resolvesToSameResource(a, b) {
        if (a === null || b === null) {
            return a === b;
        }
        const ra = a;
        const rb = b;
        return ra.id === rb.id && ra.type === rb.type;
    }
    // Divergences that are not lazy regressions, so logging them only buries
    // the ones that are. Each branch is a class confirmed from production
    // compare data.
    _isExpectedDivergence(method, eagerValue, lazyValue, context) {
        // Eager leaves tags/authors with no published posts out of its URL map
        // (the shouldHavePosts gate) so they resolve to /404/, while lazy has no
        // cheap way to run that check and returns the real URL. Eager cache
        // staleness (a tag gaining its first post after boot) looks the same.
        // Whether to keep lazy's behaviour is still open, but either way it is
        // not a lazy bug, so exclude it to surface the divergences that are.
        if (method === 'getUrlForResource'
            && (context.type === 'tags' || context.type === 'authors')
            && this._isNotFound(eagerValue) && !this._isNotFound(lazyValue)) {
            return true;
        }
        // A site's owner starts with the default `ghost-user` slug and is
        // renamed during setup. The rename emits no event the eager cache
        // consumes, so eager serves /author/ghost-user/ until the next boot
        // while lazy has the real slug from the database.
        if (method === 'getUrlForResource'
            && context.type === 'authors'
            && typeof eagerValue === 'string' && eagerValue.endsWith('/author/ghost-user/')
            && !this._isNotFound(lazyValue)) {
            return true;
        }
        // lazy returns /404/ where eager serves a real URL: eager cached a
        // resource that is no longer routable (unpublished or deleted since,
        // with no event to evict it). Suppress only when the resource is
        // provably not published — a published resource lazy refuses to route
        // is a real lazy bug, so that keeps logging.
        if (method === 'getUrlForResource'
            && this._isNotFound(lazyValue) && !this._isNotFound(eagerValue)
            && typeof context.status === 'string' && context.status !== 'published') {
            return true;
        }
        return false;
    }
    _reportMismatch(method, eagerValue, lazyValue, context, isEqual) {
        if (!isEqual(eagerValue, lazyValue)) {
            if (this._isExpectedDivergence(method, eagerValue, lazyValue, context)) {
                return;
            }
            const { caller, ...details } = context;
            const report = new errors.InternalServerError({
                message: 'URL service parity mismatch',
                code: 'LAZY_URL_PARITY_MISMATCH',
                errorDetails: { method, eager: eagerValue, lazy: lazyValue, ...details }
            });
            this._applyCallerStack(report, caller);
            this._report(report);
        }
    }
    _reportLazyError(method, err, context) {
        const { caller, ...details } = context;
        const report = new errors.InternalServerError({
            message: 'Lazy URL service threw during comparison',
            code: 'LAZY_URL_COMPARE_ERROR',
            err,
            errorDetails: { method, ...details }
        });
        // @tryghost/errors copies the wrapped error's enumerable props over the
        // new error, so a thrown error carrying its own errorDetails (e.g. the
        // thin-resource report) silently clobbers the compare context passed
        // above. Re-merge after construction so both survive in the logs.
        const innerDetails = err.errorDetails;
        report.errorDetails = { method, ...details, ...innerDetails };
        this._applyCallerStack(report, caller);
        this._report(report);
    }
    // The report's own stack is setImmediate scaffolding — the caller frames
    // captured at call time are the stack worth logging.
    _applyCallerStack(report, caller) {
        if (typeof caller !== 'string') {
            return;
        }
        const frames = caller.split('\n').slice(1).join('\n');
        report.stack = `${report.name}: ${report.message}\n${frames}`;
    }
    _report(error) {
        logging.error(error);
    }
}
exports.UrlServiceFacade = UrlServiceFacade;
// `export class` already emits `exports.UrlServiceFacade`. We additionally
// re-attach `module.exports = UrlServiceFacade` AND keep the named export, so
// both `const UrlServiceFacade = require('./url-service-facade')` and
// `const { UrlServiceFacade } = require('./url-service-facade')` work.
module.exports = UrlServiceFacade;
module.exports.UrlServiceFacade = UrlServiceFacade;
