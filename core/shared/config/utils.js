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
exports.jsoncFormat = void 0;
exports.makePathsAbsolute = makePathsAbsolute;
exports.doesContentPathExist = doesContentPathExist;
exports.checkUrlProtocol = checkUrlProtocol;
exports.sanitizeDatabaseProperties = sanitizeDatabaseProperties;
exports.getNodeEnv = getNodeEnv;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const jsonc = __importStar(require("jsonc-parser"));
/**
 * transform all relative paths to absolute paths
 * @TODO: re-write this function a little bit so we don't have to add the parent path - that is hard to understand
 *
 * Path must be string.
 * Path must match minimum one / or \
 * Path can be a "." to re-present current folder
 */
function makePathsAbsolute(nconf, obj, parent) {
    Object.entries(obj).forEach(([pathsKey, configValue]) => {
        if (configValue && typeof configValue === 'object') {
            makePathsAbsolute(nconf, configValue, parent + ':' + pathsKey);
        }
        else if (typeof configValue === 'string' &&
            (configValue.match(/\/+|\\+/) || configValue === '.') &&
            !node_path_1.default.isAbsolute(configValue)) {
            nconf.set(parent + ':' + pathsKey, node_path_1.default.normalize(node_path_1.default.join(__dirname, '../../..', configValue)));
        }
    });
}
function doesContentPathExist(contentPath) {
    if (!node_fs_1.default.existsSync(contentPath)) {
        // new Error is allowed here, as we do not want config to depend on @tryghost/error
        // @TODO: revisit this decision when @tryghost/error is no longer dependent on all of ghost-ignition
        // eslint-disable-next-line ghost/ghost-custom/no-native-error
        throw new Error('Your content path does not exist! Please double check `paths.contentPath` in your custom config file e.g. config.production.json.');
    }
}
/**
* Check if the URL in config has a protocol and sanitise it if not including a warning that it should be changed
*/
function checkUrlProtocol(url) {
    if (!url.match(/^https?:\/\//i)) {
        // new Error is allowed here, as we do not want config to depend on @tryghost/error
        // @TODO: revisit this decision when @tryghost/error is no longer dependent on all of ghost-ignition
        // eslint-disable-next-line ghost/ghost-custom/no-native-error
        throw new Error('URL in config must be provided with protocol, eg. "http://my-ghost-blog.com"');
    }
}
/**
 * nconf merges all database keys together and this can be confusing
 * e.g. production default database is sqlite, but you override the configuration with mysql
 *
 * this.clear('key') does not work
 * https://github.com/indexzero/nconf/issues/235#issuecomment-257606507
 */
function sanitizeDatabaseProperties(nconf) {
    if (nconf.get('database:client') === 'mysql') {
        nconf.set('database:client', 'mysql2');
    }
    if (nconf.get('database:client') === 'sqlite3') {
        nconf.set('database:client', 'better-sqlite3');
    }
    const database = nconf.get('database');
    const client = nconf.get('database:client');
    if (client === 'mysql2') {
        delete database.connection.filename;
    }
    else {
        delete database.connection.host;
        delete database.connection.user;
        delete database.connection.password;
        delete database.connection.database;
    }
    nconf.set('database', database);
    if (client === 'better-sqlite3') {
        makePathsAbsolute(nconf, nconf.get('database:connection'), 'database:connection');
    }
}
function getNodeEnv() {
    return process.env.NODE_ENV || 'development';
}
const jsoncFormat = {
    parse: function (text) {
        return jsonc.parse(text);
    },
    stringify: function (obj, replacer, spacing) {
        return JSON.stringify(obj, replacer, spacing);
    }
};
exports.jsoncFormat = jsoncFormat;
