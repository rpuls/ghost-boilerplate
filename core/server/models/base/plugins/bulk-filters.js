"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHUNK_SIZE = void 0;
exports.byNQL = byNQL;
exports.byColumnValues = byColumnValues;
exports.byIds = byIds;
const chunk_1 = __importDefault(require("lodash/chunk"));
const nql_1 = __importDefault(require("@tryghost/nql"));
exports.CHUNK_SIZE = 100;
/**
 * Creates a where strategy that applies an NQL filter to the query builder.
 * Yields a single query modifier — no chunking.
 */
function* byNQL(filter) {
    yield (qb) => {
        (0, nql_1.default)(filter).querySQL(qb);
    };
}
/**
 * Creates a where strategy that applies whereIn for the given column and values.
 * Automatically chunks values to avoid SQL parameter limits.
 */
function* byColumnValues(column, values, chunkSize = exports.CHUNK_SIZE) {
    for (const c of (0, chunk_1.default)(values, chunkSize)) {
        yield qb => qb.whereIn(column, c);
    }
}
/**
 * Creates a where strategy for matching by id column.
 * Convenience wrapper around byColumnValues.
 */
function* byIds(ids, chunkSize = exports.CHUNK_SIZE) {
    yield* byColumnValues('id', ids, chunkSize);
}
