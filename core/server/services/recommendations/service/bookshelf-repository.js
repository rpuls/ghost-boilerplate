"use strict";
/* eslint-disable ghost/filenames/match-exported-class */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookshelfRepository = void 0;
const mongo_utils_1 = require("@tryghost/mongo-utils");
const errors_1 = __importDefault(require("@tryghost/errors"));
class BookshelfRepository {
    Model;
    constructor(Model) {
        this.Model = Model;
    }
    /**
     * override this method to add custom query logic to knex queries
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    applyCustomQuery(query, options) {
        return;
    }
    #entityFieldToColumn(field) {
        const mapping = this.getFieldToColumnMap();
        return mapping[field];
    }
    #orderToString(order) {
        if (!order || order.length === 0) {
            return;
        }
        return order.map(({ field, direction }) => `${this.#entityFieldToColumn(field)} ${direction}`).join(',');
    }
    /**
     * Map all the fields in an NQL filter to the names of the model
     */
    #getNQLKeyTransformer() {
        return (0, mongo_utils_1.chainTransformers)(...(0, mongo_utils_1.mapKeys)(this.getFieldToColumnMap()));
    }
    async save(entity) {
        if (entity.deleted) {
            await this.Model.destroy({ id: entity.id });
            return;
        }
        const existing = await this.Model.findOne({ id: entity.id }, { require: false });
        if (existing) {
            existing.set(this.toPrimitive(entity));
            await existing.save({}, { autoRefresh: false, method: 'update' });
        }
        else {
            await this.Model.add(this.toPrimitive(entity));
        }
    }
    async getById(id) {
        const models = await this.#fetchAll({
            filter: `id:'${id}'`,
            limit: 1
        });
        if (models.length === 1) {
            return models[0];
        }
        return null;
    }
    async #fetchAll(options = {}) {
        const { filter, order, page, limit } = options;
        if (page !== undefined) {
            if (page < 1) {
                throw new errors_1.default.BadRequestError({ message: 'page must be greater or equal to 1' });
            }
            if (limit !== undefined && limit < 1) {
                throw new errors_1.default.BadRequestError({ message: 'limit must be greater or equal to 1' });
            }
        }
        const collection = this.Model.getFilteredCollection({
            filter,
            mongoTransformer: this.#getNQLKeyTransformer()
        });
        const orderString = this.#orderToString(order);
        collection
            .query((q) => {
            this.applyCustomQuery(q, options);
            if (limit) {
                q.limit(limit);
            }
            if (limit && page) {
                q.limit(limit);
                q.offset(limit * (page - 1));
            }
            if (orderString) {
                q.orderByRaw(orderString);
            }
        });
        const models = await collection.fetchAll();
        return (await Promise.all(models.map(model => this.modelToEntity(model)))).filter(entity => !!entity);
    }
    async getAll({ filter, order, include } = {}) {
        return this.#fetchAll({
            filter,
            order,
            include
        });
    }
    async getPage({ filter, order, page, limit, include }) {
        return this.#fetchAll({
            filter,
            order,
            page,
            limit,
            include
        });
    }
    async getCount({ filter } = {}) {
        const collection = this.Model.getFilteredCollection({
            filter,
            mongoTransformer: this.#getNQLKeyTransformer()
        });
        return await collection.count();
    }
    async getGroupedCount({ filter, groupBy }) {
        const columnName = this.#entityFieldToColumn(groupBy);
        const data = (await this.Model.getFilteredCollection({
            filter,
            mongoTransformer: this.#getNQLKeyTransformer()
        }).query()
            .select(columnName)
            .count('* as count')
            .groupBy(columnName));
        return data.map((row) => {
            return {
                count: row.count,
                [groupBy]: row[columnName]
            };
        });
    }
}
exports.BookshelfRepository = BookshelfRepository;
