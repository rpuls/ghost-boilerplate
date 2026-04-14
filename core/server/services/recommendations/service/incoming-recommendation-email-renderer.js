"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingRecommendationEmailRenderer = void 0;
class IncomingRecommendationEmailRenderer {
    #staffService;
    constructor({ staffService }) {
        this.#staffService = staffService;
    }
    async renderSubject(recommendation) {
        return `👍 New recommendation: ${recommendation.title}`;
    }
    async renderHTML(recommendation, recipient) {
        return this.#staffService.api.emails.renderHTML('recommendation-received', {
            recommendation,
            recipient
        });
    }
    async renderText(recommendation, recipient) {
        return this.#staffService.api.emails.renderText('recommendation-received', {
            recommendation,
            recipient
        });
    }
}
exports.IncomingRecommendationEmailRenderer = IncomingRecommendationEmailRenderer;
