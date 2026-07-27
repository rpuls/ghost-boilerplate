"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeletedEvent = void 0;
class PostDeletedEvent {
    id;
    data;
    timestamp;
    constructor(data, timestamp) {
        this.id = data.id;
        this.data = data.data;
        this.timestamp = timestamp;
    }
    static create(data, timestamp = new Date()) {
        return new PostDeletedEvent(data, timestamp);
    }
}
exports.PostDeletedEvent = PostDeletedEvent;
