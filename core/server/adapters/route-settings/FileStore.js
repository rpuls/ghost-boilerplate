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
const zod_1 = require("zod");
const errors = __importStar(require("@tryghost/errors"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const adapter_base_route_settings_1 = require("@tryghost/adapter-base-route-settings");
const yaml_parser_1 = __importDefault(require("../../services/route-settings/yaml-parser"));
const route_settings_parser_1 = require("../../services/route-settings/route-settings-parser");
const utils_1 = require("./utils");
const YAML_FILENAME = 'routes.yaml';
const DEFAULT_SETTINGS_FILENAME = 'default-routes.yaml';
const messages = {
    missingPaths: 'FileStore requires basePath and defaultSettingsBasePath.',
    ensureSettings: 'Error trying to access settings files in {path}.'
};
// Validates the required paths sourced from config. Used by `FileStore.validate`.
const configSchema = zod_1.z.object({
    basePath: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingPaths) }).min(1, { error: (0, tpl_1.default)(messages.missingPaths) }),
    defaultSettingsBasePath: zod_1.z.string({ error: (0, tpl_1.default)(messages.missingPaths) }).min(1, { error: (0, tpl_1.default)(messages.missingPaths) })
});
/**
 * Local-disk store for route settings. Reads and writes the user's
 * original `routes.yaml` verbatim — comments, ordering and formatting are
 * preserved because we persist `settings.yamlSource` (the exact bytes the
 * domain model was parsed from) rather than a re-serialised model. Every
 * `replace` turns the previous file into a timestamped backup. When no
 * `routes.yaml` exists the parsed bundled defaults are returned without
 * touching the disk; a real file only materialises on the first `replace`.
 */
class FileStore extends adapter_base_route_settings_1.RouteSettingsStoreBase {
    basePath;
    defaultSettingsBasePath;
    getBackupFilePath;
    /**
     * Validate the options FileStore would be constructed with, without
     * instantiating it. Called by the adapter manager at boot so
     * misconfiguration fails early, and by the constructor so the two share a
     * single source of truth. Narrows `config` to `FileStoreOptions`.
     */
    static validate(config) {
        const result = configSchema.safeParse(config);
        if (!result.success) {
            throw new errors.IncorrectUsageError({
                message: [...new Set(result.error.issues.map(issue => issue.message))].join('; ')
            });
        }
    }
    constructor(config) {
        super();
        FileStore.validate(config);
        this.basePath = config.basePath;
        this.defaultSettingsBasePath = config.defaultSettingsBasePath;
        // `getBackupFilePath` is a test-only injection seam — it never comes from
        // config (nconf holds static values), so it's read from the raw input
        // rather than the validated schema output.
        this.getBackupFilePath = config.getBackupFilePath
            ?? utils_1.getBackupRouteSettingsFilePath;
    }
    async get() {
        const yamlPath = path_1.default.join(this.basePath, YAML_FILENAME);
        const yamlContent = await this.readIfExists(yamlPath);
        if (yamlContent !== null) {
            return (0, route_settings_parser_1.parseRouteSettings)((0, yaml_parser_1.default)(yamlContent), yamlContent);
        }
        const defaultContent = await this.readDefaultSettings();
        return (0, route_settings_parser_1.parseRouteSettings)((0, yaml_parser_1.default)(defaultContent), defaultContent);
    }
    async replace(settings) {
        const targetPath = path_1.default.join(this.basePath, YAML_FILENAME);
        // Back up the current file before the atomic write clobbers it. The
        // content is captured up front so the backup holds exactly what was on
        // disk; a file that isn't there just skips the backup and real read
        // failures surface as typed errors.
        const existing = await this.readIfExists(targetPath);
        if (existing !== null) {
            await this.writeAtomic(this.getBackupFilePath(targetPath), existing);
        }
        // Persist the exact YAML the operator authored — never a re-serialised
        // model — so comments, key order and formatting survive a round-trip.
        await this.writeAtomic(targetPath, settings.yamlSource);
    }
    async readIfExists(filePath) {
        try {
            return await fs_extra_1.default.readFile(filePath, 'utf8');
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return null;
            }
            throw new errors.InternalServerError({
                message: (0, tpl_1.default)(messages.ensureSettings, { path: this.basePath }),
                err: err,
                context: err.path
            });
        }
    }
    async readDefaultSettings() {
        const defaultFilePath = path_1.default.join(this.defaultSettingsBasePath, DEFAULT_SETTINGS_FILENAME);
        try {
            return await fs_extra_1.default.readFile(defaultFilePath, 'utf8');
        }
        catch (err) {
            throw new errors.InternalServerError({
                message: (0, tpl_1.default)(messages.ensureSettings, { path: this.defaultSettingsBasePath }),
                err: err,
                context: err.path
            });
        }
    }
    async writeAtomic(targetPath, content) {
        const tmpPath = `${targetPath}.tmp.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}`;
        try {
            await fs_extra_1.default.ensureDir(path_1.default.dirname(targetPath));
            await fs_extra_1.default.writeFile(tmpPath, content, 'utf-8');
            await fs_extra_1.default.move(tmpPath, targetPath, { overwrite: true });
        }
        catch (err) {
            await fs_extra_1.default.remove(tmpPath).catch(() => { });
            throw new errors.InternalServerError({
                message: (0, tpl_1.default)(messages.ensureSettings, { path: this.basePath }),
                err: err,
                context: err.path
            });
        }
    }
}
exports.default = FileStore;
