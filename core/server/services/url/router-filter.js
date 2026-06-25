"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXPANSIONS = void 0;
exports.routerTypeOf = routerTypeOf;
exports.buildFilter = buildFilter;
exports.filterMatches = filterMatches;
/* eslint-disable @typescript-eslint/no-require-imports */
const nql = require('@tryghost/nql');
const logging = require('@tryghost/logging');
/* eslint-enable @typescript-eslint/no-require-imports */
// A deliberate copy of the eager UrlGenerator's NQL semantics: while both
// services run side by side, eager is the parity oracle and must stay separate.
exports.EXPANSIONS = [
    { key: 'author', replacement: 'authors.slug' },
    { key: 'tags', replacement: 'tags.slug' },
    { key: 'tag', replacement: 'tags.slug' },
    { key: 'authors', replacement: 'authors.slug' },
    { key: 'primary_tag', replacement: 'primary_tag.slug' },
    { key: 'primary_author', replacement: 'primary_author.slug' }
];
const PAGE_TRANSFORMER = nql.utils.mapKeyValues({
    key: { from: 'page', to: 'type' },
    values: [
        { from: false, to: 'post' },
        { from: true, to: 'page' }
    ]
});
// Accepts both singular DB types ('post') and plural router keys ('posts').
const TYPE_TO_ROUTER_TYPE = {
    post: 'posts',
    posts: 'posts',
    page: 'pages',
    pages: 'pages',
    tag: 'tags',
    tags: 'tags',
    author: 'authors',
    authors: 'authors'
};
function routerTypeOf(resource) {
    if (!resource || !resource.type) {
        return null;
    }
    return TYPE_TO_ROUTER_TYPE[resource.type] || null;
}
function buildFilter(filter) {
    if (!filter) {
        return null;
    }
    return nql(filter, { expansions: exports.EXPANSIONS, transformer: PAGE_TRANSFORMER });
}
// A null filter always matches; a filter that throws is a non-match, not an
// error, mirroring the eager generator's try/catch.
function filterMatches(compiledFilter, record) {
    if (!compiledFilter) {
        return true;
    }
    try {
        return !!compiledFilter.queryJSON(record);
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        logging.warn('NQL match failed', message);
        return false;
    }
}
module.exports = { EXPANSIONS: exports.EXPANSIONS, routerTypeOf, buildFilter, filterMatches };
module.exports.EXPANSIONS = exports.EXPANSIONS;
module.exports.routerTypeOf = routerTypeOf;
module.exports.buildFilter = buildFilter;
module.exports.filterMatches = filterMatches;
