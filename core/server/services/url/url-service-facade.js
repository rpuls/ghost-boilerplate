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
/* eslint-disable @typescript-eslint/no-require-imports */
const _ = require('lodash');
const logging = require('@tryghost/logging');
const errors = require('@tryghost/errors');
class UrlServiceFacade {
    urlService;
    lazyUrlService;
    compare;
    constructor({ urlService, lazyUrlService = null, compare = false }) {
        this.urlService = urlService;
        this.lazyUrlService = lazyUrlService;
        this.compare = compare;
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
        if (this.isComparing()) {
            setImmediate(() => this._compare('getUrlForResource', url, () => this.lazyUrlService.getUrlForResource(resource, options), { type: resource.type, id: resource.id }));
        }
        return url;
    }
    ownsResource(routerIdentifier, resource) {
        if (this.isLazy()) {
            return this.lazyUrlService.ownsResource(routerIdentifier, resource);
        }
        const owns = this.urlService.owns(routerIdentifier, resource.id);
        if (this.isComparing()) {
            setImmediate(() => this._compare('ownsResource', owns, () => this.lazyUrlService.ownsResource(routerIdentifier, resource), { type: resource.type, id: resource.id, routerIdentifier }));
        }
        return owns;
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
            void this._compareAsync('resolveUrl', eagerResult, () => this.lazyUrlService.resolveUrl(urlPath), { path: urlPath }, (a, b) => _.isEqual(a, b));
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
    _reportMismatch(method, eagerValue, lazyValue, context, isEqual) {
        if (!isEqual(eagerValue, lazyValue)) {
            this._report(new errors.InternalServerError({
                message: 'URL service parity mismatch',
                code: 'LAZY_URL_PARITY_MISMATCH',
                errorDetails: { method, eager: eagerValue, lazy: lazyValue, ...context }
            }));
        }
    }
    _reportLazyError(method, err, context) {
        this._report(new errors.InternalServerError({
            message: 'Lazy URL service threw during comparison',
            code: 'LAZY_URL_COMPARE_ERROR',
            err,
            errorDetails: { method, ...context }
        }));
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
