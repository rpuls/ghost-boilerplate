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
exports.init = init;
exports.stop = stop;
exports.getInstance = getInstance;
/* eslint-disable @typescript-eslint/no-require-imports */
const logging_1 = __importDefault(require("@tryghost/logging"));
const remote_flags_service_1 = require("./remote-flags-service");
const flagOverrides = __importStar(require("../../../shared/labs-flag-overrides"));
// @tryghost/request ships no types; require() avoids an implicit-any under the strict tsconfig.
const request = require('@tryghost/request');
// Every site seeds a site_uuid setting, so it's a universal ramp key.
const settingsCache = require('../../../shared/settings-cache');
// Floor for the poll interval: many instances can share one manifest host, so a
// too-small or units-confused (seconds-as-ms) value is rejected, not honored.
const MIN_POLL_INTERVAL_MS = 60 * 1000;
let instance = null;
/**
 * Start the poller if enabled for this instance. Config-gated and opt-in: inert
 * unless `remoteFlags` is enabled with a `url` (self-hosted/dev leave it unset).
 * The site's UUID is the ramp bucket key; it's absent only in edge cases, where
 * ramps are skipped but full overrides still apply. Polling is fire-and-forget so
 * boot is never blocked on the first fetch.
 *
 * @returns the running service, or null when inert
 */
function init(config) {
    if (instance) {
        return instance;
    }
    const remoteFlags = config.get('remoteFlags') || {};
    if (remoteFlags.enabled !== true || !remoteFlags.url) {
        return null;
    }
    const siteUuid = settingsCache.get('site_uuid');
    let url;
    try {
        // Validate the url once at start (not on every poll); hand the service a ready URL.
        url = new URL(remoteFlags.url);
    }
    catch {
        logging_1.default.warn({
            system: { event: 'remote_flags.invalid_url' }
        }, `Remote feature flags url is not a valid URL, not starting: ${remoteFlags.url}`);
        return null;
    }
    // Optional poll interval (ms): honor a finite value >= the floor, else warn and
    // use the service default.
    let pollInterval;
    const configuredInterval = remoteFlags.pollInterval;
    if (configuredInterval !== undefined && configuredInterval !== null) {
        if (typeof configuredInterval === 'number' && Number.isFinite(configuredInterval) && configuredInterval >= MIN_POLL_INTERVAL_MS) {
            pollInterval = configuredInterval;
        }
        else {
            logging_1.default.warn({
                system: { event: 'remote_flags.invalid_poll_interval' }
            }, `Remote feature flags pollInterval must be a number >= ${MIN_POLL_INTERVAL_MS}ms, using the default: ${configuredInterval}`);
        }
    }
    instance = new remote_flags_service_1.RemoteFlagsService({
        url,
        siteUuid,
        applyOverrides: overrides => flagOverrides.replace(overrides),
        request,
        pollInterval
    });
    // Fire-and-forget: start() never rejects, so this won't block boot or throw unhandled.
    instance.start();
    return instance;
}
/**
 * Stop the poller. Halts polling; intentionally leaves the last-applied overrides
 * in place rather than clearing them.
 */
function stop() {
    if (instance) {
        instance.stop();
        instance = null;
    }
}
function getInstance() {
    return instance;
}
