"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDate = void 0;
const zod_1 = require("zod");
// A zod codec for datetime columns: MySQL returns a Date, SQLite a string/number;
// normalise to a Date on read and pass a Date through on write.
exports.DbDate = zod_1.z.codec(zod_1.z.union([zod_1.z.date(), zod_1.z.string(), zod_1.z.number()]), zod_1.z.date(), {
    decode: value => new Date(value),
    encode: date => date
});
