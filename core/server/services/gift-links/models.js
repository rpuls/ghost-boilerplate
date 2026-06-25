"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftLink = exports.GiftLinkToken = void 0;
const zod_1 = require("zod");
exports.GiftLinkToken = zod_1.z.string().brand('GiftLinkToken');
exports.GiftLink = zod_1.z.object({
    token: exports.GiftLinkToken,
    redeemedCount: zod_1.z.number().int().nonnegative(),
    lastRedeemedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date()
});
