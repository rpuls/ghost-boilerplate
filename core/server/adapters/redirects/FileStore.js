"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const RedirectsStoreBase_1 = __importDefault(require("./RedirectsStoreBase"));
const redirect_config_parser_1 = require("../../services/custom-redirects/redirect-config-parser");
const utils_1 = require("../../services/custom-redirects/utils");
const YAML_FILENAME = 'redirects.yaml';
const JSON_FILENAME = 'redirects.json';
/**
 * Reads existing `.yaml` and `.json` configs (backward-compatible with
 * pre-refactor self-hosted installs) and always writes new configs as
 * `.json`. The previous canonical file becomes a timestamped backup on
 * every successive `replaceAll`.
 */
class FileStore extends RedirectsStoreBase_1.default {
    basePath;
    getBackupFilePath;
    constructor({ basePath, getBackupFilePath = utils_1.getBackupRedirectsFilePath }) {
        super();
        this.basePath = basePath;
        this.getBackupFilePath = getBackupFilePath;
    }
    async getAll() {
        const existingPath = await this._findExistingFile();
        if (!existingPath) {
            return [];
        }
        const content = await fs_extra_1.default.readFile(existingPath, 'utf-8');
        return path_1.default.extname(existingPath) === '.yaml'
            ? (0, redirect_config_parser_1.parseYaml)(content)
            : (0, redirect_config_parser_1.parseJson)(content);
    }
    async replaceAll(redirects) {
        const existingPath = await this._findExistingFile();
        const targetPath = path_1.default.join(this.basePath, JSON_FILENAME);
        // The ordering here keeps the canonical path readable across
        // every failure mode. See the inline notes — the obvious
        // backup-first, write-second sequence would wipe redirects on
        // a failed write.
        // Same path: backup must happen before the atomic write because
        // the rename would otherwise clobber the previous content with
        // no copy elsewhere.
        if (existingPath && existingPath === targetPath) {
            const backupPath = this.getBackupFilePath(existingPath);
            const content = await fs_extra_1.default.readFile(existingPath, 'utf-8');
            await this._writeAtomic(backupPath, content);
        }
        await this._writeAtomic(targetPath, JSON.stringify(redirects));
        // Different path (yaml → json): backup must happen AFTER the
        // write so a failed write doesn't leave nothing at any canonical
        // path. If the backup itself fails, the legacy yaml takes
        // precedence over the new json on next read — roll the new json
        // back so the operator sees a consistent old state.
        if (existingPath && existingPath !== targetPath) {
            try {
                await this._backup(existingPath);
            }
            catch (err) {
                await fs_extra_1.default.remove(targetPath).catch(() => { });
                throw err;
            }
        }
    }
    async _findExistingFile() {
        const yamlPath = path_1.default.join(this.basePath, YAML_FILENAME);
        if (await fs_extra_1.default.pathExists(yamlPath)) {
            return yamlPath;
        }
        const jsonPath = path_1.default.join(this.basePath, JSON_FILENAME);
        if (await fs_extra_1.default.pathExists(jsonPath)) {
            return jsonPath;
        }
        return null;
    }
    async _backup(existingPath) {
        const backupPath = this.getBackupFilePath(existingPath);
        // Per-second timestamp granularity → same-second writes collide.
        // Overwrite rather than fail.
        await fs_extra_1.default.move(existingPath, backupPath, { overwrite: true });
    }
    // `fs-extra.move({overwrite: true})` handles the Windows EPERM/EEXIST
    // path that bare `fs.rename` doesn't.
    async _writeAtomic(targetPath, content) {
        const tmpPath = `${targetPath}.tmp.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}`;
        await fs_extra_1.default.writeFile(tmpPath, content, 'utf-8');
        try {
            await fs_extra_1.default.move(tmpPath, targetPath, { overwrite: true });
        }
        catch (err) {
            await fs_extra_1.default.remove(tmpPath).catch(() => { });
            throw err;
        }
    }
}
exports.default = FileStore;
