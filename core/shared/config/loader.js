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
exports.loadNconf = loadNconf;
const nconf_1 = __importDefault(require("nconf"));
const node_path_1 = __importDefault(require("node:path"));
const config_url_helpers_1 = require("@tryghost/config-url-helpers");
const localUtils = __importStar(require("./utils"));
const helpers_1 = require("./helpers");
const _debug = require('@tryghost/debug')._base;
const debug = _debug('ghost:config');
function loadNconf(options) {
    debug('config start');
    const env = localUtils.getNodeEnv();
    options = options || {};
    const baseConfigPath = options.baseConfigPath || __dirname;
    const customConfigPath = options.customConfigPath || process.cwd();
    const nconf = new nconf_1.default.Provider();
    // ## Load Config
    // no channel can override the overrides
    nconf.file('overrides', node_path_1.default.join(baseConfigPath, 'overrides.json'));
    // command line arguments take precedence, then environment variables
    nconf.argv();
    nconf.env({ separator: '__', parseValues: true });
    // Now load various config json files
    nconf.file('custom-env', node_path_1.default.join(customConfigPath, 'config.' + env + '.json'));
    if (!env.startsWith('testing')) {
        if (process.env.GHOST_DEV_IS_DOCKER === 'true') {
            nconf.file('docker-env', node_path_1.default.join(baseConfigPath, 'env', 'config.development.docker.json'));
        }
        nconf.file('local-env', node_path_1.default.join(customConfigPath, 'config.local.json'));
        nconf.file('local-env-jsonc', {
            file: node_path_1.default.join(customConfigPath, 'config.local.jsonc'),
            format: localUtils.jsoncFormat
        });
    }
    nconf.file('default-env', node_path_1.default.join(baseConfigPath, 'env', 'config.' + env + '.json'));
    // Finally, we load defaults, if nothing else has a value this will
    nconf.file('defaults', node_path_1.default.join(baseConfigPath, 'defaults.json'));
    // ## Config Methods
    // Expose dynamic utility methods
    (0, config_url_helpers_1.bindAll)(nconf);
    (0, helpers_1.bindAll)(nconf);
    // ## Sanitization
    // transform all relative paths to absolute paths
    localUtils.makePathsAbsolute(nconf, nconf.get('paths'), 'paths');
    // transform sqlite filename path for Ghost-CLI
    localUtils.sanitizeDatabaseProperties(nconf);
    // Check if the URL in config has a protocol
    localUtils.checkUrlProtocol(nconf.get('url'));
    // Ensure that the content path exists
    localUtils.doesContentPathExist(nconf.get('paths:contentPath'));
    // ## Other Stuff!
    // Manually set values
    nconf.set('env', env);
    // Wrap this in a check, because else nconf.get() is executed unnecessarily
    // To output this, use DEBUG=ghost:*,ghost-config
    if (_debug.enabled('ghost-config')) {
        debug(nconf.get());
    }
    debug('config end');
    return nconf;
}
