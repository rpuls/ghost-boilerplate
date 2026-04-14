"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
const nql_1 = __importDefault(require("@tryghost/nql"));
class InMemoryRepository {
    store = [];
    ids = new Map();
    async save(entity) {
        if (entity.deleted) {
            this.store = this.store.filter(item => item.id !== entity.id);
            this.ids.delete(entity.id);
            return;
        }
        if (this.ids.has(entity.id)) {
            this.store = this.store.map((item) => {
                if (item.id === entity.id) {
                    return entity;
                }
                return item;
            });
        }
        else {
            this.store.push(entity);
            this.ids.set(entity.id, true);
        }
    }
    async getById(id) {
        return this.store.find(item => item.id === id) || null;
    }
    async getAll(options = {}) {
        const filter = (0, nql_1.default)(options.filter);
        const results = this.store.slice().filter(item => filter.queryJSON(this.toPrimitive(item)));
        if (options.order) {
            for (const order of options.order) {
                results.sort((a, b) => {
                    if (order.direction === 'asc') {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return a[order.field] > b[order.field] ? 1 : -1;
                    }
                    else {
                        return a[order.field] < b[order.field] ? 1 : -1;
                    }
                });
            }
        }
        return results;
    }
    async getPage(options = { page: 1, limit: 15 }) {
        const results = await this.getAll(options);
        const start = (options.page - 1) * options.limit;
        const end = start + options.limit;
        return results.slice(start, end);
    }
    async getCount(options) {
        const results = await this.getAll(options);
        return results.length;
    }
}
exports.InMemoryRepository = InMemoryRepository;
