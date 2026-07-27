"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPublic = isPublic;
exports.isMdRequest = isMdRequest;
exports.serveMdRequest = serveMdRequest;
exports.isAcceptsRequest = isAcceptsRequest;
exports.serveAcceptsRequest = serveAcceptsRequest;
const canonical_url_1 = __importDefault(require("./canonical-url"));
const config = require('../../../../../shared/config');
const urlUtils = require('../../../../../shared/url-utils').default;
const { getAcceptedMarkdownContentType, getMarkdownPath, renderEntryMarkdown } = require('../../../llms/markdown');
const MEMBERS_ONLY_MARKDOWN = '# Members-only content\n\nThis post requires a subscription and is not available for public access.\n';
function llmsEnabled(req) {
    const llmsService = req.app.get('llmsService') || null;
    return Boolean(llmsService && llmsService.isEnabled());
}
/**
 * Only public entries ever render as markdown; gated entries stay html (or
 * 403 on an explicit `.md` URL).
 */
function isPublic(entry) {
    return entry.visibility === 'public';
}
function serveMarkdown(res, entry) {
    const llmsIndexUrl = urlUtils.urlFor({ relativeUrl: '/llms.txt' }, true);
    res.set('Cache-Control', `public, max-age=${config.get('caching:llms:maxAge')}`);
    res.set('Content-Location', getMarkdownPath(new URL(entry.url).pathname));
    res.type('text/markdown');
    return res.send(renderEntryMarkdown(entry, { llmsIndexUrl }));
}
/**
 * Whether this is a `.md` URL request (the scoped suffix route sets the flag).
 */
function isMdRequest(res) {
    return Boolean(res.routerOptions.isMarkdownRequest);
}
/**
 * Serve a `.md` URL as markdown for LLM consumption. When the feature is
 * disabled we redirect to the canonical (html) url; members-only content is
 * refused.
 */
function serveMdRequest(req, res, entry) {
    if (!llmsEnabled(req)) {
        return res.redirect(302, (0, canonical_url_1.default)(req, entry));
    }
    if (!isPublic(entry)) {
        return res.status(403).type('text/markdown').send(MEMBERS_ONLY_MARKDOWN);
    }
    return serveMarkdown(res, entry);
}
/**
 * Whether the request negotiates markdown via the Accept header (and the llms
 * feature is on) — request knowledge only, so it can be decided before the
 * entry lookup. Whether markdown is actually served still depends on the
 * entry: see `isPublic`.
 */
function isAcceptsRequest(req) {
    return Boolean(getAcceptedMarkdownContentType(req)) && llmsEnabled(req);
}
/**
 * Serve markdown negotiated via the Accept header.
 */
function serveAcceptsRequest(res, entry) {
    res.vary('Accept');
    return serveMarkdown(res, entry);
}
