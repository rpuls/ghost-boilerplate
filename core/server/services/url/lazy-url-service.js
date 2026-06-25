"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyUrlService = void 0;
/* eslint-disable @typescript-eslint/no-require-imports */
const debug = require('@tryghost/debug')('services:url:lazy');
const errors = require('@tryghost/errors');
const localUtils = require('../../../shared/url-utils');
const { matchPermalink, toLookupParams } = require('./permalink-matcher');
const { buildFilter, filterMatches, routerTypeOf } = require('./router-filter');
const ROUTER_TYPE_TO_DB_TYPE = { posts: 'post', pages: 'page' };
/**
 * On-demand replacement for the eager UrlService: computes URLs and ownership
 * per call from the registered router configs instead of precomputing a full
 * map at boot. Forward lookups are pure; resolveUrl is the only DB-touching
 * path, and only through the injected findResource hook.
 */
class LazyUrlService {
    urlUtils;
    findResource;
    // Router configs in registration order, which is also their priority.
    routerConfigs;
    requiredRelations;
    constructor({ urlUtils = localUtils, findResource }) {
        if (typeof findResource !== 'function') {
            throw new errors.IncorrectUsageError({
                message: 'LazyUrlService requires a findResource function'
            });
        }
        this.urlUtils = urlUtils;
        this.findResource = findResource;
        this.routerConfigs = [];
        this.requiredRelations = null;
    }
    onRouterAddedType(identifier, filter, resourceType, permalink) {
        debug('onRouterAddedType', identifier, resourceType, permalink, filter);
        this.routerConfigs.push({
            identifier,
            filter,
            resourceType,
            permalink,
            compiledFilter: buildFilter(filter)
        });
        this.requiredRelations = null;
    }
    onRouterUpdated() {
        // Defensive: a router update could change a filter the cache derived
        // from, so drop it and recompute lazily on next read.
        this.requiredRelations = null;
    }
    reset() {
        this.routerConfigs = [];
        this.requiredRelations = null;
    }
    getRequiredRelations() {
        if (this.requiredRelations !== null) {
            return [...this.requiredRelations];
        }
        const required = new Set();
        for (const config of this.routerConfigs) {
            if (config.filter) {
                if (/\btags?\b/.test(config.filter) || /\bprimary_tag\b/.test(config.filter)) {
                    required.add('tags');
                }
                if (/\bauthors?\b/.test(config.filter) || /\bprimary_author\b/.test(config.filter)) {
                    required.add('authors');
                }
            }
            if (config.permalink) {
                if (/\bprimary_tag\b/.test(config.permalink)) {
                    required.add('tags');
                }
                if (/\bprimary_author\b/.test(config.permalink)) {
                    required.add('authors');
                }
            }
        }
        this.requiredRelations = [...required];
        return [...this.requiredRelations];
    }
    hasFinished() {
        return true;
    }
    getUrlForResource(resource, options = {}) {
        const routerType = routerTypeOf(resource);
        if (!routerType) {
            return this._formatNotFound(options);
        }
        const record = this._recordForFilter(resource);
        for (const config of this.routerConfigs) {
            if (config.resourceType !== routerType) {
                continue;
            }
            this._assertNotThin(config, resource, routerType);
            if (filterMatches(config.compiledFilter, record)) {
                const path = this.urlUtils.replacePermalink(config.permalink, resource);
                return this._formatPath(path, options);
            }
        }
        return this._formatNotFound(options);
    }
    ownsResource(routerIdentifier, resource) {
        if (!resource) {
            return false;
        }
        const routerType = routerTypeOf(resource);
        if (!routerType) {
            return false;
        }
        // Ownership is exclusive: only the first matching router of the type
        // owns the resource, matching eager's reservation.
        const record = this._recordForFilter(resource);
        const owner = this.routerConfigs.find(c => c.resourceType === routerType && filterMatches(c.compiledFilter, record));
        return !!owner && owner.identifier === routerIdentifier;
    }
    async resolveUrl(urlPath) {
        // Memoize per call so routers sharing a resourceType+permalink shape (or
        // fallthrough across filters) don't repeat the same DB lookup.
        const lookupCache = new Map();
        for (const config of this.routerConfigs) {
            const params = matchPermalink(config.permalink, urlPath);
            if (!params) {
                continue;
            }
            // matchPermalink only matches permalinks that capture a queryable
            // column, so this always yields a usable lookup.
            const lookupParams = toLookupParams(params);
            const cacheKey = `${config.resourceType}:${JSON.stringify(lookupParams)}`;
            let resource;
            if (lookupCache.has(cacheKey)) {
                resource = lookupCache.get(cacheKey) ?? null;
            }
            else {
                resource = await this.findResource(config.resourceType, lookupParams);
                lookupCache.set(cacheKey, resource);
            }
            if (!resource) {
                continue;
            }
            // Normalize the same way the forward paths do so page: filters are
            // evaluated against an identical shape regardless of findResource.
            const record = this._recordForFilter(resource);
            if (!filterMatches(config.compiledFilter, record)) {
                continue;
            }
            if (!this._matchesCanonicalUrl(config, params, resource)) {
                continue;
            }
            return Object.assign({}, resource, { type: config.resourceType });
        }
        return null;
    }
    // Eager only resolves a URL that equals a resource's generated (canonical)
    // URL, so we regenerate the record's URL for this permalink and confirm the
    // captured params match it. Without this, derived/relation segments the
    // query can't filter on (year/month, primary_tag) would resolve any slug,
    // 200-ing a URL the eager service 404s.
    _matchesCanonicalUrl(config, params, resource) {
        const canonicalPath = this.urlUtils.replacePermalink(config.permalink, resource);
        const canonicalParams = matchPermalink(config.permalink, canonicalPath);
        if (!canonicalParams) {
            return false;
        }
        const captured = params;
        const canonical = canonicalParams;
        return Object.keys(captured).every(key => canonical[key] === captured[key]);
    }
    // Normalizes the plural router type to the singular DB value for filter
    // evaluation only, so page: filters match as in the eager generator.
    _recordForFilter(resource) {
        const record = resource;
        const dbType = ROUTER_TYPE_TO_DB_TYPE[record.type];
        return dbType ? { ...record, type: dbType } : record;
    }
    _formatPath(path, options) {
        if (options.absolute) {
            return this.urlUtils.createUrl(path, options.absolute);
        }
        if (options.withSubdirectory) {
            return this.urlUtils.createUrl(path, false, true);
        }
        return path;
    }
    // Mirrors the eager miss path: the /404/ fallback carries no subdirectory.
    _formatNotFound(options) {
        if (options.absolute) {
            return this.urlUtils.createUrl('/404/', options.absolute);
        }
        if (options.withSubdirectory) {
            return this.urlUtils.createUrl('/404/', false);
        }
        return '/404/';
    }
    // A filtered router that references a relation the resource doesn't carry
    // can't be evaluated: lazy would 404 here while eager (full data in memory)
    // returns a URL. Callers must hand the service fully-inflated resources, so
    // a thin one is a programmer error we refuse loudly rather than mask as a
    // silent /404/.
    _assertNotThin(config, resource, routerType) {
        if (!config.filter) {
            return;
        }
        const r = resource;
        const missing = [];
        if (/\btags?\b/.test(config.filter) && !Array.isArray(r.tags)) {
            missing.push('tags');
        }
        if (/\bauthors?\b/.test(config.filter) && !Array.isArray(r.authors)) {
            missing.push('authors');
        }
        if (/\bprimary_tag\b/.test(config.filter) && r.primary_tag === undefined) {
            missing.push('primary_tag');
        }
        if (/\bprimary_author\b/.test(config.filter) && r.primary_author === undefined) {
            missing.push('primary_author');
        }
        if (missing.length === 0) {
            return;
        }
        throw new errors.InternalServerError({
            message: 'Thin resource passed to LazyUrlService.getUrlForResource',
            code: 'LAZY_URL_THIN_RESOURCE',
            errorDetails: {
                resourceType: routerType,
                resourceId: resource.id,
                routerIdentifier: config.identifier,
                filter: config.filter,
                missing
            }
        });
    }
}
exports.LazyUrlService = LazyUrlService;
module.exports = LazyUrlService;
module.exports.LazyUrlService = LazyUrlService;
