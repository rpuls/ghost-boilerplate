"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRecommendationRepository = void 0;
const InMemoryRepository_1 = require("../../lib/InMemoryRepository");
class InMemoryRecommendationRepository extends InMemoryRepository_1.InMemoryRepository {
    toPrimitive(entity) {
        return entity;
    }
    async getByUrl(url) {
        //  Find URL based on the hostname and pathname.
        //  Query params, hash fragements, protocol and www are ignored.
        const existing = this.store.find((r) => {
            return r.url.hostname.replace('www.', '') === url.hostname.replace('www.', '') &&
                r.url.pathname.replace(/\/$/, '') === url.pathname.replace(/\/$/, '');
        }) || null;
        return existing;
    }
}
exports.InMemoryRecommendationRepository = InMemoryRecommendationRepository;
