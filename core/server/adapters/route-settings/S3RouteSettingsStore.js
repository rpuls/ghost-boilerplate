"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const client_s3_1 = require("@aws-sdk/client-s3");
const zod_1 = require("zod");
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors = __importStar(require("@tryghost/errors"));
const adapter_base_route_settings_1 = require("@tryghost/adapter-base-route-settings");
const yaml_parser_1 = __importDefault(require("../../services/route-settings/yaml-parser"));
const route_settings_parser_1 = require("../../services/route-settings/route-settings-parser");
const utils_1 = require("./utils");
const YAML_FILENAME = 'routes.yaml';
const DEFAULT_SETTINGS_FILENAME = 'default-routes.yaml';
const CONTENT_TYPE = 'application/yaml; charset=utf-8';
const messages = {
    missingBucket: 'S3RouteSettingsStore requires a bucket name',
    missingStaticFileURLPrefix: 'S3RouteSettingsStore requires a staticFileURLPrefix',
    missingDefaultSettingsBasePath: 'S3RouteSettingsStore requires a defaultSettingsBasePath',
    partialCredentials: 'S3RouteSettingsStore requires both accessKeyId and secretAccessKey when either is provided',
    missingResponseBody: 'S3 GetObject returned no body',
    ensureDefaults: 'Error trying to access the default settings file in {path}.'
};
const stripLeadingAndTrailingSlashes = (value = '') => value.replace(/^\/+|\/+$/g, '');
const configSchema = zod_1.z.object({
    bucket: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingBucket) }).min(1, { error: (0, tpl_1.default)(messages.missingBucket) }),
    staticFileURLPrefix: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) })
        .transform(stripLeadingAndTrailingSlashes)
        .refine(value => value.length > 0, { error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) }),
    defaultSettingsBasePath: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingDefaultSettingsBasePath) })
        .min(1, { error: (0, tpl_1.default)(messages.missingDefaultSettingsBasePath) }),
    tenantPrefix: zod_1.z.string().transform(stripLeadingAndTrailingSlashes).optional(),
    region: zod_1.z.string().optional(),
    endpoint: zod_1.z.string().optional(),
    forcePathStyle: zod_1.z.boolean().optional(),
    accessKeyId: zod_1.z.string().optional(),
    secretAccessKey: zod_1.z.string().optional(),
    sessionToken: zod_1.z.string().optional()
}).refine((config) => {
    const hasAccessKey = Boolean(config.accessKeyId);
    const hasSecretKey = Boolean(config.secretAccessKey);
    const hasSessionToken = Boolean(config.sessionToken);
    const hasCredentialPair = hasAccessKey && hasSecretKey;
    return !((hasAccessKey || hasSecretKey || hasSessionToken) && !hasCredentialPair);
}, { error: (0, tpl_1.default)(messages.partialCredentials) });
/**
 * Remote store for route settings backed by an S3-compatible bucket (MinIO in
 * tests, GCS in production). Reads and writes the operator's original
 * `routes.yaml` verbatim.
 */
class S3RouteSettingsStore extends adapter_base_route_settings_1.RouteSettingsStoreBase {
    client;
    bucket;
    staticFileURLPrefix;
    tenantPrefix;
    defaultSettingsBasePath;
    static parseConfig(config) {
        const result = configSchema.safeParse(config);
        if (!result.success) {
            throw new errors.IncorrectUsageError({
                message: [...new Set(result.error.issues.map(issue => issue.message))].join('; ')
            });
        }
        return result.data;
    }
    static validate(config) {
        S3RouteSettingsStore.parseConfig(config);
    }
    constructor(config) {
        super();
        const options = S3RouteSettingsStore.parseConfig(config);
        const hasCredentialPair = Boolean(options.accessKeyId) && Boolean(options.secretAccessKey);
        this.bucket = options.bucket;
        this.staticFileURLPrefix = options.staticFileURLPrefix;
        this.tenantPrefix = options.tenantPrefix ?? '';
        this.defaultSettingsBasePath = options.defaultSettingsBasePath;
        const clientConfig = {
            region: options.region,
            endpoint: options.endpoint,
            forcePathStyle: options.forcePathStyle
        };
        if (hasCredentialPair) {
            clientConfig.credentials = {
                accessKeyId: options.accessKeyId,
                secretAccessKey: options.secretAccessKey,
                sessionToken: options.sessionToken
            };
        }
        // `s3Client` is a test-only injection seam — it never comes from config
        // (nconf holds static values), so it's read from the raw input rather
        // than the validated schema output.
        const injectedClient = config?.s3Client;
        this.client = injectedClient || new client_s3_1.S3Client(clientConfig);
    }
    async get() {
        let body;
        try {
            const response = await this.client.send(new client_s3_1.GetObjectCommand({
                Bucket: this.bucket,
                Key: this.buildKey()
            }));
            if (!response.Body) {
                throw new errors.InternalServerError({
                    message: (0, tpl_1.default)(messages.missingResponseBody)
                });
            }
            body = await response.Body.transformToString('utf-8');
        }
        catch (err) {
            if (this._isNotFound(err)) {
                const defaultContent = await this.readDefaultSettings();
                return (0, route_settings_parser_1.parseRouteSettings)((0, yaml_parser_1.default)(defaultContent), defaultContent);
            }
            throw err;
        }
        return (0, route_settings_parser_1.parseRouteSettings)((0, yaml_parser_1.default)(body), body);
    }
    async replace(settings) {
        const key = this.buildKey();
        if (await this._canonicalExists()) {
            await this.client.send(new client_s3_1.CopyObjectCommand({
                Bucket: this.bucket,
                Key: (0, utils_1.getBackupRouteSettingsFilePath)(key),
                CopySource: `${this.bucket}/${key}`
            }));
        }
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: settings.yamlSource,
            ContentType: CONTENT_TYPE
        }));
    }
    buildKey() {
        const parts = [this.tenantPrefix, this.staticFileURLPrefix, YAML_FILENAME].filter(Boolean);
        return parts.join('/');
    }
    async _canonicalExists() {
        try {
            await this.client.send(new client_s3_1.HeadObjectCommand({
                Bucket: this.bucket,
                Key: this.buildKey()
            }));
            return true;
        }
        catch (err) {
            if (this._isNotFound(err)) {
                return false;
            }
            throw err;
        }
    }
    async readDefaultSettings() {
        const defaultFilePath = path_1.default.join(this.defaultSettingsBasePath, DEFAULT_SETTINGS_FILENAME);
        try {
            return await fs_extra_1.default.readFile(defaultFilePath, 'utf8');
        }
        catch (err) {
            throw new errors.InternalServerError({
                message: (0, tpl_1.default)(messages.ensureDefaults, { path: this.defaultSettingsBasePath }),
                err: err,
                context: err.path
            });
        }
    }
    _isNotFound(err) {
        return err instanceof client_s3_1.NotFound || err instanceof client_s3_1.NoSuchKey;
    }
}
exports.default = S3RouteSettingsStore;
