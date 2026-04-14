"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftEmailService = void 0;
const moment_1 = __importDefault(require("moment"));
const gift_email_renderer_1 = require("./gift-email-renderer");
class GiftEmailService {
    mailer;
    settingsCache;
    urlUtils;
    getFromAddress;
    blogIcon;
    renderer;
    constructor({ mailer, settingsCache, urlUtils, getFromAddress, blogIcon }) {
        this.mailer = mailer;
        this.settingsCache = settingsCache;
        this.urlUtils = urlUtils;
        this.getFromAddress = getFromAddress;
        this.blogIcon = blogIcon;
        this.renderer = new gift_email_renderer_1.GiftEmailRenderer();
    }
    get siteDomain() {
        try {
            return new URL(this.urlUtils.getSiteUrl()).hostname;
        }
        catch {
            return '';
        }
    }
    async sendPurchaseConfirmation({ buyerEmail, amount, currency, token, tierName, cadence, duration, expiresAt }) {
        const formattedAmount = this.formatAmount({ currency, amount: amount / 100 });
        const siteDomain = this.siteDomain;
        const siteUrl = this.urlUtils.getSiteUrl();
        const siteTitle = this.settingsCache.get('title') ?? siteDomain;
        const giftLink = `${siteUrl.replace(/\/$/, '')}/gift/${token}`;
        const unit = cadence === 'month' ? 'month' : 'year';
        const cadenceLabel = duration === 1 ? `1 ${unit}` : `${duration} ${unit}s`;
        // Pre-build a mailto: URL the buyer can click to open their default mail
        // client with a friendly draft already filled in. Recipient is left blank
        // — that's the one thing only the buyer knows.
        const mailtoSubject = `I got you a gift subscription to ${siteTitle}`;
        const mailtoBody = `Hi,\n\nI bought you a subscription to ${siteTitle}. You can redeem it here:\n\n${giftLink}`;
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
        const templateData = {
            siteTitle,
            siteUrl,
            siteIconUrl: this.blogIcon.getIconUrl({ absolute: true, fallbackToDefault: false }),
            siteDomain,
            accentColor: this.settingsCache.get('accent_color'),
            toEmail: buyerEmail,
            gift: {
                amount: formattedAmount,
                tierName,
                cadenceLabel,
                link: giftLink,
                mailtoUrl,
                expiresAt: (0, moment_1.default)(expiresAt).format('D MMM YYYY')
            }
        };
        const { html, text } = await this.renderer.renderPurchaseConfirmation(templateData);
        await this.mailer.send({
            to: buyerEmail,
            subject: 'Gift subscription purchase confirmation',
            html,
            text,
            from: this.getFromAddress(),
            forceTextContent: true
        });
    }
    formatAmount({ amount = 0, currency }) {
        if (!currency) {
            return Intl.NumberFormat('en', { maximumFractionDigits: 2 }).format(amount);
        }
        return Intl.NumberFormat('en', {
            style: 'currency',
            currency,
            currencyDisplay: 'symbol',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(amount);
    }
}
exports.GiftEmailService = GiftEmailService;
