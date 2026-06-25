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
exports.GiftLinksService = void 0;
exports.generateGiftLinkToken = generateGiftLinkToken;
const crypto_1 = __importDefault(require("crypto"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const zod_1 = require("zod");
const models_1 = require("./models");
const queries = __importStar(require("./queries"));
function generateGiftLinkToken() {
    return models_1.GiftLinkToken.parse(crypto_1.default.randomBytes(24).toString('base64url'));
}
class GiftLinksService {
    knex;
    constructor({ knex }) {
        this.knex = knex;
    }
    async getPost(postId) {
        return this.requirePost(postId);
    }
    async getPostByToken(token) {
        const row = await queries.liveLinkForToken(token)(this.knex);
        return row ? { id: row.post_id, giftLinks: [zod_1.z.decode(queries.giftLinkCodec, row)] } : null;
    }
    async issue(postId) {
        const post = await this.requirePost(postId);
        return post.giftLinks.length ? post : this.mint(postId);
    }
    async reissue(postId) {
        const post = await this.requirePost(postId);
        return this.mint(postId, post.giftLinks[0]?.token);
    }
    // Stamp revoked_at on the live links, then drop their associations. The link records stay
    // as history; liveness is the association, so revoked_at only marks deliberate revocation.
    async revokeAll() {
        const now = new Date();
        let revoked = 0;
        await this.knex.transaction(async (trx) => {
            await trx('gift_links')
                .whereIn('token', trx('post_gift_links').select('gift_link_token'))
                .update({ revoked_at: now, updated_at: now });
            revoked = await trx('post_gift_links').del();
        });
        return revoked;
    }
    // Keyed by token, not liveness: a read against a since-reissued token still counts for it.
    async recordRedemption(token) {
        const now = new Date();
        return this.knex('gift_links')
            .where({ token })
            .update({ last_redeemed_at: now, updated_at: now })
            .increment('redeemed_count', 1);
    }
    // A missing post is a 404, not a post with no live links: no rows means no post, and the
    // remaining rows carrying a token are the live links.
    async requirePost(postId) {
        const rows = await queries.liveLinksForPost(postId)(this.knex);
        if (rows.length === 0) {
            throw new errors_1.default.NotFoundError({ message: `Post ${postId} does not exist.` });
        }
        const giftLinks = rows
            .filter((row) => row.token !== null)
            .map(row => zod_1.z.decode(queries.giftLinkCodec, row));
        return { id: postId, giftLinks };
    }
    // Issue and reissue are one upsert: a new store row, with the live association repointed to
    // it. On reissue the replaced link is stamped revoked_at as history. Concurrent issues are
    // last-writer-wins, not an error.
    async mint(postId, replacing) {
        const now = new Date();
        const link = { token: generateGiftLinkToken(), redeemedCount: 0, lastRedeemedAt: null, createdAt: now };
        await this.knex.transaction(async (trx) => {
            if (replacing) {
                await trx('gift_links').where({ token: replacing }).update({ revoked_at: now, updated_at: now });
            }
            await trx('gift_links').insert({ ...zod_1.z.encode(queries.giftLinkCodec, link), post_id: postId });
            await trx('post_gift_links')
                .insert({ post_id: postId, gift_link_token: link.token, created_at: now })
                .onConflict('post_id')
                .merge({ gift_link_token: link.token, updated_at: now });
        });
        return { id: postId, giftLinks: [link] };
    }
}
exports.GiftLinksService = GiftLinksService;
