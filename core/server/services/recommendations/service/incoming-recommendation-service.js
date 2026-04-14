"use strict";
/* eslint-disable ghost/filenames/match-exported-class */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingRecommendationService = void 0;
const logging_1 = __importDefault(require("@tryghost/logging"));
class IncomingRecommendationService {
    #mentionsApi;
    #recommendationService;
    #emailService;
    #emailRenderer;
    #getEmailRecipients;
    constructor(deps) {
        this.#recommendationService = deps.recommendationService;
        this.#mentionsApi = deps.mentionsApi;
        this.#emailService = deps.emailService;
        this.#emailRenderer = deps.emailRenderer;
        this.#getEmailRecipients = deps.getEmailRecipients;
    }
    async init() {
        // When we boot, it is possible that we missed some webmentions from other sites recommending you
        // More importantly, we might have missed some deletes which we can detect.
        // So we do a slow revalidation of all incoming recommendations
        // This also prevents doing multiple external fetches when doing quick reboots of Ghost after each other (requires Ghost to be up for at least 15 seconds)
        if (!process.env.NODE_ENV?.startsWith('test') && process.env.NODE_ENV !== 'development') {
            setTimeout(() => {
                logging_1.default.info('Updating incoming recommendations on boot');
                this.#updateIncomingRecommendations().catch((err) => {
                    logging_1.default.error('Failed to update incoming recommendations on boot', err);
                });
            }, 15 * 1000 + Math.random() * 5 * 60 * 1000);
        }
    }
    #getMentionFilter() {
        return `source:~$'/.well-known/recommendations.json'`;
    }
    async #updateIncomingRecommendations() {
        // We refresh all incoming recommendations, including:
        // - recommendations that were not verified, as the verification could have failed
        // - recommendations that were deleted previously. Implementation note: given that we have `deleted:false` as default filter in the Mention model, we need to override it here
        const filter = this.#getMentionFilter() + '+deleted:[true,false]';
        await this.#mentionsApi.refreshMentions({ filter, limit: 100 });
    }
    async #mentionToIncomingRecommendation(mention) {
        try {
            const url = new URL(mention.source.toString().replace(/\/.well-known\/recommendations\.json$/, ''));
            // Check if we are also recommending this URL
            const existing = await this.#recommendationService.readRecommendationByUrl(url);
            const recommendingBack = !!existing;
            return {
                id: mention.id,
                title: mention.sourceSiteTitle || mention.sourceTitle,
                url,
                excerpt: mention.sourceExcerpt,
                favicon: mention.sourceFavicon,
                featuredImage: mention.sourceFeaturedImage,
                recommendingBack
            };
        }
        catch (e) {
            logging_1.default.error('Failed to parse mention to incoming recommendation data type', e);
        }
        return null;
    }
    async sendRecommendationEmail(mention) {
        const recommendation = await this.#mentionToIncomingRecommendation(mention);
        if (!recommendation) {
            return;
        }
        const recipients = await this.#getEmailRecipients();
        for (const recipient of recipients) {
            const subject = await this.#emailRenderer.renderSubject(recommendation);
            const html = await this.#emailRenderer.renderHTML(recommendation, recipient);
            const text = await this.#emailRenderer.renderText(recommendation, recipient);
            await this.#emailService.send(recipient.email, subject, html, text);
        }
    }
    async listIncomingRecommendations(options) {
        const page = options.page ?? 1;
        const limit = options.limit ?? 5;
        const filter = this.#getMentionFilter();
        const mentions = await this.#mentionsApi.listMentions({ filter, page, limit });
        const mentionsToIncomingRecommendations = await Promise.all(mentions.data.map(mention => this.#mentionToIncomingRecommendation(mention)));
        const incomingRecommendations = mentionsToIncomingRecommendations.filter((recommendation) => !!recommendation);
        return {
            incomingRecommendations,
            meta: mentions.meta
        };
    }
}
exports.IncomingRecommendationService = IncomingRecommendationService;
