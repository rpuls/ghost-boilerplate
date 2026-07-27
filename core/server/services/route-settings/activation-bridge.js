"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandRouteSettings = expandRouteSettings;
const lodash_1 = __importDefault(require("lodash"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const config_1 = require("../../../frontend/services/routing/config");
function expandShortFormData(shortForm, resourceKey) {
    const [key, slug] = shortForm.split('.');
    const queryConfig = config_1.QUERY[key];
    const data = {
        query: {},
        router: {}
    };
    const effectiveKey = resourceKey || key;
    data.query[effectiveKey] = lodash_1.default.cloneDeep(queryConfig);
    data.query[effectiveKey].options.slug = slug;
    const routerKey = queryConfig.resource;
    data.router[routerKey] = [{ slug, redirect: true }];
    return data;
}
function expandLongFormEntry(key, entry) {
    const defaultResource = Object.values(config_1.QUERY).find(item => item.resource === entry.resource);
    if (!defaultResource) {
        throw new errors_1.default.IncorrectUsageError({ message: `Unknown route data resource: ${entry.resource}` });
    }
    const data = {
        query: {},
        router: {}
    };
    data.query[key] = {
        type: entry.type,
        resource: defaultResource.resource
    };
    data.query[key] = lodash_1.default.defaults(data.query[key], lodash_1.default.omit(defaultResource, 'options'));
    const allowedQueryOptions = ['limit', 'order', 'filter', 'include', 'slug', 'visibility', 'status', 'page'];
    data.query[key].options = lodash_1.default.pick(entry, allowedQueryOptions);
    if (entry.type === 'read') {
        const defaultOptions = 'options' in defaultResource ? defaultResource.options : undefined;
        data.query[key].options = lodash_1.default.defaults(data.query[key].options, defaultOptions);
    }
    const routerKey = defaultResource.resource;
    if (!data.router[routerKey]) {
        data.router[routerKey] = [];
    }
    if (entry.type === 'read') {
        const allowedRouterOptions = ['redirect', 'slug'];
        let routerEntry = lodash_1.default.pick(entry, allowedRouterOptions);
        routerEntry = lodash_1.default.defaults(routerEntry, { redirect: true });
        data.router[routerKey].push(routerEntry);
    }
    else {
        data.router[routerKey].push({ redirect: true });
    }
    return data;
}
function expandRouteData(routeData) {
    if (!routeData) {
        return { query: {}, router: {} };
    }
    if (typeof routeData === 'string') {
        return expandShortFormData(routeData);
    }
    const merged = { query: {}, router: {} };
    for (const [key, entry] of Object.entries(routeData)) {
        let expanded;
        if (typeof entry === 'string') {
            expanded = expandShortFormData(entry, key);
        }
        else {
            expanded = expandLongFormEntry(key, entry);
        }
        lodash_1.default.merge(merged.query, expanded.query);
        for (const [routerKey, routerEntries] of Object.entries(expanded.router)) {
            if (merged.router[routerKey]) {
                merged.router[routerKey] = merged.router[routerKey].concat(routerEntries);
            }
            else {
                merged.router[routerKey] = routerEntries;
            }
        }
    }
    return merged;
}
function convertSlugsToColons(value) {
    return value.replace(/{(\w+)}/g, ':$1');
}
function expandRoute(route) {
    const expanded = {};
    expanded.templates = route.templates || [];
    if (route.data !== undefined) {
        expanded.data = expandRouteData(route.data);
    }
    if (route.type === 'channel') {
        const channel = route;
        expanded.controller = 'channel';
        if (channel.filter !== undefined) {
            expanded.filter = channel.filter;
        }
        if (channel.order !== undefined) {
            expanded.order = channel.order;
        }
        if (channel.limit !== undefined) {
            expanded.limit = channel.limit;
        }
        if (channel.rss !== undefined) {
            expanded.rss = channel.rss;
        }
    }
    else {
        const template = route;
        if (template.contentType !== undefined) {
            expanded.content_type = template.contentType;
        }
    }
    return expanded;
}
function expandCollection(collection) {
    const expanded = {};
    expanded.permalink = convertSlugsToColons(collection.permalink);
    expanded.templates = collection.templates || [];
    if (collection.data !== undefined) {
        expanded.data = expandRouteData(collection.data);
    }
    if (collection.filter !== undefined) {
        expanded.filter = collection.filter;
    }
    if (collection.order !== undefined) {
        expanded.order = collection.order;
    }
    if (collection.limit !== undefined) {
        expanded.limit = collection.limit;
    }
    if (collection.rss !== undefined) {
        expanded.rss = collection.rss;
    }
    return expanded;
}
/**
 * Converts a RouteSettings domain model into the legacy expanded format
 * that routerManager.start() expects.
 *
 * This is a temporary adapter — it gets removed once RouterManager is
 * refactored to consume the domain model directly (HKG-1895/HKG-1898).
 */
function expandRouteSettings(settings) {
    const routes = {};
    for (const route of settings.routes) {
        routes[route.path] = expandRoute(route);
    }
    const collections = {};
    for (const collection of settings.collections) {
        collections[collection.path] = expandCollection(collection);
    }
    const taxonomies = {};
    for (const [key, value] of Object.entries(settings.taxonomies)) {
        if (value) {
            taxonomies[key] = convertSlugsToColons(value);
        }
    }
    return { routes, collections, taxonomies };
}
