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
    consumesSoonReminderSentAt;
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
        this.consumesSoonReminderSentAt = data.consumesSoonReminderSentAt;
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
            refundedAt: null,
            consumesSoonReminderSentAt: null
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
    checkRedeemable(memberStatus) {
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
        if (memberStatus && memberStatus !== 'free') {
            return { redeemable: false, reason: 'paid-member' };
        }
        return { redeemable: true };
    }
    redeem({ memberId, redeemedAt = new Date() }) {
        const consumesAt = new Date(redeemedAt);
        if (this.cadence === 'year') {
            consumesAt.setFullYear(consumesAt.getFullYear() + this.duration);
        }
        else {
            consumesAt.setMonth(consumesAt.getMonth() + this.duration);
        }
        return new Gift({
            ...this,
            redeemerMemberId: memberId,
            redeemedAt,
            consumesAt,
            status: 'redeemed'
        });
    }
    checkReassignable() {
        if (this.isRefunded()) {
            return { reassignable: false, reason: 'refunded' };
        }
        if (this.isConsumed()) {
            return { reassignable: false, reason: 'consumed' };
        }
        if (this.isExpired()) {
            return { reassignable: false, reason: 'expired' };
        }
        if (this.status !== 'redeemed' || this.redeemedAt === null) {
            return { reassignable: false, reason: 'unredeemed' };
        }
        if (this.consumesAt === null) {
            return { reassignable: false, reason: 'missing-consumes-at' };
        }
        if (this.redeemerMemberId !== null) {
            return { reassignable: false, reason: 'assigned' };
        }
        return { reassignable: true };
    }
    reassignRedeemer(newMemberId) {
        return new Gift({
            ...this,
            redeemerMemberId: newMemberId
        });
    }
    refund() {
        if (this.isRefunded()) {
            return null;
        }
        return new Gift({
            ...this,
            status: 'refunded',
            refundedAt: new Date()
        });
    }
    consume() {
        if (this.isConsumed()) {
            return null;
        }
        return new Gift({
            ...this,
            status: 'consumed',
            consumedAt: new Date()
        });
    }
    expire() {
        if (this.isExpired()) {
            return null;
        }
        return new Gift({
            ...this,
            status: 'expired',
            expiredAt: new Date()
        });
    }
    remind() {
        if (this.consumesSoonReminderSentAt !== null) {
            return null;
        }
        return new Gift({
            ...this,
            consumesSoonReminderSentAt: new Date()
        });
    }
}
exports.Gift = Gift;
