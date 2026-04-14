"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift = void 0;
const constants_1 = require("./constants");
class Gift {
    token;
    buyerEmail;
    buyerMemberId;
    redeemerMemberId;
    tierId;
    cadence;
    duration;
    currency;
    amount;
    stripeCheckoutSessionId;
    stripePaymentIntentId;
    consumesAt;
    expiresAt;
    status;
    purchasedAt;
    redeemedAt;
    consumedAt;
    expiredAt;
    refundedAt;
    constructor(data) {
        this.token = data.token;
        this.buyerEmail = data.buyerEmail;
        this.buyerMemberId = data.buyerMemberId;
        this.redeemerMemberId = data.redeemerMemberId;
        this.tierId = data.tierId;
        this.cadence = data.cadence;
        this.duration = data.duration;
        this.currency = data.currency;
        this.amount = data.amount;
        this.stripeCheckoutSessionId = data.stripeCheckoutSessionId;
        this.stripePaymentIntentId = data.stripePaymentIntentId;
        this.consumesAt = data.consumesAt;
        this.expiresAt = data.expiresAt;
        this.status = data.status;
        this.purchasedAt = data.purchasedAt;
        this.redeemedAt = data.redeemedAt;
        this.consumedAt = data.consumedAt;
        this.expiredAt = data.expiredAt;
        this.refundedAt = data.refundedAt;
    }
    static fromPurchase(data) {
        const now = new Date();
        const expiresAt = new Date(now);
        expiresAt.setDate(expiresAt.getDate() + constants_1.GIFT_EXPIRY_DAYS);
        return new Gift({
            ...data,
            redeemerMemberId: null,
            consumesAt: null,
            expiresAt,
            status: 'purchased',
            purchasedAt: now,
            redeemedAt: null,
            consumedAt: null,
            expiredAt: null,
            refundedAt: null
        });
    }
    isRedeemed() {
        return this.redeemedAt !== null;
    }
    isExpired() {
        return this.expiredAt !== null;
    }
    isRefunded() {
        return this.refundedAt !== null;
    }
    isConsumed() {
        return this.consumedAt !== null;
    }
    checkRedeemable() {
        if (this.isRedeemed()) {
            return { redeemable: false, reason: 'redeemed' };
        }
        if (this.isConsumed()) {
            return { redeemable: false, reason: 'consumed' };
        }
        if (this.isExpired()) {
            return { redeemable: false, reason: 'expired' };
        }
        if (this.isRefunded()) {
            return { redeemable: false, reason: 'refunded' };
        }
        return { redeemable: true };
    }
}
exports.Gift = Gift;
