"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftService = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const gift_1 = require("./gift");
const messages = {
    giftSubscriptionsNotEnabled: 'Gift subscriptions are not enabled on this site.',
    giftNotFound: 'Gift not found.',
    giftAlreadyRedeemed: 'This gift has already been redeemed.',
    giftConsumed: 'This gift has already been consumed.',
    giftExpired: 'This gift has expired.',
    giftRefunded: 'This gift has been refunded.',
    memberAlreadySubscribed: 'You already have an active subscription.'
};
class GiftService {
    giftRepository;
    memberRepository;
    tiersService;
    giftEmailService;
    staffServiceEmails;
    labsService;
    constructor({ giftRepository, memberRepository, tiersService, giftEmailService, staffServiceEmails, labsService }) {
        this.giftRepository = giftRepository;
        this.memberRepository = memberRepository;
        this.tiersService = tiersService;
        this.giftEmailService = giftEmailService;
        this.staffServiceEmails = staffServiceEmails;
        this.labsService = labsService;
    }
    async recordPurchase(data) {
        const duration = Number.parseInt(data.duration);
        if (Number.isNaN(duration)) {
            throw new errors_1.default.ValidationError({ message: `Invalid gift duration: ${data.duration}` });
        }
        if (await this.giftRepository.existsByCheckoutSessionId(data.stripeCheckoutSessionId)) {
            return false;
        }
        const member = data.stripeCustomerId
            ? await this.memberRepository.get({ customer_id: data.stripeCustomerId })
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
        await this.giftRepository.create(gift);
        const tier = await this.tiersService.api.read(data.tierId);
        if (!tier) {
            throw new errors_1.default.NotFoundError({ message: `Tier not found: ${data.tierId}` });
        }
        try {
            await this.staffServiceEmails.notifyGiftReceived({
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
            await this.giftEmailService.sendPurchaseConfirmation({
                buyerEmail: data.buyerEmail,
                amount: data.amount,
                currency: data.currency,
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
    async getRedeemableGiftByToken({ token, currentMember }) {
        if (!this.labsService.isSet('giftSubscriptions')) {
            throw new errors_1.default.BadRequestError({
                message: (0, tpl_1.default)(messages.giftSubscriptionsNotEnabled)
            });
        }
        const gift = await this.giftRepository.getByToken(token);
        if (!gift) {
            throw new errors_1.default.NotFoundError({
                message: (0, tpl_1.default)(messages.giftNotFound)
            });
        }
        const redeemableCheck = gift.checkRedeemable();
        if (!redeemableCheck.redeemable) {
            switch (redeemableCheck.reason) {
                case 'redeemed':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(messages.giftAlreadyRedeemed)
                    });
                case 'consumed':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(messages.giftConsumed)
                    });
                case 'expired':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(messages.giftExpired)
                    });
                case 'refunded':
                    throw new errors_1.default.BadRequestError({
                        message: (0, tpl_1.default)(messages.giftRefunded)
                    });
                default: {
                    const exhaustiveCheck = redeemableCheck.reason;
                    throw new errors_1.default.InternalServerError({
                        message: `Unhandled redeem failure reason: ${exhaustiveCheck}`
                    });
                }
            }
        }
        if (currentMember && currentMember.status !== 'free') {
            throw new errors_1.default.BadRequestError({
                message: (0, tpl_1.default)(messages.memberAlreadySubscribed)
            });
        }
        const tier = await this.tiersService.api.read(gift.tierId);
        if (!tier) {
            throw new errors_1.default.NotFoundError({
                message: (0, tpl_1.default)(messages.giftNotFound)
            });
        }
        const tierJSON = tier.toJSON ? tier.toJSON() : tier;
        return {
            token: gift.token,
            cadence: gift.cadence,
            duration: gift.duration,
            currency: gift.currency,
            amount: gift.amount,
            expires_at: gift.expiresAt,
            tier: {
                id: tierJSON.id,
                name: tierJSON.name,
                description: tierJSON.description ?? null,
                benefits: Array.isArray(tierJSON.benefits) ? tierJSON.benefits : []
            }
        };
    }
}
exports.GiftService = GiftService;
