"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = createService;
exports.init = init;
const explore_ping_service_1 = require("./explore-ping-service");
const config = require('../../../shared/config');
const labs = require('../../../shared/labs');
const logging = require('@tryghost/logging');
const ghostVersion = require('@tryghost/version');
const request = require('@tryghost/request');
const settingsCache = require('../../../shared/settings-cache');
const posts = require('../posts/posts-service-instance');
const members = require('../members');
const statsService = require('../stats');
// Export the creation function for testing
function createService() {
    return new explore_ping_service_1.ExplorePingService({
        settingsCache,
        config,
        labs,
        logging,
        ghostVersion,
        request,
        posts: posts(),
        members,
        statsService
    });
}
async function init() {
    // The explore ping is a background "phone home" request. It should not run
    // in the test environment (cf. the update-check service, which gates on the
    // same environments), where there is no explore URL configured.
    if (!config.isProductionOrDevelopment()) {
        return;
    }
    const explorePingService = createService();
    // The final intention is to have this run on a schedule
    // For the initial version, we'll just ping when the server starts
    // Without waiting for the response
    explorePingService.ping();
}
