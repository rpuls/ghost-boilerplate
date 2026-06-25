"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftController = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
class GiftController {
    service;
    tiersService;
    constructor({ service, tiersService }) {
        this.service = service;
        this.tiersService = tiersService;
    }
    async getRedeemable(frame) {
        const token = frame.data.token;
        const memberStatus = frame.options?.context?.member?.status ?? null;
        const gift = await this.service.getRedeemable(token, memberStatus);
        return this.serializeGift(gift);
    }
    async redeem(frame) {
        const token = frame.data.token;
        const member = frame.options?.context?.member;
        if (!member?.id) {
            throw new errors_1.default.UnauthorizedError({
                message: 'Member authentication required.'
            });
        }
        const gift = await this.service.redeem(token, member.id);
        return this.serializeGift(gift);
    }
    async serializeGift(gift) {
        const tier = await this.tiersService.api.read(gift.tierId);
        if (!tier) {
            throw new errors_1.default.InternalServerError({
                message: `Tier ${gift.tierId} not found for gift: ${gift.token}`
            });
        }
        const tierJSON = tier.toJSON();
        return {
            token: gift.token,
            cadence: gift.cadence,
            duration: gift.duration,
            currency: gift.currency,
            amount: gift.amount,
            expires_at: gift.expiresAt,
            consumes_at: gift.consumesAt,
            tier: {
                id: tierJSON.id,
                name: tierJSON.name,
                description: tierJSON.description,
                benefits: tierJSON.benefits
            }
        };
    }
}
exports.GiftController = GiftController;
