"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbGiftLink = void 0;
const zod_1 = require("zod");
const db_date_1 = require("../../lib/db-date");
exports.DbGiftLink = zod_1.z.object({
    token: zod_1.z.string(),
    post_id: zod_1.z.string(),
    created_at: db_date_1.DbDate,
    updated_at: db_date_1.DbDate.nullable()
});
