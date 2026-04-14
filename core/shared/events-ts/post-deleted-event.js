"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDeletedEvent = void 0;
class PostDeletedEvent {
    id;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data;
    timestamp;
    constructor(data, timestamp) {
        this.id = data.id;
        this.data = data.data;
        this.timestamp = timestamp;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static create(data, timestamp = new Date()) {
        return new PostDeletedEvent(data, timestamp);
    }
}
exports.PostDeletedEvent = PostDeletedEvent;
