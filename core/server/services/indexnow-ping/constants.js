"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seoFields = exports.defaultPostSlugs = exports.INDEXNOW_ENDPOINT = exports.INDEXNOW_LOG_KEY = exports.messages = void 0;
exports.messages = {
    requestFailedError: 'The {service} service was unable to send a ping request, your site will continue to function.',
    requestFailedHelp: 'If you get this error repeatedly, please seek help on {url}.'
};
exports.INDEXNOW_LOG_KEY = '[indexnow]';
// IndexNow endpoint - this routes to all participating search engines
exports.INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
exports.defaultPostSlugs = [
    'welcome',
    'the-editor',
    'using-tags',
    'managing-users',
    'private-sites',
    'advanced-markdown',
    'themes',
    'coming-soon'
];
// Fields that affect how the post appears in search engine results
exports.seoFields = [
    'html', // Post content
    'title', // Post title (appears in SERP)
    'slug', // URL path
    'meta_title', // Custom meta title
    'meta_description', // Meta description (appears in SERP)
    'canonical_url', // Canonical URL
    'status' // Published status change
];
