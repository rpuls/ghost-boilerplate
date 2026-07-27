"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const zod_1 = require("zod");
const ghost_storage_base_1 = require("ghost-storage-base");
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const client_s3_1 = require("@aws-sdk/client-s3");
// Minimum chunk size for multipart uploads (5 MiB) - required by S3/GCS
// GCS limits: https://docs.cloud.google.com/storage/quotas#requests
const MIN_MULTIPART_CHUNK_SIZE = 5 * 1024 * 1024;
const messages = {
    invalidUrlParameter: 'The URL "{url}" is not a valid URL for this site.',
    missingBucket: 'S3Storage requires a bucket name',
    missingStaticFileURLPrefix: 'S3Storage requires a staticFileURLPrefix',
    missingCdnUrl: 'S3Storage requires a cdnUrl option',
    missingTenantPrefix: 'URL is missing expected tenant prefix "{tenantPrefix}": {url}',
    missingStoragePath: 'URL is missing expected storagePath "{storagePath}": {url}',
    emptyTargetPath: 'S3Storage.saveRaw requires a non-empty targetPath',
    emptyFileName: 'S3Storage.{method} requires a non-empty fileName',
    emptyRelativePath: 'S3Storage.buildKey requires a non-empty relativePath',
    emptyReadPath: 'S3Storage.read requires a non-empty path',
    readNotFound: 'Could not read file: {path}',
    multipartUploadInitFailed: 'Failed to initiate file upload.',
    multipartUploadPartFailed: 'Failed to upload file part {partNumber}.',
    multipartUploadReadFailed: 'There was an error uploading the file. The file may have been modified or removed during upload.',
    missingMultipartThreshold: 'S3Storage requires multipartUploadThresholdBytes option',
    missingMultipartChunkSize: 'S3Storage requires multipartChunkSizeBytes option',
    multipartChunkSizeTooSmall: 'S3Storage multipartChunkSizeBytes must be at least 5 MiB (5242880 bytes)',
    multipartThresholdNotInteger: 'S3Storage multipartUploadThresholdBytes must be an integer',
    multipartChunkSizeNotInteger: 'S3Storage multipartChunkSizeBytes must be an integer',
    partialCredentials: 'S3Storage requires both accessKeyId and secretAccessKey when either is provided'
};
const stripLeadingAndTrailingSlashes = (value = '') => value.replace(/^\/+|\/+$/g, '');
const stripTrailingSlash = (value = '') => value.replace(/\/+$/, '');
// Validates and normalises the S3Storage config. The slash-trimmed fields
// (`staticFileURLPrefix`, `cdnUrl`, `tenantPrefix`) are stripped via `transform`
// so the constructor consumes ready-to-use values, and the required-field guards
// run against the trimmed result.
const configSchema = zod_1.z.object({
    bucket: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingBucket) }).min(1, { error: (0, tpl_1.default)(messages.missingBucket) }),
    staticFileURLPrefix: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) })
        .transform(stripLeadingAndTrailingSlashes)
        .refine(value => value.length > 0, { error: (0, tpl_1.default)(messages.missingStaticFileURLPrefix) }),
    cdnUrl: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingCdnUrl) })
        .transform(stripTrailingSlash)
        .refine(value => value.length > 0, { error: (0, tpl_1.default)(messages.missingCdnUrl) }),
    multipartUploadThresholdBytes: zod_1.z.number({ error: (0, tpl_1.default)(messages.missingMultipartThreshold) })
        .int({ error: (0, tpl_1.default)(messages.multipartThresholdNotInteger) })
        .positive({ error: (0, tpl_1.default)(messages.missingMultipartThreshold) }),
    multipartChunkSizeBytes: zod_1.z.number({ error: (0, tpl_1.default)(messages.missingMultipartChunkSize) })
        .int({ error: (0, tpl_1.default)(messages.multipartChunkSizeNotInteger) })
        .check((ctx) => {
        // Emit a single issue: a falsy value reads as "missing", a positive
        // value below the floor as "too small".
        if (!ctx.value) {
            ctx.issues.push({ code: 'custom', message: (0, tpl_1.default)(messages.missingMultipartChunkSize), input: ctx.value });
        }
        else if (ctx.value < MIN_MULTIPART_CHUNK_SIZE) {
            ctx.issues.push({ code: 'custom', message: (0, tpl_1.default)(messages.multipartChunkSizeTooSmall), input: ctx.value });
        }
    }),
    tenantPrefix: zod_1.z.string().transform(stripLeadingAndTrailingSlashes).optional(),
    region: zod_1.z.string().optional(),
    endpoint: zod_1.z.string().optional(),
    forcePathStyle: zod_1.z.boolean().optional(),
    accessKeyId: zod_1.z.string().optional(),
    secretAccessKey: zod_1.z.string().optional(),
    sessionToken: zod_1.z.string().optional()
}).refine((config) => {
    // accessKeyId and secretAccessKey must be supplied together (or not at all) —
    // a partial pair would silently fall back to ambient AWS credentials.
    const hasAccessKey = Boolean(config.accessKeyId);
    const hasSecretKey = Boolean(config.secretAccessKey);
    const hasSessionToken = Boolean(config.sessionToken);
    const hasCredentialPair = hasAccessKey && hasSecretKey;
    return !((hasAccessKey || hasSecretKey || hasSessionToken) && !hasCredentialPair);
}, { error: (0, tpl_1.default)(messages.partialCredentials) });
class S3Storage extends ghost_storage_base_1.StorageBase {
    client;
    bucket;
    tenantPrefix;
    cdnUrl;
    staticFileURLPrefix;
    multipartUploadThresholdBytes;
    multipartChunkSizeBytes;
    /**
     * Parse + normalise the config, throwing an actionable IncorrectUsageError
     * on the first problem. Shared by `validate` (boot-time check) and the
     * constructor (which uses the normalised result).
     */
    static parseConfig(config) {
        const result = configSchema.safeParse(config);
        if (!result.success) {
            throw new errors_1.default.IncorrectUsageError({
                message: [...new Set(result.error.issues.map(issue => issue.message))].join('; ')
            });
        }
        return result.data;
    }
    /**
     * Validate the options S3Storage would be constructed with, without
     * instantiating it (no S3 client is created). Called by the adapter manager
     * at boot so misconfiguration fails early. Narrows `config` to
     * `S3StorageOptions`.
     */
    static validate(config) {
        S3Storage.parseConfig(config);
    }
    constructor(config) {
        super();
        const options = S3Storage.parseConfig(config);
        this.bucket = options.bucket;
        this.tenantPrefix = options.tenantPrefix ?? '';
        this.staticFileURLPrefix = options.staticFileURLPrefix;
        this.storagePath = options.staticFileURLPrefix;
        this.cdnUrl = options.cdnUrl;
        this.multipartUploadThresholdBytes = options.multipartUploadThresholdBytes;
        this.multipartChunkSizeBytes = options.multipartChunkSizeBytes;
        const clientConfig = {
            region: options.region,
            endpoint: options.endpoint,
            forcePathStyle: options.forcePathStyle
        };
        if (options.accessKeyId && options.secretAccessKey) {
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
    async save(file, targetDir) {
        const dir = targetDir || this.getTargetDir();
        const relativePath = await this.getUniqueFileName(file, dir);
        const key = this.buildKey(relativePath);
        const stats = await node_fs_1.default.promises.stat(file.path);
        if (stats.size >= this.multipartUploadThresholdBytes) {
            logging_1.default.info(`Large file, using multipart upload: file=${key} size=${stats.size} threshold=${this.multipartUploadThresholdBytes}`);
            return await this.uploadMultipart(file, key);
        }
        logging_1.default.info(`Small file, using simple upload: file=${key} size=${stats.size} threshold=${this.multipartUploadThresholdBytes}`);
        const body = await node_fs_1.default.promises.readFile(file.path);
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: body,
            ContentType: file.type
        }));
        return `${this.cdnUrl}/${key}`;
    }
    async *readFileInChunks(filePath, chunkSize) {
        const stream = node_fs_1.default.createReadStream(filePath, { highWaterMark: chunkSize });
        let buffer = Buffer.alloc(0);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
            while (buffer.length >= chunkSize) {
                yield buffer.slice(0, chunkSize);
                buffer = buffer.slice(chunkSize);
            }
        }
        if (buffer.length > 0) {
            yield buffer;
        }
    }
    async uploadMultipart(file, key) {
        const createResponse = await this.client.send(new client_s3_1.CreateMultipartUploadCommand({
            Bucket: this.bucket,
            Key: key,
            ContentType: file.type
        }));
        const uploadId = createResponse.UploadId;
        if (!uploadId) {
            throw new errors_1.default.InternalServerError({
                message: (0, tpl_1.default)(messages.multipartUploadInitFailed)
            });
        }
        try {
            const parts = [];
            let partNumber = 1;
            const chunks = this.readFileInChunks(file.path, this.multipartChunkSizeBytes);
            for await (const chunk of chunks) {
                const uploadPartResponse = await this.client.send(new client_s3_1.UploadPartCommand({
                    Bucket: this.bucket,
                    Key: key,
                    UploadId: uploadId,
                    PartNumber: partNumber,
                    Body: chunk
                }));
                if (!uploadPartResponse.ETag) {
                    throw new errors_1.default.InternalServerError({
                        message: (0, tpl_1.default)(messages.multipartUploadPartFailed, { partNumber })
                    });
                }
                parts.push({
                    ETag: uploadPartResponse.ETag,
                    PartNumber: partNumber
                });
                partNumber += 1;
            }
            await this.client.send(new client_s3_1.CompleteMultipartUploadCommand({
                Bucket: this.bucket,
                Key: key,
                UploadId: uploadId,
                MultipartUpload: {
                    Parts: parts
                }
            }));
            logging_1.default.info(`Multipart upload completed: file=${key} parts=${parts.length}`);
            return `${this.cdnUrl}/${key}`;
        }
        catch (error) {
            logging_1.default.warn(`Aborting multipart upload: file=${key} uploadId=${uploadId}`);
            try {
                await this.client.send(new client_s3_1.AbortMultipartUploadCommand({
                    Bucket: this.bucket,
                    Key: key,
                    UploadId: uploadId
                }));
            }
            catch (abortError) {
                logging_1.default.error(`Failed to abort multipart upload: file=${key} uploadId=${uploadId}`, abortError);
            }
            throw error;
        }
    }
    async saveRaw(buffer, targetPath) {
        if (!targetPath?.trim()) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.emptyTargetPath)
            });
        }
        const key = this.buildKey(targetPath);
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: buffer
        }));
        return `${this.cdnUrl}/${key}`;
    }
    /**
     * Converts a CDN URL to a relative path, stripping CDN URL, tenant prefix, and storagePath.
     *
     * Example: 'https://cdn.example.com/tenant/content/files/2024/06/video.mp4' → '2024/06/video.mp4'
     */
    urlToPath(url) {
        if (!url.startsWith(`${this.cdnUrl}/`)) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.invalidUrlParameter, { url })
            });
        }
        let relativePath = url.slice(this.cdnUrl.length + 1);
        if (this.tenantPrefix) {
            if (!relativePath.startsWith(`${this.tenantPrefix}/`)) {
                throw new errors_1.default.IncorrectUsageError({
                    message: (0, tpl_1.default)(messages.missingTenantPrefix, { tenantPrefix: this.tenantPrefix, url })
                });
            }
            relativePath = relativePath.slice(this.tenantPrefix.length + 1);
        }
        if (!relativePath.startsWith(`${this.storagePath}/`)) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.missingStoragePath, { storagePath: this.storagePath, url })
            });
        }
        const result = relativePath.slice(this.storagePath.length + 1);
        const normalized = node_path_1.default.posix.normalize(result);
        if (normalized.startsWith('..')) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.invalidUrlParameter, { url })
            });
        }
        return normalized;
    }
    async exists(fileName, targetDir) {
        if (!fileName?.trim()) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.emptyFileName, { method: 'exists' })
            });
        }
        const relativePath = targetDir ? node_path_1.default.posix.join(targetDir, fileName) : fileName;
        const key = this.buildKey(relativePath);
        try {
            await this.client.send(new client_s3_1.HeadObjectCommand({
                Bucket: this.bucket,
                Key: key
            }));
            return true;
        }
        catch (error) {
            if (this.isNotFound(error)) {
                return false;
            }
            throw error;
        }
    }
    serve() {
        return (req, res, next) => {
            const relativePath = req.path.replace(/^\/+/, '');
            if (!relativePath) {
                return next();
            }
            const key = this.buildKey(relativePath);
            return res.redirect(301, `${this.cdnUrl}/${key}`);
        };
    }
    async delete(fileName, targetDir) {
        if (!fileName?.trim()) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.emptyFileName, { method: 'delete' })
            });
        }
        const relativePath = targetDir ? node_path_1.default.posix.join(targetDir, fileName) : fileName;
        const key = this.buildKey(relativePath);
        try {
            await this.client.send(new client_s3_1.DeleteObjectCommand({
                Bucket: this.bucket,
                Key: key
            }));
        }
        catch (error) {
            if (!this.isNotFound(error)) {
                throw error;
            }
        }
    }
    /**
     * Reads an object's bytes from S3. Used by image dimension lookups, which
     * fall back to reading from storage for images served via the CDN.
     */
    async read(options = {}) {
        const relativePath = options.path;
        if (!relativePath?.trim()) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.emptyReadPath)
            });
        }
        const key = this.buildKey(relativePath);
        try {
            const response = await this.client.send(new client_s3_1.GetObjectCommand({
                Bucket: this.bucket,
                Key: key
            }));
            const bytes = await response.Body?.transformToByteArray();
            return Buffer.from(bytes ?? []);
        }
        catch (error) {
            if (this.isNotFound(error)) {
                throw new errors_1.default.NotFoundError({
                    err: error,
                    message: (0, tpl_1.default)(messages.readNotFound, { path: relativePath })
                });
            }
            throw error;
        }
    }
    buildKey(relativePath) {
        if (!relativePath) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.emptyRelativePath)
            });
        }
        const pathWithStorage = node_path_1.default.posix.join(this.storagePath, this.toCanonicalRelativePath(relativePath));
        if (!pathWithStorage.startsWith(this.storagePath + '/') && pathWithStorage !== this.storagePath) {
            throw new errors_1.default.IncorrectUsageError({
                message: (0, tpl_1.default)(messages.invalidUrlParameter, { url: relativePath })
            });
        }
        if (!this.tenantPrefix) {
            return pathWithStorage;
        }
        return `${this.tenantPrefix}/${pathWithStorage}`;
    }
    toCanonicalRelativePath(input) {
        return this.fromAbsoluteFilesystemPath(input)
            ?? this.fromStoragePathPrefixed(input)
            ?? this.fromLeadingSlashPath(input)
            ?? input;
    }
    fromAbsoluteFilesystemPath(input) {
        if (!node_path_1.default.posix.isAbsolute(input)) {
            return null;
        }
        const marker = `/${this.storagePath}/`;
        const idx = input.lastIndexOf(marker);
        if (idx !== -1) {
            return input.slice(idx + marker.length);
        }
        if (input.endsWith(`/${this.storagePath}`)) {
            return '';
        }
        return null;
    }
    fromStoragePathPrefixed(input) {
        if (input === this.storagePath || input.startsWith(`${this.storagePath}/`)) {
            return node_path_1.default.posix.relative(this.storagePath, input);
        }
        return null;
    }
    fromLeadingSlashPath(input) {
        if (!node_path_1.default.posix.isAbsolute(input)) {
            return null;
        }
        return input.replace(/^\/+/, '');
    }
    isNotFound(error) {
        return error instanceof client_s3_1.NotFound || error instanceof client_s3_1.NoSuchKey;
    }
}
exports.default = S3Storage;
