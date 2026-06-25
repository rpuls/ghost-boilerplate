"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGiftLink = void 0;
const zod_1 = require("zod");
// MySQL returns a Date, SQLite a string/number; normalise to Date on read.
// Lives here with the row schema that uses it until a second table needs it.
const DbDate = zod_1.z.codec(zod_1.z.union([zod_1.z.date(), zod_1.z.string(), zod_1.z.number()]), zod_1.z.date(), {
    decode: value => new Date(value),
    encode: date => date
});
// The gift_links table row: the single source for the read projection (queries.ts) and the knex
// types below.
exports.DbGiftLink = zod_1.z.object({
    token: zod_1.z.string(),
    post_id: zod_1.z.string(),
    redeemed_count: zod_1.z.number().int().nonnegative(),
    last_redeemed_at: DbDate.nullable(),
    revoked_at: DbDate.nullable(),
    created_at: DbDate,
    updated_at: DbDate.nullable()
});
