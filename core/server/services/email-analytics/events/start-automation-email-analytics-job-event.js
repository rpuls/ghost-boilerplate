"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAutomationEmailAnalyticsJobEvent = void 0;
/**
 * This event lets the job manager ask the main thread to start the automation email analytics pipeline.
 */
class StartAutomationEmailAnalyticsJobEvent {
    timestamp;
    constructor(timestamp) {
        this.timestamp = timestamp;
    }
    static create(timestamp = new Date()) {
        return new StartAutomationEmailAnalyticsJobEvent(timestamp);
    }
}
exports.StartAutomationEmailAnalyticsJobEvent = StartAutomationEmailAnalyticsJobEvent;
;
