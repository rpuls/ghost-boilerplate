"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationService = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const click_event_1 = require("./click-event");
const recommendation_1 = require("./recommendation");
const subscribe_event_1 = require("./subscribe-event");
const messages = {
    notFound: 'Recommendation with id {id} not found'
};
class RecommendationService {
    repository;
    clickEventRepository;
    subscribeEventRepository;
    wellknownService;
    mentionSendingService;
    recommendationEnablerService;
    recommendationMetadataService;
    constructor(deps) {
        this.repository = deps.repository;
        this.wellknownService = deps.wellknownService;
        this.mentionSendingService = deps.mentionSendingService;
        this.recommendationEnablerService = deps.recommendationEnablerService;
        this.clickEventRepository = deps.clickEventRepository;
        this.subscribeEventRepository = deps.subscribeEventRepository;
        this.recommendationMetadataService = deps.recommendationMetadataService;
    }
    async init() {
        const recommendations = await this.#listRecommendations();
        await this.updateWellknown(recommendations);
        // Do a slow update of all the recommendation metadata (keeping logo up to date, one-click-subscribe, etc.)
        // We better move this to a job in the future
        if (!process.env.NODE_ENV?.startsWith('test')) {
            setTimeout(async () => {
                try {
                    await this.updateAllRecommendationsMetadata();
                }
                catch (e) {
                    logging_1.default.error('[Recommendations] Failed to update all recommendations metadata on boot', e);
                }
            }, 2 * 60 * 1000 + Math.random() * 5 * 60 * 1000);
        }
    }
    async updateAllRecommendationsMetadata() {
        const recommendations = await this.#listRecommendations();
        logging_1.default.info('[Recommendations] Updating recommendations metadata');
        for (const recommendation of recommendations) {
            try {
                await this._updateRecommendationMetadata(recommendation);
                await this.repository.save(recommendation);
            }
            catch (e) {
                logging_1.default.error('[Recommendations] Failed to save updated metadata for recommendation ' + recommendation.url.toString(), e);
            }
        }
    }
    async updateWellknown(recommendations) {
        await this.wellknownService.set(recommendations);
    }
    async updateRecommendationsEnabledSetting(recommendations) {
        const expectedSetting = (recommendations.length > 0).toString();
        const currentSetting = this.recommendationEnablerService.getSetting();
        if (currentSetting && currentSetting === expectedSetting) {
            return;
        }
        await this.recommendationEnablerService.setSetting(expectedSetting);
    }
    sendMentionToRecommendation(recommendation) {
        this.mentionSendingService.sendAll({
            url: this.wellknownService.getURL(),
            links: [
                recommendation.url
            ]
        }).catch((err) => {
            logging_1.default.error('Failed to send mention to recommendation', err);
        });
    }
    async readRecommendation(id) {
        const recommendation = await this.repository.getById(id);
        if (!recommendation) {
            throw new errors_1.default.NotFoundError({
                message: (0, tpl_1.default)(messages.notFound, { id })
            });
        }
        return recommendation.plain;
    }
    async addRecommendation(addRecommendation) {
        const recommendation = recommendation_1.Recommendation.create(addRecommendation);
        // If a recommendation with this URL already exists, throw an error
        const existing = await this.repository.getByUrl(recommendation.url);
        if (existing) {
            throw new errors_1.default.ValidationError({
                message: 'A recommendation with this URL already exists.'
            });
        }
        await this.repository.save(recommendation);
        const recommendations = await this.#listRecommendations();
        await this.updateWellknown(recommendations);
        await this.updateRecommendationsEnabledSetting(recommendations);
        // Only send an update for the mentioned URL
        this.sendMentionToRecommendation(recommendation);
        return recommendation.plain;
    }
    async checkRecommendation(url) {
        // If a recommendation with this URL already exists, return it, but with updated metadata
        const existing = await this.repository.getByUrl(url);
        if (existing) {
            this._updateRecommendationMetadata(existing);
            await this.repository.save(existing);
            return existing.plain;
        }
        let metadata;
        try {
            metadata = await this.recommendationMetadataService.fetch(url);
        }
        catch (e) {
            logging_1.default.error('[Recommendations] Failed to fetch metadata for url ' + url, e);
            return {
                url: url,
                title: undefined,
                excerpt: undefined,
                featuredImage: undefined,
                favicon: undefined,
                oneClickSubscribe: false
            };
        }
        return {
            url: url,
            title: metadata.title ?? undefined,
            excerpt: metadata.excerpt ?? undefined,
            featuredImage: metadata.featuredImage ?? undefined,
            favicon: metadata.favicon ?? undefined,
            oneClickSubscribe: !!metadata.oneClickSubscribe
        };
    }
    async _updateRecommendationMetadata(recommendation) {
        // Fetch data
        try {
            const metadata = await this.recommendationMetadataService.fetch(recommendation.url);
            // Set null values to undefined so we don't trigger an update
            recommendation.edit({
                // Don't set title if it's already set on the recommendation
                title: recommendation.title ? undefined : (metadata.title ?? undefined),
                excerpt: metadata.excerpt ?? undefined,
                featuredImage: metadata.featuredImage ?? undefined,
                favicon: metadata.favicon ?? undefined,
                oneClickSubscribe: !!metadata.oneClickSubscribe
            });
        }
        catch (e) {
            logging_1.default.error('[Recommendations] Failed to update metadata for recommendation ' + recommendation.url.toString(), e);
        }
    }
    async editRecommendation(id, recommendationEdit) {
        // Check if it exists
        const existing = await this.repository.getById(id);
        if (!existing) {
            throw new errors_1.default.NotFoundError({
                message: (0, tpl_1.default)(messages.notFound, { id })
            });
        }
        existing.edit(recommendationEdit);
        await this._updateRecommendationMetadata(existing);
        await this.repository.save(existing);
        const recommendations = await this.#listRecommendations();
        await this.updateWellknown(recommendations);
        this.sendMentionToRecommendation(existing);
        return existing.plain;
    }
    async deleteRecommendation(id) {
        const existing = await this.repository.getById(id);
        if (!existing) {
            throw new errors_1.default.NotFoundError({
                message: (0, tpl_1.default)(messages.notFound, { id })
            });
        }
        existing.delete();
        await this.repository.save(existing);
        const recommendations = await this.#listRecommendations();
        await this.updateWellknown(recommendations);
        await this.updateRecommendationsEnabledSetting(recommendations);
        // Send a mention (because it was deleted, according to the webmentions spec)
        this.sendMentionToRecommendation(existing);
    }
    /**
     * Sames as listRecommendations, but returns Entities instead of plain objects (Entities are only used internally)
     */
    async #listRecommendations(options = { page: 1, limit: 'all' }) {
        if (options.limit === 'all') {
            return await this.repository.getAll({
                ...options
            });
        }
        return await this.repository.getPage({
            ...options,
            page: options.page || 1,
            limit: options.limit || 15
        });
    }
    async listRecommendations(options = { page: 1, limit: 'all', include: [] }) {
        const list = await this.#listRecommendations(options);
        return list.map(e => e.plain);
    }
    async countRecommendations({ filter }) {
        return await this.repository.getCount({ filter });
    }
    async trackClicked({ id, memberId }) {
        const clickEvent = click_event_1.ClickEvent.create({ recommendationId: id, memberId });
        await this.clickEventRepository.save(clickEvent);
    }
    async trackSubscribed({ id, memberId }) {
        const subscribeEvent = subscribe_event_1.SubscribeEvent.create({ recommendationId: id, memberId });
        await this.subscribeEventRepository.save(subscribeEvent);
    }
    async readRecommendationByUrl(url) {
        const recommendation = await this.repository.getByUrl(url);
        if (!recommendation) {
            return null;
        }
        return recommendation.plain;
    }
}
exports.RecommendationService = RecommendationService;
