"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkUnscheduledEvent = void 0;
class PostsBulkUnscheduledEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkUnscheduledEvent(data, timestamp);
    }
}
exports.PostsBulkUnscheduledEvent = PostsBulkUnscheduledEvent;
