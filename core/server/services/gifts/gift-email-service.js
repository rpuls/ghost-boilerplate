"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftEmailService = void 0;
const gift_email_renderer_1 = require("./gift-email-renderer");
const DEFAULT_DATE_LOCALE = 'en-gb';
class GiftEmailService {
    mailer;
    settingsCache;
    urlUtils;
    getFromAddress;
    blogIcon;
    renderer;
    t;
    constructor({ mailer, settingsCache, urlUtils, getFromAddress, blogIcon, t }) {
        this.mailer = mailer;
        this.settingsCache = settingsCache;
        this.urlUtils = urlUtils;
        this.getFromAddress = getFromAddress;
        this.blogIcon = blogIcon;
        this.t = t;
        this.renderer = new gift_email_renderer_1.GiftEmailRenderer({ t });
    }
    get siteDomain() {
        try {
            return new URL(this.urlUtils.getSiteUrl()).hostname;
        }
        catch {
            return '';
        }
    }
    getCadenceLabel(cadence, duration) {
        if (duration === 1) {
            return cadence === 'year' ? this.t('one-year') : this.t('one-month');
        }
        if (cadence === 'year') {
            return this.t('{count} year', { count: duration });
        }
        return this.t('{count} month', { count: duration });
    }
    formatDate(date) {
        const locale = this.settingsCache.get('locale') || DEFAULT_DATE_LOCALE;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(date);
    }
    async sendPurchaseConfirmation({ buyerEmail, token, tierName, cadence, duration, expiresAt }) {
        const siteDomain = this.siteDomain;
        const siteUrl = this.urlUtils.getSiteUrl();
        const siteTitle = this.settingsCache.get('title') ?? siteDomain;
        const giftLink = `${siteUrl.replace(/\/$/, '')}/gift/${token}`;
        const cadenceLabel = this.getCadenceLabel(cadence, duration);
        const { html, text } = await this.renderer.renderPurchaseConfirmation({
            siteTitle,
            siteUrl,
            siteIconUrl: this.blogIcon.getIconUrl({ absolute: true, fallbackToDefault: false }),
            siteDomain,
            accentColor: this.settingsCache.get('accent_color'),
            toEmail: buyerEmail,
            gift: {
                tierName,
                cadenceLabel,
                link: giftLink,
                expiresAt: this.formatDate(expiresAt)
            }
        });
        await this.mailer.send({
            to: buyerEmail,
            subject: this.t('Your gift is ready'),
            html,
            text,
            from: this.getFromAddress(),
            forceTextContent: true
        });
    }
    async sendReminder({ memberEmail, memberName, tierName, consumesAt }) {
        const siteDomain = this.siteDomain;
        const siteUrl = this.urlUtils.getSiteUrl();
        const siteTitle = this.settingsCache.get('title') ?? siteDomain;
        const manageSubscriptionUrl = new URL('#/portal/account', siteUrl).href;
        const firstName = memberName?.trim().split(/\s+/)[0] || null;
        const { html, text } = await this.renderer.renderReminder({
            siteTitle,
            siteUrl,
            siteIconUrl: this.blogIcon.getIconUrl({ absolute: true, fallbackToDefault: false }),
            siteDomain,
            accentColor: this.settingsCache.get('accent_color'),
            memberEmail,
            firstName,
            gift: {
                tierName,
                consumesAt: this.formatDate(consumesAt),
                manageSubscriptionUrl
            }
        });
        await this.mailer.send({
            to: memberEmail,
            subject: this.t('Your gift subscription is ending soon'),
            html,
            text,
            from: this.getFromAddress(),
            forceTextContent: true
        });
    }
}
exports.GiftEmailService = GiftEmailService;
