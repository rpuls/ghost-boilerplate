"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auto_filling_map_1 = require("../../lib/auto-filling-map");
// Each internal integration is seeded with a single API key whose type is
// fixed by fixtures. Encoded here so callers don't have to know.
const SLUG_KEY_TYPE = {
    'ghost-scheduler': 'admin',
    'ghost-internal-frontend': 'content'
};
// models/index.js is the Bookshelf model registry — a JS module without
// TypeScript declarations. Use a typed require so we can call the model
// method without polluting the file with `any`. The generic constrains
// known internal slugs to their seeded type; arbitrary slugs accept any
// type.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const models = require('../../models');
/**
 * Process-lifetime cache of internal-integration API keys, keyed by slug.
 * Rotation orchestration calls `.clear()` to invalidate after rotating the
 * underlying api_keys row.
 */
const internalKeys = new auto_filling_map_1.AutoFillingMap(slug => models.Integration.getApiKeyBySlug(slug, SLUG_KEY_TYPE[slug]));
exports.default = internalKeys;
