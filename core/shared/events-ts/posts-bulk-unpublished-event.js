"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkUnpublishedEvent = void 0;
class PostsBulkUnpublishedEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkUnpublishedEvent(data, timestamp);
    }
}
exports.PostsBulkUnpublishedEvent = PostsBulkUnpublishedEvent;
