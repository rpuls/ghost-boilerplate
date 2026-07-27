"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkRedirect = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
class LinkRedirect {
    link_id;
    from;
    to;
    edited;
    constructor(data) {
        if (!data.id) {
            this.link_id = new bson_objectid_1.default();
        }
        if (typeof data.id === 'string') {
            this.link_id = bson_objectid_1.default.createFromHexString(data.id);
        }
        this.from = data.from;
        this.to = data.to;
        this.edited = !!data.edited;
    }
}
exports.LinkRedirect = LinkRedirect;
