"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkAddTagsEvent = void 0;
class PostsBulkAddTagsEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkAddTagsEvent(data, timestamp);
    }
}
exports.PostsBulkAddTagsEvent = PostsBulkAddTagsEvent;
