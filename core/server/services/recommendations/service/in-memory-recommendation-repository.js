"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRecommendationRepository = void 0;
const in_memory_repository_1 = require("../../lib/in-memory-repository");
class InMemoryRecommendationRepository extends in_memory_repository_1.InMemoryRepository {
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
