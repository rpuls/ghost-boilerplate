"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftEmailRenderer = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
const handlebars_1 = __importDefault(require("handlebars"));
const gift_purchase_confirmation_1 = require("./email-templates/gift-purchase-confirmation");
class GiftEmailRenderer {
    handlebars;
    purchaseConfirmationTemplate = null;
    constructor() {
        this.handlebars = handlebars_1.default.create();
    }
    async renderPurchaseConfirmation(data) {
        if (!this.purchaseConfirmationTemplate) {
            const source = await node_fs_1.promises.readFile(node_path_1.default.join(__dirname, './email-templates/gift-purchase-confirmation.hbs'), 'utf8');
            this.purchaseConfirmationTemplate = this.handlebars.compile(source);
        }
        return {
            html: this.purchaseConfirmationTemplate(data),
            text: (0, gift_purchase_confirmation_1.renderText)(data)
        };
    }
}
exports.GiftEmailRenderer = GiftEmailRenderer;
