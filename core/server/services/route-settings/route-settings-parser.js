"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRouteSettings = parseRouteSettings;
exports.serializeRouteSettings = serializeRouteSettings;
const js_yaml_1 = __importDefault(require("js-yaml"));
const zod_1 = require("zod");
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const validation_errors_1 = require("./validation-errors");
const messages = {
    badDataError: '"{key}" is a reserved key. Please wrap the data definition into a custom name.',
    badDataHelp: 'Example:\n data:\n  my-tag:\n    resource: tags\n    ...\n',
    authorDeprecatedError: '"author" is reserved. Please choose a different name. We recommend not using author.'
};
const VALID_SHORTFORM_RESOURCES = ['tag', 'page', 'post', 'author'];
const VALID_LONGFORM_RESOURCES = ['tags', 'posts', 'pages', 'authors'];
const RESERVED_DATA_KEYS = ['resource', 'type', 'limit', 'order', 'include', 'filter', 'status', 'visibility', 'slug', 'redirect'];
// YAML parses a bare `filter:` as null and authors commonly quote numeric scalars
// (`limit: "100"`); the legacy validator accepted both, so treat an explicitly empty
// value as unset and coerce digit-only limit strings to numbers.
const OptionalStringField = zod_1.z.string().nullish().transform(v => v ?? undefined);
const OptionalBooleanField = zod_1.z.boolean().nullish().transform(v => v ?? undefined);
const LimitField = zod_1.z.union([zod_1.z.number(), zod_1.z.literal('all'), zod_1.z.string().regex(/^\d+$/).transform(Number)])
    .nullish().transform(v => v ?? undefined);
const SHORTFORM_HELP = 'e.g. data: tag.recipes';
/**
 * Shorthand data definitions look like `tag.recipes` — resource, dot, slug.
 *
 * `%s` stands in for the slug: on channel routes and collections, fetch-data
 * substitutes it with the request's `slug` param at query time, which is how a
 * wildcard route such as `/author/:slug/` serves a different author per request.
 * There is no static slug that could replace it, so rejecting it would break
 * those routes.
 */
function validateDataShortForm(value, path) {
    if (!/^[a-zA-Z0-9_]+\.(?:%s|[a-zA-Z0-9_-]+)$/.test(value)) {
        throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(path), `"${value}" is not a valid data shorthand. Please use resource.slug, e.g. tag.recipes.`, SHORTFORM_HELP);
    }
    const resource = value.split('.')[0];
    if (!VALID_SHORTFORM_RESOURCES.includes(resource)) {
        throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(path), `resource "${resource}" is not supported. Please use ${(0, validation_errors_1.humanList)(VALID_SHORTFORM_RESOURCES)}.`, SHORTFORM_HELP);
    }
}
const DataReadEntrySchema = zod_1.z.object({
    type: zod_1.z.literal('read'),
    resource: zod_1.z.enum(VALID_LONGFORM_RESOURCES),
    slug: zod_1.z.string().min(1),
    redirect: zod_1.z.boolean().optional(),
    include: zod_1.z.string().optional(),
    visibility: zod_1.z.string().optional(),
    status: zod_1.z.string().optional()
});
const DataBrowseEntrySchema = zod_1.z.object({
    type: zod_1.z.literal('browse'),
    resource: zod_1.z.enum(VALID_LONGFORM_RESOURCES),
    filter: OptionalStringField,
    limit: LimitField,
    order: OptionalStringField,
    include: OptionalStringField,
    fields: OptionalStringField,
    visibility: OptionalStringField,
    status: OptionalStringField,
    page: zod_1.z.number().optional()
});
const DataLongFormEntrySchema = zod_1.z.discriminatedUnion('type', [DataReadEntrySchema, DataBrowseEntrySchema]);
const DATA_ENTRY_HELP = 'e.g.\n data:\n  my-tag:\n    resource: tags\n    type: read\n    slug: recipes\n';
function parseDataEntry(value, path) {
    if (typeof value === 'string') {
        validateDataShortForm(value, path);
        return value;
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const result = DataLongFormEntrySchema.safeParse(value);
        if (!result.success) {
            const issue = result.error.issues[0];
            const at = (0, validation_errors_1.formatLocation)(path);
            const record = value;
            // A failed `type` discriminator surfaces as a union issue on that
            // key — matched on the code rather than the wording, which zod
            // is free to change.
            if (issue.code === 'invalid_union' && issue.path[0] === 'type') {
                if (record.type === undefined) {
                    throw (0, validation_errors_1.validationError)(at, 'type is required. Please use read or browse.', DATA_ENTRY_HELP);
                }
                throw (0, validation_errors_1.validationError)(at, `type "${record.type}" is not supported. Please use read or browse.`, DATA_ENTRY_HELP);
            }
            if (issue.path.includes('resource')) {
                if (record.resource === undefined) {
                    throw (0, validation_errors_1.validationError)(at, `resource is required. Please use ${(0, validation_errors_1.humanList)(VALID_LONGFORM_RESOURCES)}.`, DATA_ENTRY_HELP);
                }
                throw (0, validation_errors_1.validationError)(at, `resource "${record.resource}" is not supported. Please use ${(0, validation_errors_1.humanList)(VALID_LONGFORM_RESOURCES)}.`, DATA_ENTRY_HELP);
            }
            if (issue.path.includes('slug') && !record.slug) {
                throw (0, validation_errors_1.validationError)(at, 'slug is required for read data entries.', DATA_ENTRY_HELP);
            }
            throw (0, validation_errors_1.toValidationError)(result.error, path, value);
        }
        // Fields set to an explicitly empty value parse to undefined — drop the
        // keys so "unset" means absent in the domain model and serialized output.
        const entry = result.data;
        for (const entryKey of Object.keys(entry)) {
            if (entry[entryKey] === undefined) {
                delete entry[entryKey];
            }
        }
        return result.data;
    }
    throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(path), `a data entry must be a shorthand like tag.recipes, or a map with type and resource, but ${(0, validation_errors_1.describeValue)(value)} was provided.`, DATA_ENTRY_HELP);
}
function parseRouteData(data, path) {
    if (typeof data === 'string') {
        validateDataShortForm(data, path);
        return data;
    }
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(path), `data must be a shorthand like tag.recipes, or a map of named data entries, but ${(0, validation_errors_1.describeValue)(data)} was provided.`, DATA_ENTRY_HELP);
    }
    const record = data;
    for (const key of Object.keys(record)) {
        if (RESERVED_DATA_KEYS.includes(key)) {
            throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)([...path, key]), (0, tpl_1.default)(messages.badDataError, { key }), messages.badDataHelp);
        }
        if (key === 'author') {
            throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)([...path, key]), messages.authorDeprecatedError);
        }
    }
    const parsed = {};
    for (const [key, value] of Object.entries(record)) {
        parsed[key] = parseDataEntry(value, [...path, key]);
    }
    return parsed;
}
const TemplateField = zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).nullish().default([])
    .transform(v => {
    if (!v || (Array.isArray(v) && v.length === 0)) {
        return [];
    }
    return Array.isArray(v) ? v : [v];
});
// The schemas are built per route/collection so that errors raised while
// parsing nested `data` can name the exact path they came from.
const routeObjectSchema = (path) => zod_1.z.object({
    controller: zod_1.z.literal('channel').optional(),
    template: TemplateField,
    data: zod_1.z.unknown().optional(),
    content_type: OptionalStringField,
    filter: OptionalStringField,
    order: OptionalStringField,
    limit: LimitField,
    rss: OptionalBooleanField
}).transform((val) => {
    const templates = val.template;
    const data = val.data !== undefined ? parseRouteData(val.data, [...path, 'data']) : undefined;
    if (val.controller === 'channel') {
        const route = {
            type: 'channel',
            templates
        };
        // Preserve rss only when the author set it explicitly — the domain model
        // mirrors user intent (unset vs true vs false), so the activation bridge
        // reproduces validate.js output byte-for-byte.
        if (val.rss !== undefined) {
            route.rss = val.rss;
        }
        if (val.filter !== undefined) {
            route.filter = val.filter;
        }
        if (val.order !== undefined) {
            route.order = val.order;
        }
        if (val.limit !== undefined) {
            route.limit = val.limit;
        }
        if (data !== undefined) {
            route.data = data;
        }
        return route;
    }
    const route = {
        type: 'template',
        templates
    };
    if (val.content_type !== undefined) {
        route.contentType = val.content_type;
    }
    if (data !== undefined) {
        route.data = data;
    }
    return route;
});
const collectionValueSchema = (path) => zod_1.z.object({
    permalink: zod_1.z.string().optional(),
    template: TemplateField,
    data: zod_1.z.unknown().optional(),
    filter: OptionalStringField,
    order: OptionalStringField,
    limit: LimitField,
    rss: OptionalBooleanField
}).transform((val) => {
    const data = val.data !== undefined ? parseRouteData(val.data, [...path, 'data']) : undefined;
    const collection = {
        permalink: val.permalink ?? '',
        templates: val.template
    };
    if (val.filter !== undefined) {
        collection.filter = val.filter;
    }
    if (val.order !== undefined) {
        collection.order = val.order;
    }
    if (val.limit !== undefined) {
        collection.limit = val.limit;
    }
    if (val.rss !== undefined) {
        collection.rss = val.rss;
    }
    if (data !== undefined) {
        collection.data = data;
    }
    return collection;
});
const RouteSettingsSchema = zod_1.z.object({
    routes: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).nullable().optional().default({}),
    collections: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).nullable().optional().default({}),
    taxonomies: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).nullable().optional().default({})
});
/**
 * Every path in routes.yaml — route paths, collection paths, permalinks and
 * taxonomy permalinks — follows the same rules, so they share one message set.
 *
 * `allowParamNotation` is set for route and collection keys, which are mounted on
 * Express verbatim: nothing rewrites `{param}` to `:param` for them the way it
 * does for permalinks and taxonomies. So `/author/:slug/` is a working wildcard
 * route on live sites and `/author/{slug}/` would be a dead literal path —
 * rejecting :param there would break the former, and the suggested rewrite would
 * silently produce the latter.
 */
function validatePath(value, path, example, { allowParamNotation = false } = {}) {
    const at = (0, validation_errors_1.formatLocation)(path);
    if (!value.startsWith('/')) {
        throw (0, validation_errors_1.validationError)(at, `"${value}" is missing a leading slash. Please use e.g. ${example}.`);
    }
    if (!value.endsWith('/')) {
        throw (0, validation_errors_1.validationError)(at, `"${value}" is missing a trailing slash. Please use e.g. ${example}.`);
    }
    if (!allowParamNotation && /\/:\w+/.test(value)) {
        // Suggest the same path in the notation Ghost expects, rather than a
        // generic example the author then has to translate.
        throw (0, validation_errors_1.validationError)(at, `"${value}" uses the :param notation. Please use "${value.replace(/\/:(\w+)/g, '/{$1}')}".`);
    }
}
function parseRouteSettings(raw, yamlSource) {
    const obj = raw ?? {};
    const parsed = RouteSettingsSchema.safeParse(obj);
    if (!parsed.success) {
        throw (0, validation_errors_1.toValidationError)(parsed.error, [], obj);
    }
    const { routes: rawRoutes, collections: rawCollections, taxonomies: rawTaxonomies } = parsed.data;
    const routes = [];
    if (rawRoutes) {
        for (const [path, value] of Object.entries(rawRoutes)) {
            const routeLocation = ['routes', path];
            validatePath(path, routeLocation, '/about/', { allowParamNotation: true });
            if (value === null || value === undefined) {
                throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(routeLocation), 'Please define a template, e.g. /about/: about.');
            }
            if (typeof value === 'string') {
                routes.push({ type: 'template', path, templates: [value] });
                continue;
            }
            const routeResult = routeObjectSchema(routeLocation).safeParse(value);
            if (!routeResult.success) {
                throw (0, validation_errors_1.toValidationError)(routeResult.error, routeLocation, value);
            }
            const route = routeResult.data;
            if (route.type === 'template' && (!route.templates || route.templates.length === 0) && !route.data && !route.contentType) {
                throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(routeLocation), 'Please define a template, e.g. /about/: about.');
            }
            routes.push({ ...route, path });
        }
    }
    const collections = [];
    if (rawCollections) {
        for (const [path, value] of Object.entries(rawCollections)) {
            const collectionLocation = ['collections', path];
            validatePath(path, collectionLocation, '/blog/', { allowParamNotation: true });
            const collectionResult = collectionValueSchema(collectionLocation).safeParse(value);
            if (!collectionResult.success) {
                throw (0, validation_errors_1.toValidationError)(collectionResult.error, collectionLocation, value);
            }
            const collection = collectionResult.data;
            if (!collection.permalink) {
                throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(collectionLocation), 'Please define a permalink route, e.g. permalink: /{slug}/.');
            }
            validatePath(collection.permalink, [...collectionLocation, 'permalink'], '/{slug}/');
            collections.push({ ...collection, path });
        }
    }
    const taxonomies = {};
    if (rawTaxonomies) {
        for (const [key, value] of Object.entries(rawTaxonomies)) {
            const taxonomyLocation = ['taxonomies', key];
            if (!['tag', 'author'].includes(key)) {
                throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(taxonomyLocation), 'Unknown taxonomy. Please use tag or author.');
            }
            if (!value) {
                throw (0, validation_errors_1.validationError)((0, validation_errors_1.formatLocation)(taxonomyLocation), `Please define a taxonomy permalink route, e.g. ${key}: /${key}/{slug}/.`);
            }
            validatePath(value, taxonomyLocation, `/${key}/{slug}/`);
            if (key === 'tag') {
                taxonomies.tag = value;
            }
            if (key === 'author') {
                taxonomies.author = value;
            }
        }
    }
    return { routes, collections, taxonomies, yamlSource };
}
function serializeRouteSettings(settings) {
    const obj = {};
    const routes = {};
    for (const route of settings.routes) {
        if (route.type === 'template' && route.templates?.length === 1 && !route.data && !route.contentType) {
            routes[route.path] = route.templates[0];
        }
        else {
            const entry = {};
            if (route.templates && route.templates.length > 0) {
                entry.template = route.templates.length === 1 ? route.templates[0] : route.templates;
            }
            if (route.data !== undefined) {
                entry.data = route.data;
            }
            if (route.type === 'channel') {
                const channel = route;
                entry.controller = 'channel';
                if (channel.filter !== undefined) {
                    entry.filter = channel.filter;
                }
                if (channel.order !== undefined) {
                    entry.order = channel.order;
                }
                if (channel.limit !== undefined) {
                    entry.limit = channel.limit;
                }
                if (channel.rss !== undefined) {
                    entry.rss = channel.rss;
                }
            }
            else {
                const tmpl = route;
                if (tmpl.contentType !== undefined) {
                    entry.content_type = tmpl.contentType;
                }
            }
            routes[route.path] = entry;
        }
    }
    obj.routes = Object.keys(routes).length > 0 ? routes : null;
    const collections = {};
    for (const coll of settings.collections) {
        const entry = { permalink: coll.permalink };
        if (coll.templates && coll.templates.length > 0) {
            entry.template = coll.templates.length === 1 ? coll.templates[0] : coll.templates;
        }
        if (coll.filter !== undefined) {
            entry.filter = coll.filter;
        }
        if (coll.order !== undefined) {
            entry.order = coll.order;
        }
        if (coll.limit !== undefined) {
            entry.limit = coll.limit;
        }
        if (coll.rss !== undefined) {
            entry.rss = coll.rss;
        }
        if (coll.data !== undefined) {
            entry.data = coll.data;
        }
        collections[coll.path] = entry;
    }
    obj.collections = Object.keys(collections).length > 0 ? collections : null;
    obj.taxonomies = Object.keys(settings.taxonomies).length > 0 ? settings.taxonomies : null;
    return js_yaml_1.default.dump(obj, { quotingType: '\'', forceQuotes: false });
}
