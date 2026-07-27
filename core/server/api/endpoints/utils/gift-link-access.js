"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGiftKeyData = generateGiftKeyData;
exports.applyGiftAccess = applyGiftAccess;
/**
 * Gift-link access for the public posts/pages read endpoints. The raw token
 * arrives as internal read context from the frontend entry lookup — it has no
 * HTTP surface, so a `?gift` param on the Content API is ignored.
 */
const errors_1 = __importDefault(require("@tryghost/errors"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const gift_links_1 = require("../../../services/gift-links");
const members_1 = __importDefault(require("../../../services/members"));
const messages = {
    invalidGiftToken: 'Invalid gift link token.',
    missingGiftKeyData: 'applyGiftAccess requires generateGiftKeyData in the endpoint\'s generateCacheKeyData, so a response cache can never serve unlocked content under an anonymous key.'
};
function giftTokenFromFrame(frame) {
    const token = frame.original.context?.giftToken;
    return typeof token === 'string' && token !== '' ? token : null;
}
/**
 * Resolve the token to its post id and stash it for `applyGiftAccess`. Runs in
 * `generateCacheKeyData`, BEFORE the response cache is consulted, so
 * revocations take effect immediately. `present: true` keeps an unresolvable
 * token's key distinct from a plain read's — sharing that key would serve a
 * cached gated 200 where a miss 403s.
 */
async function generateGiftKeyData(frame) {
    const token = giftTokenFromFrame(frame);
    if (!token) {
        return undefined;
    }
    const post = await gift_links_1.service.getPostByToken(token);
    const postId = post ? post.id : null;
    frame.giftLinkPostId = postId;
    return { present: true, postId };
}
/**
 * Verify the token against the entry being read and unlock its gated content
 * via the paid-member shim (the grant `/p/` previews use). The shim is set on
 * the frame's gating context only, so it never surfaces as `@member`. Call
 * after the model fetch: a missing entry stays a 404 regardless of the token;
 * a token that doesn't verify is a 403 with `INVALID_GIFT_TOKEN`.
 *
 * Uses the resolution `generateGiftKeyData` stashed — and refuses to run
 * without it. Resolving here as a fallback would let an endpoint wire up
 * verification without the cache-key half, which no test environment can
 * catch (the response cache is disabled there) but which poisons the
 * anonymous cache key with unlocked content in production.
 */
async function applyGiftAccess(frame, model) {
    const token = giftTokenFromFrame(frame);
    if (!token) {
        return;
    }
    if (frame.giftLinkPostId === undefined) {
        throw new errors_1.default.IncorrectUsageError({
            message: (0, tpl_1.default)(messages.missingGiftKeyData)
        });
    }
    if (frame.giftLinkPostId !== model.id) {
        throw new errors_1.default.NoPermissionError({
            message: (0, tpl_1.default)(messages.invalidGiftToken),
            code: 'INVALID_GIFT_TOKEN'
        });
    }
    frame.original.context ??= {};
    frame.original.context.member = await members_1.default.createPaidMemberShim();
}
