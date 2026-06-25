"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftLinkCodec = exports.GiftLinkRow = void 0;
exports.liveLinksForPost = liveLinksForPost;
exports.liveLinkForToken = liveLinkForToken;
const zod_1 = require("zod");
const case_keys_1 = require("./case-keys");
const database_1 = require("./database");
const models_1 = require("./models");
// The columns the read path selects and the codec decodes into a GiftLink.
exports.GiftLinkRow = database_1.DbGiftLink.pick({
    token: true,
    redeemed_count: true,
    last_redeemed_at: true,
    created_at: true
});
// Maps a selected row to/from the domain GiftLink (snake_case to camelCase, token branding).
exports.giftLinkCodec = zod_1.z.codec(exports.GiftLinkRow, models_1.GiftLink, {
    decode: row => (0, case_keys_1.camelKeys)(row),
    encode: link => (0, case_keys_1.snakeKeys)(link)
});
const giftLinkColumns = Object.keys(exports.GiftLinkRow.shape).map(column => `gift_links.${column}`);
function liveLinksForPost(postId) {
    return (knex) => knex('posts')
        .where('posts.id', postId)
        .leftJoin('post_gift_links', 'post_gift_links.post_id', 'posts.id')
        .leftJoin('gift_links', 'gift_links.token', 'post_gift_links.gift_link_token')
        .select(giftLinkColumns);
}
function liveLinkForToken(token) {
    return (knex) => knex('post_gift_links')
        .join('gift_links', 'gift_links.token', 'post_gift_links.gift_link_token')
        .where('gift_links.token', token)
        .first([...giftLinkColumns, 'post_gift_links.post_id as post_id']);
}
