"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeEmailHtml = sanitizeEmailHtml;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
// Even though the upstream feed is operated by Ghost org, the resulting HTML
// is rendered into admin inboxes on the receiving install. A compromised or
// malformed feed entry must not be able to ship scripts, event handlers, or
// non-http(s) URLs to recipients via this path.
const ALLOWED_TAGS = [
    'p', 'br', 'hr',
    'strong', 'b', 'em', 'i', 'u', 'code',
    'a',
    'ul', 'ol', 'li',
    'blockquote',
    'h1', 'h2', 'h3', 'h4'
];
const ALLOWED_SCHEMES = ['http', 'https', 'mailto'];
const SANITIZE_OPTIONS = {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
        a: ['href', 'title', 'target', 'rel']
    },
    allowedSchemes: ALLOWED_SCHEMES,
    allowProtocolRelative: false,
    transformTags: {
        a: sanitize_html_1.default.simpleTransform('a', {
            target: '_blank',
            rel: 'noopener noreferrer'
        })
    }
};
function sanitizeEmailHtml(html) {
    return (0, sanitize_html_1.default)(html, SANITIZE_OPTIONS);
}
