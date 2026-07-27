"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackupRouteSettingsFilePath = void 0;
const path_1 = __importDefault(require("path"));
const date_fns_1 = require("date-fns");
const getBackupRouteSettingsFilePath = (filePath) => {
    const { dir, name, ext } = path_1.default.parse(filePath);
    return path_1.default.join(dir, `${name}-${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd-HH-mm-ss')}${ext}`);
};
exports.getBackupRouteSettingsFilePath = getBackupRouteSettingsFilePath;
