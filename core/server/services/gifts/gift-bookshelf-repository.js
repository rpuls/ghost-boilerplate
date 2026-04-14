"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftBookshelfRepository = void 0;
const gift_1 = require("./gift");
class GiftBookshelfRepository {
    model;
    constructor({ GiftModel }) {
        this.model = GiftModel;
    }
    async existsByCheckoutSessionId(checkoutSessionId) {
        const existing = await this.model.findOne({
            stripe_checkout_session_id: checkoutSessionId
        }, { require: false });
        return !!existing;
    }
    async create(gift) {
        await this.model.add({
            token: gift.token,
            buyer_email: gift.buyerEmail,
            buyer_member_id: gift.buyerMemberId,
            redeemer_member_id: gift.redeemerMemberId,
            tier_id: gift.tierId,
            cadence: gift.cadence,
            duration: gift.duration,
            currency: gift.currency,
            amount: gift.amount,
            stripe_checkout_session_id: gift.stripeCheckoutSessionId,
            stripe_payment_intent_id: gift.stripePaymentIntentId,
            consumes_at: gift.consumesAt,
            expires_at: gift.expiresAt,
            status: gift.status,
            purchased_at: gift.purchasedAt,
            redeemed_at: gift.redeemedAt,
            consumed_at: gift.consumedAt,
            expired_at: gift.expiredAt,
            refunded_at: gift.refundedAt
        });
    }
    async getByToken(token) {
        const model = await this.model.findOne({
            token
        }, { require: false });
        if (!model) {
            return null;
        }
        const json = model.toJSON();
        return new gift_1.Gift({
            token: json.token,
            buyerEmail: json.buyer_email,
            buyerMemberId: json.buyer_member_id,
            redeemerMemberId: json.redeemer_member_id,
            tierId: json.tier_id,
            cadence: json.cadence,
            duration: json.duration,
            currency: json.currency,
            amount: json.amount,
            stripeCheckoutSessionId: json.stripe_checkout_session_id,
            stripePaymentIntentId: json.stripe_payment_intent_id,
            consumesAt: json.consumes_at,
            expiresAt: json.expires_at,
            status: json.status,
            purchasedAt: json.purchased_at,
            redeemedAt: json.redeemed_at,
            consumedAt: json.consumed_at,
            expiredAt: json.expired_at,
            refundedAt: json.refunded_at
        });
    }
}
exports.GiftBookshelfRepository = GiftBookshelfRepository;
