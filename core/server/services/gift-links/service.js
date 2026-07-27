"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftLinksService = void 0;
const zod_1 = require("zod");
const errors_1 = __importDefault(require("@tryghost/errors"));
const codec_1 = require("./codec");
const models_1 = require("./models");
class GiftLinksService {
    knex;
    recordAction;
    constructor({ knex, recordAction }) {
        this.knex = knex;
        this.recordAction = recordAction;
    }
    async getPost(postId) {
        // Anchored on posts: zero rows means the post itself doesn't exist, not merely that it has
        // no live link.
        const rows = await this.knex('posts')
            .where('posts.id', postId)
            .leftJoin('post_gift_links', 'post_gift_links.post_id', 'posts.id')
            .leftJoin('gift_links', 'gift_links.token', 'post_gift_links.gift_link_token')
            .select(codec_1.giftLinkColumns);
        if (rows.length === 0) {
            throw new errors_1.default.NotFoundError({ message: `Post ${postId} does not exist.` });
        }
        const giftLinks = rows
            .filter((row) => row.token !== null)
            .map(row => zod_1.z.decode(codec_1.giftLinkCodec, row));
        return { id: postId, giftLinks };
    }
    async getPostByToken(token) {
        const row = await this.knex('post_gift_links')
            .join('gift_links', 'gift_links.token', 'post_gift_links.gift_link_token')
            .where('gift_links.token', token)
            .first([...codec_1.giftLinkColumns, 'post_gift_links.post_id as post_id']);
        return row ? { id: row.post_id, giftLinks: [zod_1.z.decode(codec_1.giftLinkCodec, row)] } : null;
    }
    async ensure(context, postId) {
        const post = await this.getPost(postId);
        if (post.giftLinks.length) {
            return post;
        }
        const minted = await this.mint(postId);
        await this.recordAction({ context, verb: 'add', subject: postId });
        return minted;
    }
    async create(context, postId) {
        await this.getPost(postId); // asserts the post exists (throws NotFound)
        const minted = await this.mint(postId);
        await this.recordAction({ context, verb: 'reset', subject: postId });
        return minted;
    }
    // gift_links rows are kept as history; only the live association is removed.
    async removeAll(context) {
        const removed = await this.knex('post_gift_links').del();
        if (removed > 0) {
            await this.recordAction({ context, verb: 'remove', subject: null });
        }
        return removed;
    }
    async mint(postId) {
        const link = { token: (0, models_1.generateGiftLinkToken)(), createdAt: new Date() };
        await this.knex.transaction(async (trx) => {
            await this.addToHistory(trx, postId, link);
            await this.setLiveLink(trx, postId, link);
        });
        return { id: postId, giftLinks: [link] };
    }
    addToHistory(trx, postId, link) {
        return trx('gift_links').insert({ ...zod_1.z.encode(codec_1.giftLinkCodec, link), post_id: postId });
    }
    setLiveLink(trx, postId, link) {
        return trx('post_gift_links')
            .insert({ post_id: postId, gift_link_token: link.token, created_at: link.createdAt })
            .onConflict('post_id')
            .merge({ gift_link_token: link.token, updated_at: link.createdAt });
    }
}
exports.GiftLinksService = GiftLinksService;
