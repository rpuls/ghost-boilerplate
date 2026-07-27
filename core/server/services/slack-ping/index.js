"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slack_ping_service_1 = require("./slack-ping-service");
class SlackPingServiceWrapper {
    service;
    init() {
        if (this.service) {
            // Already done
            return;
        }
        // Wire up all the dependencies
        const { blogIcon } = require('../../lib/image');
        const events = require('../../lib/common/events');
        const logging = require('@tryghost/logging');
        const request = require('@tryghost/request');
        const settingsCache = require('../../../shared/settings-cache');
        const urlService = require('../url');
        const urlUtils = require('../../../shared/url-utils').default;
        this.service = new slack_ping_service_1.SlackPingService({
            blogIcon,
            events,
            logging,
            request,
            settingsCache,
            urlService,
            urlUtils
        });
        this.service.subscribeEvents();
    }
}
exports.default = new SlackPingServiceWrapper();
