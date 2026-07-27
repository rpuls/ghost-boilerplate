"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftLink = exports.GiftLinkToken = void 0;
exports.generateGiftLinkToken = generateGiftLinkToken;
const crypto_1 = __importDefault(require("crypto"));
const zod_1 = require("zod");
exports.GiftLinkToken = zod_1.z.string().brand('GiftLinkToken');
// 24 random bytes (192 bits of entropy); base64url keeps it URL-safe.
function generateGiftLinkToken() {
    return exports.GiftLinkToken.parse(crypto_1.default.randomBytes(24).toString('base64url'));
}
exports.GiftLink = zod_1.z.object({
    token: exports.GiftLinkToken,
    createdAt: zod_1.z.date()
});
