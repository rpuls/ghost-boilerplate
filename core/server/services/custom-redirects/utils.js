"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackupRedirectsFilePath = void 0;
const path_1 = __importDefault(require("path"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const getBackupRedirectsFilePath = (filePath) => {
    const { dir, name, ext } = path_1.default.parse(filePath);
    return path_1.default.join(dir, `${name}-${(0, moment_timezone_1.default)().format('YYYY-MM-DD-HH-mm-ss')}${ext}`);
};
exports.getBackupRedirectsFilePath = getBackupRedirectsFilePath;
