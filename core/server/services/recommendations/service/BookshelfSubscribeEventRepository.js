"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookshelfSubscribeEventRepository = void 0;
const BookshelfRepository_1 = require("./BookshelfRepository");
const logging_1 = __importDefault(require("@tryghost/logging"));
const SubscribeEvent_1 = require("./SubscribeEvent");
class BookshelfSubscribeEventRepository extends BookshelfRepository_1.BookshelfRepository {
    sentry;
    constructor(Model, deps = {}) {
        super(Model);
        this.sentry = deps.sentry;
    }
    toPrimitive(entity) {
        return {
            id: entity.id,
            recommendation_id: entity.recommendationId,
            member_id: entity.memberId,
            created_at: entity.createdAt
        };
    }
    modelToEntity(model) {
        try {
            return SubscribeEvent_1.SubscribeEvent.create({
                id: model.id,
                recommendationId: model.get('recommendation_id'),
                memberId: model.get('member_id'),
                createdAt: model.get('created_at')
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
            recommendationId: 'recommendation_id',
            memberId: 'member_id',
            createdAt: 'created_at'
        };
    }
}
exports.BookshelfSubscribeEventRepository = BookshelfSubscribeEventRepository;
