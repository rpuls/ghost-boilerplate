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
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors = __importStar(require("@tryghost/errors"));
const RedirectsStoreBase_1 = __importDefault(require("./RedirectsStoreBase"));
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
/**
 * Implements RedirectsStore against an S3-compatible bucket. Reads and
 * writes a single JSON object at the configured key, keeping a
 * timestamped server-side copy of the previous contents on each
 * overwrite.
 */
class S3RedirectsStore extends RedirectsStoreBase_1.default {
    client;
    bucket;
    staticFileURLPrefix;
    tenantPrefix;
    constructor(options) {
        super();
        if (!options.bucket) {
            throw new errors.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.missingBucket)
            });
        }
        const staticFileURLPrefix = stripLeadingAndTrailingSlashes(options.staticFileURLPrefix);
        if (!staticFileURLPrefix) {
            throw new errors.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.missingStaticFileURLPrefix)
            });
        }
        const hasAccessKey = Boolean(options.accessKeyId);
        const hasSecretKey = Boolean(options.secretAccessKey);
        const hasSessionToken = Boolean(options.sessionToken);
        const hasCredentialPair = hasAccessKey && hasSecretKey;
        if ((hasAccessKey || hasSecretKey || hasSessionToken) && !hasCredentialPair) {
            throw new errors.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.partialCredentials)
            });
        }
        this.bucket = options.bucket;
        this.staticFileURLPrefix = staticFileURLPrefix;
        this.tenantPrefix = stripLeadingAndTrailingSlashes(options.tenantPrefix);
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
