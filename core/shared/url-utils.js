"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_API_PATH = void 0;
const url_utils_1 = __importDefault(require("@tryghost/url-utils"));
const config_1 = __importDefault(require("./config"));
const BASE_API_PATH = '/ghost/api';
exports.BASE_API_PATH = BASE_API_PATH;
const urlUtils = new url_utils_1.default({
    getSubdir: config_1.default.getSubdir,
    getSiteUrl: config_1.default.getSiteUrl,
    getAdminUrl: config_1.default.getAdminUrl,
    assetBaseUrls: {
        media: config_1.default.get('urls:media'),
        files: config_1.default.get('urls:files'),
        image: config_1.default.get('urls:image')
    },
    slugs: config_1.default.get('slugs').protected,
    redirectCacheMaxAge: config_1.default.get('caching:301:maxAge'),
    baseApiPath: BASE_API_PATH
});
exports.default = urlUtils;
