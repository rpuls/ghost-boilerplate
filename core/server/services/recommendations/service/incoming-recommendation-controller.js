"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingRecommendationController = void 0;
const unsafe_data_1 = require("./unsafe-data");
class IncomingRecommendationController {
    service;
    constructor(deps) {
        this.service = deps.service;
    }
    async browse(frame) {
        const options = new unsafe_data_1.UnsafeData(frame.options);
        const page = options.optionalKey('page')?.integer ?? 1;
        const limit = options.optionalKey('limit')?.integer ?? 5;
        const { incomingRecommendations, meta } = await this.service.listIncomingRecommendations({ page, limit });
        return this.#serialize(incomingRecommendations, meta);
    }
    #serialize(recommendations, meta) {
        return {
            data: recommendations.map((entity) => {
                return {
                    id: entity.id,
                    title: entity.title,
                    excerpt: entity.excerpt,
                    featured_image: entity.featuredImage?.toString() ?? null,
                    favicon: entity.favicon?.toString() ?? null,
                    url: entity.url.toString(),
                    recommending_back: !!entity.recommendingBack
                };
            }),
            meta
        };
    }
}
exports.IncomingRecommendationController = IncomingRecommendationController;
