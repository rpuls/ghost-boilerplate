"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartEmailAnalyticsJobEvent = void 0;
/**
 * This is an event that is used to circumvent the job manager that currently isn't able to run scheduled jobs on the main thread (not offloaded).
 * We simply emit this event in the job manager and listen for it on the main thread.
 */
class StartEmailAnalyticsJobEvent {
    timestamp;
    constructor(timestamp) {
        this.timestamp = timestamp;
    }
    static create(timestamp = new Date()) {
        return new StartEmailAnalyticsJobEvent(timestamp);
    }
}
exports.StartEmailAnalyticsJobEvent = StartEmailAnalyticsJobEvent;
;
