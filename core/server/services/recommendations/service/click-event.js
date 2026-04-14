"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
class ClickEvent {
    id;
    recommendationId;
    memberId;
    createdAt;
    get deleted() {
        return false;
    }
    constructor(data) {
        this.id = data.id;
        this.recommendationId = data.recommendationId;
        this.memberId = data.memberId;
        this.createdAt = data.createdAt;
    }
    static create(data) {
        const id = data.id ?? (0, bson_objectid_1.default)().toString();
        const d = {
            id,
            recommendationId: data.recommendationId,
            memberId: data.memberId ?? null,
            createdAt: data.createdAt ?? new Date()
        };
        return new ClickEvent(d);
    }
}
exports.ClickEvent = ClickEvent;
