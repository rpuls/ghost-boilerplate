"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkDestroyedEvent = void 0;
class PostsBulkDestroyedEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkDestroyedEvent(data, timestamp);
    }
}
exports.PostsBulkDestroyedEvent = PostsBulkDestroyedEvent;
