"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryController = entryController;
const markdown = __importStar(require("./entry/markdown"));
const giftLinks = __importStar(require("./entry/gift-links"));
const canonical_url_1 = __importDefault(require("./entry/canonical-url"));
const debug = require('@tryghost/debug')('services:routing:controllers:entry');
const config = require('../../../../shared/config');
const urlUtils = require('../../../../shared/url-utils').default;
const dataService = require('../../data');
const renderer = require('../../rendering');
/**
 * The request's last url param is `/edit`: redirect to the admin editor, or fall
 * through to a 404 when admin redirects are disabled.
 */
function editRedirect(res, next, entry) {
    if (!config.get('admin:redirects')) {
        debug('is edit url but admin redirects are disabled');
        return next();
    }
    debug('redirect. is edit url');
    const resourceType = res.routerOptions.context?.includes('page') ? 'page' : 'post';
    return urlUtils.redirectToAdmin(302, res, `/#/editor/${resourceType}/${entry.id}`);
}
/**
 * The requested path no longer matches the entry's canonical url — happens with
 * date permalinks after a publish date change.
 */
function isPermalinkStale(req, entry) {
    return urlUtils.absoluteToRelative(entry.url, { withoutSubdirectory: true }) !== req.path;
}
async function entryController(req, res, next) {
    debug('entryController', res.routerOptions);
    try {
        // A gift view is html-only. Redirecting before the lookup keeps the
        // token off the read, so markdown paths can never see an unlocked entry.
        if (giftLinks.isGiftRequest(req) && (markdown.isMdRequest(res) || markdown.isAcceptsRequest(req))) {
            return giftLinks.stripGiftAndRedirect(req, res);
        }
        // The raw gift token rides the lookup as read context; the API read
        // verifies it against the entry and unlocks, or rejects the lookup.
        const giftToken = giftLinks.isGiftRequest(req) ? giftLinks.giftToken(req) : null;
        let lookup;
        try {
            lookup = await dataService.entryLookup(req.path, res.routerOptions, res.locals, { giftToken });
        }
        catch (err) {
            if (giftLinks.isInvalidGiftTokenError(err)) {
                return giftLinks.stripGiftAndRedirect(req, res);
            }
            throw err;
        }
        const entry = lookup ? lookup.entry : false;
        if (!entry || lookup.isUnknownOption) {
            debug('no entry or unknown option');
            return next();
        }
        if (lookup.isEditURL) {
            return editRedirect(res, next, entry);
        }
        // MUST run before the permalink redirect below: a `.md` path can never
        // equal the entry's canonical (html) path, so the redirect would always
        // fire and 301 the request to html, losing the markdown intent.
        if (markdown.isMdRequest(res)) {
            return markdown.serveMdRequest(req, res, entry);
        }
        if (isPermalinkStale(req, entry)) {
            debug('redirect');
            return urlUtils.redirect301(res, (0, canonical_url_1.default)(req, entry));
        }
        // MUST run after the permalink redirect above: negotiation rides on the
        // canonical URL, so a stale dated-permalink URL is 301'd to canonical
        // first, then markdown is served.
        if (markdown.isAcceptsRequest(req) && markdown.isPublic(entry)) {
            return markdown.serveAcceptsRequest(res, entry);
        }
        if (giftLinks.isGiftRequest(req)) {
            if (!giftToken) {
                return giftLinks.stripGiftAndRedirect(req, res);
            }
            // Reaching here means the lookup verified the token: the entry is
            // the unlocked variant.
            giftLinks.prepareGiftRender(res, giftToken);
        }
        return renderer.renderEntry(req, res)(entry);
    }
    catch (err) {
        return renderer.handleError(next)(err);
    }
}
;
