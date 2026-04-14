"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellknownService = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class WellknownService {
    dir;
    urlUtils;
    constructor({ dir, urlUtils }) {
        this.dir = dir;
        this.urlUtils = urlUtils;
    }
    #formatRecommendation(recommendation) {
        return {
            url: recommendation.url,
            updated_at: (recommendation.updatedAt ?? recommendation.createdAt).toISOString(),
            created_at: (recommendation.createdAt).toISOString()
        };
    }
    getPath() {
        return path_1.default.join(this.dir, '/.well-known/recommendations.json');
    }
    getURL() {
        return new URL(this.urlUtils.relativeToAbsolute('/.well-known/recommendations.json'));
    }
    async set(recommendations) {
        const content = JSON.stringify(recommendations.map(r => this.#formatRecommendation(r)));
        const path = this.getPath();
        await promises_1.default.mkdir(path_1.default.dirname(path), { recursive: true });
        await promises_1.default.writeFile(path, content);
    }
}
exports.WellknownService = WellknownService;
