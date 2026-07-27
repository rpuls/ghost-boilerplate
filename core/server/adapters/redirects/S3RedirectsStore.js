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
const client_s3_1 = require("@aws-sdk/client-s3");
const zod_1 = require("zod");
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors = __importStar(require("@tryghost/errors"));
const adapter_base_redirects_1 = require("@tryghost/adapter-base-redirects");
const redirect_config_parser_1 = require("../../services/custom-redirects/redirect-config-parser");
const utils_1 = require("../../services/custom-redirects/utils");
const DEFAULT_FILENAME = 'redirects.json';
const messages = {
    missingBucket: 'S3RedirectsStore requires a bucket name',
    missingStaticFileURLPrefix: 'S3RedirectsStore requires a staticFileURLPrefix',
    partialCredentials: 'S3RedirectsStore requires both accessKeyId and secretAccessKey when either is provided',
    missingResponseBody: 'S3 GetObject returned no body'
};
const stripLeadingAndTrailingSlashes = (value = '') => value.replace(/^\/+|\/+$/g, '');
// Validates and normalises the config: the slash-trimmed fields
// (`staticFileURLPrefix`, `tenantPrefix`) are stripped via `transform` so the
// constructor consumes ready-to-use values, plus the credential-pair rule
// (accessKeyId and secretAccessKey must be supplied together).
const configSchema = zod_1.z.object({
    bucket: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingBucket) }).min(1, { error: (0, tpl_1.default)(messages.missingBucket) }),
    staticFileURLPrefix: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) })
        .transform(stripLeadingAndTrailingSlashes)
        .refine(value => value.length > 0, { error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) }),
    tenantPrefix: zod_1.z.string().transform(stripLeadingAndTrailingSlashes).optional(),
    region: zod_1.z.string().optional(),
    endpoint: zod_1.z.string().optional(),
    forcePathStyle: zod_1.z.boolean().optional(),
    accessKeyId: zod_1.z.string().optional(),
    secretAccessKey: zod_1.z.string().optional(),
    sessionToken: zod_1.z.string().optional()
}).refine((config) => {
    // accessKeyId and secretAccessKey must be supplied together (or not at all).
    const hasAccessKey = Boolean(config.accessKeyId);
    const hasSecretKey = Boolean(config.secretAccessKey);
    const hasSessionToken = Boolean(config.sessionToken);
    const hasCredentialPair = hasAccessKey && hasSecretKey;
    return !((hasAccessKey || hasSecretKey || hasSessionToken) && !hasCredentialPair);
}, { error: (0, tpl_1.default)(messages.partialCredentials) });
/**
 * Implements RedirectsStore against an S3-compatible bucket. Reads and
 * writes a single JSON object at the configured key, keeping a
 * timestamped server-side copy of the previous contents on each
 * overwrite.
 */
class S3RedirectsStore extends adapter_base_redirects_1.RedirectsStoreBase {
    client;
    bucket;
    staticFileURLPrefix;
    tenantPrefix;
    /**
     * Parse + normalise the config, throwing an actionable IncorrectUsageError
     * on the first problem. Shared by `validate` (boot-time check) and the
     * constructor (which uses the normalised result).
     */
    static parseConfig(config) {
        const result = configSchema.safeParse(config);
        if (!result.success) {
            throw new errors.IncorrectUsageError({
                message: [...new Set(result.error.issues.map(issue => issue.message))].join('; ')
            });
        }
        return result.data;
    }
    /**
     * Validate the options S3RedirectsStore would be constructed with, without
     * instantiating it (no S3 client is created). Called by the adapter manager
     * at boot so misconfiguration fails early. Narrows `config` to
     * `S3RedirectsStoreOptions`.
     */
    static validate(config) {
        S3RedirectsStore.parseConfig(config);
    }
    constructor(config) {
        super();
        const options = S3RedirectsStore.parseConfig(config);
        const hasCredentialPair = Boolean(options.accessKeyId) && Boolean(options.secretAccessKey);
        this.bucket = options.bucket;
        this.staticFileURLPrefix = options.staticFileURLPrefix;
        this.tenantPrefix = options.tenantPrefix ?? '';
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
        this.client = new client_s3_1.S3Client(clientConfig);
    }
    async getAll() {
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
                return [];
            }
            throw err;
        }
        return (0, redirect_config_parser_1.parseJson)(body);
    }
    async replaceAll(redirects) {
        const key = this.buildKey();
        if (await this._canonicalExists()) {
            await this.client.send(new client_s3_1.CopyObjectCommand({
                Bucket: this.bucket,
                Key: (0, utils_1.getBackupRedirectsFilePath)(key),
                CopySource: `${this.bucket}/${key}`
            }));
        }
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: JSON.stringify(redirects),
            ContentType: 'application/json'
        }));
    }
    buildKey() {
        const parts = [this.tenantPrefix, this.staticFileURLPrefix, DEFAULT_FILENAME].filter(Boolean);
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
    _isNotFound(err) {
        return err instanceof client_s3_1.NotFound || err instanceof client_s3_1.NoSuchKey;
    }
}
exports.default = S3RedirectsStore;
