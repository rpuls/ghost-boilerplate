"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexnow_ping_service_1 = require("./indexnow-ping-service");
class IndexNowPingServiceWrapper {
    service;
    init() {
        if (this.service) {
            // Already done
            return;
        }
        // Wire up all the dependencies
        const settingsCache = require('../../../shared/settings-cache');
        const config = require('../../../shared/config');
        const labs = require('../../../shared/labs');
        const urlService = require('../url');
        const urlUtils = require('../../../shared/url-utils').default;
        const request = require('@tryghost/request');
        const logging = require('@tryghost/logging');
        const events = require('../../lib/common/events');
        this.service = new indexnow_ping_service_1.IndexNowPingService({
            settingsCache,
            config,
            labs,
            urlService,
            urlUtils,
            request,
            logging,
            events
        });
        this.service.subscribeEvents();
    }
}
exports.default = new IndexNowPingServiceWrapper();
