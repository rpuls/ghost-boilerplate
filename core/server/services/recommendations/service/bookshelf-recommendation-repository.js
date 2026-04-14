"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookshelfRecommendationRepository = void 0;
const bookshelf_repository_1 = require("./bookshelf-repository");
const logging_1 = __importDefault(require("@tryghost/logging"));
const recommendation_1 = require("./recommendation");
class BookshelfRecommendationRepository extends bookshelf_repository_1.BookshelfRepository {
    sentry;
    constructor(Model, deps = {}) {
        super(Model);
        this.sentry = deps.sentry;
    }
    applyCustomQuery(query, options) {
        query.select('recommendations.*');
        if (options.include?.includes('clickCount') || options.order?.find(o => o.field === 'clickCount')) {
            query.select((knex) => {
                knex.count('*').from('recommendation_click_events').where('recommendation_click_events.recommendation_id', knex.client.raw('recommendations.id')).as('count__clicks');
            });
        }
        if (options.include?.includes('subscriberCount') || options.order?.find(o => o.field === 'subscriberCount')) {
            query.select((knex) => {
                knex.count('*').from('recommendation_subscribe_events').where('recommendation_subscribe_events.recommendation_id', knex.client.raw('recommendations.id')).as('count__subscribers');
            });
        }
    }
    toPrimitive(entity) {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            excerpt: entity.excerpt,
            featured_image: entity.featuredImage?.toString(),
            favicon: entity.favicon?.toString(),
            url: entity.url.toString(),
            one_click_subscribe: entity.oneClickSubscribe,
            created_at: entity.createdAt,
            updated_at: entity.updatedAt
            // Count relations are not saveable: so don't set them here
        };
    }
    modelToEntity(model) {
        try {
            return recommendation_1.Recommendation.create({
                id: model.id,
                title: model.get('title'),
                description: model.get('description'),
                excerpt: model.get('excerpt'),
                featuredImage: model.get('featured_image'),
                favicon: model.get('favicon'),
                url: model.get('url'),
                oneClickSubscribe: model.get('one_click_subscribe'),
                createdAt: model.get('created_at'),
                updatedAt: model.get('updated_at'),
                clickCount: (model.get('count__clicks') ?? undefined),
                subscriberCount: (model.get('count__subscribers') ?? undefined)
            });
        }
        catch (err) {
            logging_1.default.error(err);
            this.sentry?.captureException(err);
            return null;
        }
    }
    getFieldToColumnMap() {
        return {
            id: 'id',
            title: 'title',
            description: 'description',
            excerpt: 'excerpt',
            featuredImage: 'featured_image',
            favicon: 'favicon',
            url: 'url',
            oneClickSubscribe: 'one_click_subscribe',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            clickCount: 'count__clicks',
            subscriberCount: 'count__subscribers'
        };
    }
    async getByUrl(url) {
        const urlFilter = `url:~'${url.host.replace('www.', '')}${url.pathname.replace(/\/$/, '')}'`;
        const recommendations = await this.getAll({ filter: urlFilter });
        if (!recommendations || recommendations.length === 0) {
            return null;
        }
        //  Find URL based on the hostname and pathname.
        //  Query params, hash fragements, protocol and www are ignored.
        const existing = recommendations.find((r) => {
            return r.url.hostname.replace('www.', '') === url.hostname.replace('www.', '') &&
                r.url.pathname.replace(/\/$/, '') === url.pathname.replace(/\/$/, '');
        }) || null;
        return existing;
    }
}
exports.BookshelfRecommendationRepository = BookshelfRecommendationRepository;
