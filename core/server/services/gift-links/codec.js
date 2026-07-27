"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftLinkColumns = exports.giftLinkCodec = exports.GiftLinkRow = void 0;
const zod_1 = require("zod");
const case_keys_1 = require("../../lib/case-keys");
const schema_1 = require("./schema");
const models_1 = require("./models");
exports.GiftLinkRow = schema_1.DbGiftLink.pick({
    token: true,
    created_at: true
});
exports.giftLinkCodec = zod_1.z.codec(exports.GiftLinkRow, models_1.GiftLink, {
    decode: row => (0, case_keys_1.camelKeys)(row),
    encode: link => (0, case_keys_1.snakeKeys)(link)
});
exports.giftLinkColumns = Object.keys(exports.GiftLinkRow.shape).map(column => `gift_links.${column}`);
