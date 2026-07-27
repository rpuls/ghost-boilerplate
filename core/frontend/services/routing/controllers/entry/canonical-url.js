"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildCanonicalUrl;
const node_url_1 = require("node:url");
/**
 * Build the entry's canonical URL (its own pathname) carrying over the current
 * request's query string. Shared by the permalink and markdown-url redirects.
 */
function buildCanonicalUrl(req, entry) {
    return (0, node_url_1.format)({
        pathname: (0, node_url_1.parse)(entry.url).pathname,
        search: (0, node_url_1.parse)(req.originalUrl).search
    });
}
;
