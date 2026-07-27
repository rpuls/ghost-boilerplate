"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProcessingResult = void 0;
class EventProcessingResult {
    // counts
    delivered = 0;
    opened = 0;
    temporaryFailed = 0;
    permanentFailed = 0;
    unsubscribed = 0;
    complained = 0;
    unhandled = 0;
    unprocessable = 0;
    // processing failures are counted separately in addition to event type counts
    processingFailures = 0;
    // ids seen whilst processing ready for passing to stats aggregator
    emailIds = [];
    memberIds = [];
    constructor(result = {}) {
        this.merge(result);
    }
    reset() {
        this.delivered = 0;
        this.opened = 0;
        this.temporaryFailed = 0;
        this.permanentFailed = 0;
        this.unsubscribed = 0;
        this.complained = 0;
        this.unhandled = 0;
        this.unprocessable = 0;
        this.processingFailures = 0;
        this.emailIds = [];
        this.memberIds = [];
    }
    get totalEvents() {
        return this.delivered
            + this.opened
            + this.temporaryFailed
            + this.permanentFailed
            + this.unsubscribed
            + this.complained
            + this.unhandled
            + this.unprocessable;
    }
    merge(other = {}) {
        this.delivered += other.delivered || 0;
        this.opened += other.opened || 0;
        this.temporaryFailed += other.temporaryFailed || 0;
        this.permanentFailed += other.permanentFailed || 0;
        this.unsubscribed += other.unsubscribed || 0;
        this.complained += other.complained || 0;
        this.unhandled += other.unhandled || 0;
        this.unprocessable += other.unprocessable || 0;
        this.processingFailures += other.processingFailures || 0;
        // TODO: come up with a cleaner way to merge these without churning through Array and Set
        this.emailIds = Array.from(new Set([...this.emailIds, ...(other.emailIds || [])])).filter(Boolean);
        this.memberIds = Array.from(new Set([...this.memberIds, ...(other.memberIds || [])])).filter(Boolean);
    }
}
exports.EventProcessingResult = EventProcessingResult;
