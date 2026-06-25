"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftService = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const gift_1 = require("./gift");
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const constants_1 = require("./constants");
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const GIFT_REMINDER_LEAD_MS = constants_1.GIFT_REMINDER_LEAD_DAYS * MS_PER_DAY;
const GIFT_REMINDER_FLOOR_MS = constants_1.GIFT_REMINDER_FLOOR_DAYS * MS_PER_DAY;
const errorMessages = {
    giftNotFound: 'This gift does not exist.',
    giftAlreadyRedeemed: 'This gift has already been redeemed.',
    giftConsumed: 'This gift has already been consumed.',
    giftExpired: 'This gift has expired.',
    giftRefunded: 'This gift has been refunded.',
    paidMember: 'You already have an active subscription.',
    giftInvalidReassignStatus: 'This gift does not have a reassignable status.',
    giftInvalidReassignMember: 'Member already has an active subscription.',
    giftAlreadyAssigned: 'This gift is already assigned to another member.',
    giftMissingConsumesAt: 'This gift is missing a "consumes at" date.',
    giftMemberAlreadyHasGift: 'Member already has a different active gift attached.'
};
class GiftService {
    deps;
    constructor(deps) {
        this.deps = deps;
    }
    generateToken() {
        /**
         * Combinations: 62^12 ≈ 3.23 × 10^21 (~3.23 sextillion)
         * Entropy:      12 × log2(62) ≈ 71.45 bits
         */
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 12; i++) {
            token += alphabet[node_crypto_1.default.randomInt(alphabet.length)];
        }
        return token;
    }
    async recordPurchase(data) {
        const duration = Number.parseInt(data.duration);
        if (Number.isNaN(duration)) {
            throw new errors_1.default.ValidationError({ message: `Invalid gift duration: ${data.duration}` });
        }
        if (await this.deps.giftRepository.existsByCheckoutSessionId(data.stripeCheckoutSessionId)) {
            return false;
        }
        const member = data.stripeCustomerId
            ? await this.deps.memberRepository.get({ customer_id: data.stripeCustomerId })
            : null;
        const gift = gift_1.Gift.fromPurchase({
            token: data.token,
            buyerEmail: data.buyerEmail,
            buyerMemberId: member?.id ?? null,
            tierId: data.tierId,
            cadence: data.cadence,
            duration,
            currency: data.currency,
            amount: data.amount,
            stripeCheckoutSessionId: data.stripeCheckoutSessionId,
            stripePaymentIntentId: data.stripePaymentIntentId
        });
        await this.deps.giftRepository.create(gift);
        const tier = await this.deps.tiersService.api.read(data.tierId);
        if (!tier) {
            throw new errors_1.default.NotFoundError({ message: `Tier not found: ${data.tierId}` });
        }
        try {
            await this.deps.staffServiceEmails.notifyGiftPurchased({
                name: member?.get('name') ?? null,
                email: member?.get('email') ?? data.buyerEmail,
                memberId: member?.id ?? null,
                amount: data.amount,
                currency: data.currency,
                tierName: tier.name,
                cadence: data.cadence,
                duration
            });
        }
        catch (err) {
            logging_1.default.error('Failed to notify staff of gift purchase', err);
        }
        try {
            await this.deps.giftEmailService.sendPurchaseConfirmation({
                buyerEmail: data.buyerEmail,
                token: data.token,
                tierName: tier.name,
                cadence: data.cadence,
                duration,
                expiresAt: gift.expiresAt
            });
        }
        catch (err) {
            logging_1.default.error('Failed to send gift purchase confirmation email', err);
        }
        return true;
    }
    async getByToken(token) {
        return this.deps.giftRepository.getByToken(token);
    }
    async assertRedeemable(gift, memberStatus) {
        const redeemableCheck = gift.checkRedeemable(memberStatus);
        if (!redeemableCheck.redeemable) {
            switch (redeemableCheck.reason) {
                case 'redeemed':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(errorMessages.giftAlreadyRedeemed),
                        code: 'GIFT_REDEEMED'
                    });
                case 'consumed':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(errorMessages.giftConsumed),
                        code: 'GIFT_CONSUMED'
                    });
                case 'expired':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(errorMessages.giftExpired),
                        code: 'GIFT_EXPIRED'
                    });
                case 'refunded':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(errorMessages.giftRefunded),
                        code: 'GIFT_REFUNDED'
                    });
                case 'paid-member':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(errorMessages.paidMember),
                        code: 'GIFT_PAID_MEMBER'
                    });
                default: {
                    const exhaustiveCheck = redeemableCheck.reason;
                    throw new errors_1.default.InternalServerError({
                        message: `Unhandled redeem failure reason: ${exhaustiveCheck}`
                    });
                }
            }
        }
        return gift;
    }
    async getRedeemable(token, memberStatus) {
        const gift = await this.deps.giftRepository.getByToken(token);
        if (!gift) {
            throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(errorMessages.giftNotFound) });
        }
        await this.assertRedeemable(gift, memberStatus);
        return gift;
    }
    async redeem(token, memberId, options = {}) {
        const run = async (transacting) => {
            const member = await this.deps.memberRepository.get({ id: memberId }, { transacting, forUpdate: true });
            if (!member) {
                throw new errors_1.default.NotFoundError({ message: `Member not found: ${memberId}` });
            }
            const gift = await this.deps.giftRepository.getByToken(token, { transacting, forUpdate: true });
            if (!gift) {
                throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(errorMessages.giftNotFound) });
            }
            if (options.newMember) {
                await this.assertRedeemable(gift, null);
            }
            else {
                await this.assertRedeemable(gift, member.get('status'));
            }
            const redeemed = gift.redeem({ memberId });
            await this.deps.memberRepository.update({
                products: [{
                        id: redeemed.tierId,
                        expiry_at: redeemed.consumesAt
                    }],
                status: 'gift'
            }, { id: memberId, transacting });
            await this.deps.giftRepository.update(redeemed, { transacting });
            // Gift members receive the paid welcome email, as they receive access to paid content
            await this.deps.memberRepository.triggerMemberSignupAutomation(memberId, member.get('email'), 'paid', { transacting });
            return { redeemed, member };
        };
        const { redeemed, member } = options.transacting
            ? await run(options.transacting)
            : await this.deps.giftRepository.transaction(run);
        const notify = async () => {
            try {
                const tier = await this.deps.tiersService.api.read(redeemed.tierId);
                if (!tier) {
                    throw new errors_1.default.NotFoundError({ message: `Tier not found: ${redeemed.tierId}` });
                }
                await this.deps.staffServiceEmails.notifyGiftSubscriptionStarted({
                    memberId: member.id,
                    memberEmail: member.get('email'),
                    memberName: member.get('name'),
                    tierName: tier.name,
                    cadence: redeemed.cadence,
                    duration: redeemed.duration,
                    buyerEmail: redeemed.buyerEmail
                });
            }
            catch (err) {
                logging_1.default.error('Failed to notify staff of gift redemption', err);
            }
            await this.deps.giftReminderScheduler.scheduleFor(redeemed);
        };
        if (options.transacting) {
            // Only notify once the transaction has finished
            options.transacting.executionPromise.then(notify, () => { });
        }
        else {
            await notify();
        }
        return redeemed;
    }
    async getActiveByMember(memberId, options = {}) {
        if (!memberId) {
            return null;
        }
        return this.deps.giftRepository.getActiveByMember(memberId, options);
    }
    async getActiveByMembers(memberIds, options = {}) {
        if (!memberIds || memberIds.length === 0) {
            return new Map();
        }
        return this.deps.giftRepository.getActiveByMembers(memberIds, options);
    }
    getRemainingActiveDays(gift, now = new Date()) {
        if (!gift.isRedeemed() || !gift.consumesAt || gift.isConsumed()) {
            return 0;
        }
        const diffDays = Math.ceil((gift.consumesAt.getTime() - now.getTime()) / MS_PER_DAY);
        return Math.max(0, diffDays);
    }
    async reassignRedeemer(giftId, memberId, options = {}) {
        const run = async (transacting) => {
            const gift = await this.deps.giftRepository.getById(giftId, { transacting, forUpdate: true });
            if (!gift) {
                throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(errorMessages.giftNotFound) });
            }
            if (gift.redeemerMemberId === memberId) {
                return gift;
            }
            const check = gift.checkReassignable();
            if (!check.reassignable) {
                switch (check.reason) {
                    case 'assigned':
                        throw new errors_1.default.BadRequestError({ message: (0, tpl_1.default)(errorMessages.giftAlreadyAssigned) });
                    case 'unredeemed':
                    case 'consumed':
                    case 'expired':
                    case 'refunded':
                        throw new errors_1.default.BadRequestError({ message: (0, tpl_1.default)(errorMessages.giftInvalidReassignStatus) });
                    case 'missing-consumes-at':
                        throw new errors_1.default.BadRequestError({ message: (0, tpl_1.default)(errorMessages.giftMissingConsumesAt) });
                    default: {
                        const exhaustiveCheck = check.reason;
                        throw new errors_1.default.InternalServerError({
                            message: `Unhandled reassign failure reason: ${exhaustiveCheck}`
                        });
                    }
                }
            }
            const member = await this.deps.memberRepository.get({ id: memberId }, { transacting, forUpdate: true });
            if (!member) {
                throw new errors_1.default.NotFoundError({ message: `Member not found: ${memberId}` });
            }
            const memberStatus = member.get('status');
            if (memberStatus !== 'free' && memberStatus !== 'gift') {
                throw new errors_1.default.BadRequestError({ message: (0, tpl_1.default)(errorMessages.giftInvalidReassignMember) });
            }
            const existingActiveGift = await this.deps.giftRepository.getActiveByMember(memberId, { transacting });
            if (existingActiveGift && existingActiveGift.token !== gift.token) {
                throw new errors_1.default.BadRequestError({ message: (0, tpl_1.default)(errorMessages.giftMemberAlreadyHasGift) });
            }
            const reassignedGift = gift.reassignRedeemer(memberId);
            await this.deps.memberRepository.update({
                products: [{
                        id: reassignedGift.tierId,
                        expiry_at: reassignedGift.consumesAt
                    }],
                status: 'gift'
            }, { id: memberId, transacting });
            await this.deps.giftRepository.update(reassignedGift, { transacting });
            return reassignedGift;
        };
        return options.transacting
            ? run(options.transacting)
            : this.deps.giftRepository.transaction(run);
    }
    async refund(paymentIntentId) {
        const gift = await this.deps.giftRepository.getByPaymentIntentId(paymentIntentId);
        if (!gift) {
            return false;
        }
        const refunded = gift.refund();
        if (!refunded) {
            return true;
        }
        await this.deps.giftRepository.transaction(async (transacting) => {
            await this.deps.giftRepository.update(refunded, { transacting });
            if (gift.redeemerMemberId) {
                const member = await this.deps.memberRepository.get({ id: gift.redeemerMemberId }, { transacting });
                if (member?.get('status') === 'gift') {
                    await this.deps.memberRepository.update({
                        products: [],
                        status: 'free'
                    }, { id: gift.redeemerMemberId, transacting });
                }
            }
        });
        return true;
    }
    async consume(token, options = {}) {
        const run = async (transacting) => {
            // Fetch with a row lock to prevent race conditions under concurrency
            const gift = await this.deps.giftRepository.getByToken(token, { transacting, forUpdate: true });
            if (!gift || gift.status !== 'redeemed') {
                return null;
            }
            const consumed = gift.consume();
            if (!consumed) {
                return null;
            }
            await this.deps.giftRepository.update(consumed, { transacting });
            return consumed;
        };
        return options.transacting
            ? await run(options.transacting)
            : await this.deps.giftRepository.transaction(run);
    }
    async processConsumed() {
        const toConsume = await this.deps.giftRepository.findPendingConsumption();
        if (toConsume.length === 0) {
            return { consumedCount: 0, updatedMemberCount: 0 };
        }
        let consumedCount = 0;
        let updatedMemberCount = 0;
        for (const gift of toConsume) {
            await this.deps.giftRepository.transaction(async (transacting) => {
                const consumed = await this.consume(gift.token, { transacting });
                if (!consumed) {
                    return;
                }
                const member = await this.deps.memberRepository.get({ id: consumed.redeemerMemberId }, { transacting, forUpdate: true });
                if (member && member.get('status') === 'gift') {
                    await this.deps.memberRepository.update({
                        products: [],
                        status: 'free'
                    }, { id: consumed.redeemerMemberId, transacting });
                    updatedMemberCount += 1;
                }
                consumedCount += 1;
            });
        }
        return { consumedCount, updatedMemberCount };
    }
    async processExpired() {
        const toExpire = await this.deps.giftRepository.findPendingExpiration();
        if (toExpire.length === 0) {
            return { expiredCount: 0 };
        }
        let expiredCount = 0;
        for (const gift of toExpire) {
            await this.deps.giftRepository.transaction(async (transacting) => {
                // Re-fetch with a row lock to prevent races with concurrent redeems / refunds
                const locked = await this.deps.giftRepository.getByToken(gift.token, { transacting, forUpdate: true });
                if (locked?.status !== 'purchased') {
                    return;
                }
                const expired = locked.expire();
                if (!expired) {
                    return;
                }
                await this.deps.giftRepository.update(expired, { transacting });
                expiredCount += 1;
            });
        }
        return { expiredCount };
    }
    async processReminders() {
        const now = new Date();
        const toRemind = await this.deps.giftRepository.findPendingReminder({
            now,
            reminderLeadMs: GIFT_REMINDER_LEAD_MS,
            reminderFloorMs: GIFT_REMINDER_FLOOR_MS
        });
        if (toRemind.length === 0) {
            return { remindedCount: 0, skippedCount: 0, failedCount: 0 };
        }
        let remindedCount = 0;
        let skippedCount = 0;
        let failedCount = 0;
        for (const gift of toRemind) {
            try {
                const sent = await this.sendReminderForGift(gift.token);
                if (sent) {
                    remindedCount += 1;
                }
                else {
                    skippedCount += 1;
                }
            }
            catch (err) {
                logging_1.default.error(err);
                failedCount += 1;
            }
        }
        return { remindedCount, skippedCount, failedCount };
    }
    async sendReminderForGift(token) {
        const gift = await this.deps.giftRepository.getByToken(token);
        if (!gift) {
            return false;
        }
        const tier = await this.deps.tiersService.api.read(gift.tierId);
        if (!tier) {
            throw new errors_1.default.NotFoundError({ message: `Tier not found for gift: ${gift.tierId}` });
        }
        const result = await this.deps.giftRepository.transaction(async (transacting) => {
            const locked = await this.deps.giftRepository.getByToken(token, { transacting, forUpdate: true });
            if (!locked) {
                return null;
            }
            if (
            // Gift must still be active — a concurrent refund or early consume can happen
            // between `findPendingReminder` and this re-read.
            locked.status !== 'redeemed'
                // Idempotency guard: another path (rerun, scheduler) may already have sent.
                || locked.consumesSoonReminderSentAt !== null
                // Narrows `redeemerMemberId` from `string | null` to `string` — always set for redeemed gifts.
                || locked.redeemerMemberId === null
                // Narrows `consumesAt` from `Date | null` to `Date` — always set for redeemed gifts.
                || locked.consumesAt === null) {
                return null;
            }
            const member = await this.deps.memberRepository.get({ id: locked.redeemerMemberId }, { transacting, forUpdate: true });
            // Record the reminder as sent before any skip or send below so we don't
            // re-try gifts with permanently unreachable redeemers on every poll.
            const reminded = locked.remind();
            if (!reminded) {
                return null;
            }
            await this.deps.giftRepository.update(reminded, { transacting });
            if (!member) {
                return null;
            }
            if (member.get('email_disabled')) {
                return null;
            }
            return {
                memberEmail: member.get('email'),
                memberName: member.get('name'),
                consumesAt: locked.consumesAt
            };
        });
        if (!result) {
            return false;
        }
        await this.deps.giftEmailService.sendReminder({
            memberEmail: result.memberEmail,
            memberName: result.memberName,
            tierName: tier.name,
            consumesAt: result.consumesAt
        });
        return true;
    }
}
exports.GiftService = GiftService;
