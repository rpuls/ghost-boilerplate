"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRevokeAllResponse = exports.toGiftLinksResponse = void 0;
const zod_1 = require("zod");
const case_keys_1 = require("./case-keys");
const models_1 = require("./models");
// Response schemas — the shapes the admin endpoints emit.
const GiftLinkResource = zod_1.z.object({
    token: zod_1.z.string(),
    redeemed_count: zod_1.z.number(),
    last_redeemed_at: zod_1.z.date().nullable(),
    created_at: zod_1.z.date()
});
const GiftLinksResponse = zod_1.z.object({ gift_links: zod_1.z.array(GiftLinkResource) });
const RevokeAllResponse = zod_1.z.object({ meta: zod_1.z.object({ count: zod_1.z.number() }) });
exports.toGiftLinksResponse = zod_1.z.array(models_1.GiftLink)
    .transform((links) => ({
    gift_links: links.map(link => (0, case_keys_1.snakeKeys)(link))
}))
    .pipe(GiftLinksResponse);
exports.toRevokeAllResponse = zod_1.z.object({ count: zod_1.z.number() })
    .transform((data) => ({ meta: { count: data.count } }))
    .pipe(RevokeAllResponse);
