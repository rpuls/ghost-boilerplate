"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsBulkUnfeaturedEvent = void 0;
class PostsBulkUnfeaturedEvent {
    data;
    timestamp;
    constructor(data, timestamp) {
        this.data = data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostsBulkUnfeaturedEvent(data, timestamp);
    }
}
exports.PostsBulkUnfeaturedEvent = PostsBulkUnfeaturedEvent;
