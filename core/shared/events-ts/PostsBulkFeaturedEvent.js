"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkFeaturedEvent = void 0;
class PostsBulkFeaturedEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkFeaturedEvent(data, timestamp);
    }
}
exports.PostsBulkFeaturedEvent = PostsBulkFeaturedEvent;
