"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftBookshelfRepository = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
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
    async getById(id, options = {}) {
        const model = await this.model.findOne({
            id
        }, { require: false, ...options });
        return model ? this.toGift(model) : null;
    }
    async getByToken(token, options = {}) {
        const model = await this.model.findOne({
            token
        }, { require: false, ...options });
        return model ? this.toGift(model) : null;
    }
    async getByPaymentIntentId(paymentIntentId) {
        const model = await this.model.findOne({
            stripe_payment_intent_id: paymentIntentId
        }, { require: false });
        return model ? this.toGift(model) : null;
    }
    async getActiveByMember(memberId, options = {}) {
        const model = await this.model.findOne({
            redeemer_member_id: memberId,
            status: 'redeemed'
        }, { require: false, ...options });
        return model ? this.toGift(model) : null;
    }
    async getActiveByMembers(memberIds, options = {}) {
        const map = new Map();
        if (memberIds.length === 0) {
            return map;
        }
        const idList = memberIds.map(id => `'${id}'`).join(',');
        const collection = await this.model.findAll({
            filter: `redeemer_member_id:[${idList}]+status:redeemed`,
            ...options
        });
        for (const model of collection.models) {
            const gift = this.toGift(model);
            if (gift.redeemerMemberId) {
                map.set(gift.redeemerMemberId, gift);
            }
        }
        return map;
    }
    async findPendingConsumption() {
        const now = new Date();
        const collection = await this.model.findAll({
            filter: `status:redeemed+consumes_at:<'${now.toISOString()}'`
        });
        return collection.models.map(model => this.toGift(model));
    }
    async findPendingExpiration() {
        const now = new Date();
        const collection = await this.model.findAll({
            filter: `status:purchased+expires_at:<'${now.toISOString()}'`
        });
        return collection.models.map(model => this.toGift(model));
    }
    async findPendingReminder({ now, reminderLeadMs, reminderFloorMs, transacting }) {
        const upper = new Date(now.getTime() + reminderLeadMs).toISOString();
        const lower = new Date(now.getTime() + reminderFloorMs).toISOString();
        const collection = await this.model.findAll({
            filter: `status:redeemed+consumes_at:<='${upper}'+consumes_at:>'${lower}'+consumes_soon_reminder_sent_at:null`,
            transacting
        });
        return collection.models.map(model => this.toGift(model));
    }
    async findUnsentReminders() {
        const now = new Date().toISOString();
        const collection = await this.model.findAll({
            filter: `status:redeemed+consumes_at:>'${now}'+consumes_soon_reminder_sent_at:null`
        });
        return collection.models.map(model => this.toGift(model));
    }
    async create(gift, options = {}) {
        await this.model.add(this.toRow(gift), options);
    }
    async update(gift, options = {}) {
        const existing = await this.model.findOne({
            token: gift.token
        }, { require: false, ...options });
        if (!existing) {
            throw new errors_1.default.InternalServerError({ message: `Gift not found: ${gift.token}` });
        }
        await existing.save(this.toRow(gift), {
            autoRefresh: false,
            method: 'update',
            patch: true,
            ...options
        });
    }
    async transaction(callback) {
        return await this.model.transaction(callback);
    }
    toRow(gift) {
        return {
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
            refunded_at: gift.refundedAt,
            consumes_soon_reminder_sent_at: gift.consumesSoonReminderSentAt
        };
    }
    toGift(model) {
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
            refundedAt: json.refunded_at,
            consumesSoonReminderSentAt: json.consumes_soon_reminder_sent_at ?? null
        });
    }
}
exports.GiftBookshelfRepository = GiftBookshelfRepository;
