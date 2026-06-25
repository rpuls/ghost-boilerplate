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
const gift_reminder_1 = require("./email-templates/gift-reminder");
class GiftEmailRenderer {
    handlebars;
    t;
    purchaseConfirmationTemplate = null;
    reminderTemplate = null;
    constructor({ t }) {
        this.t = t;
        this.handlebars = handlebars_1.default.create();
        this.registerTemplateHelpers();
    }
    async renderPurchaseConfirmation(data) {
        if (!this.purchaseConfirmationTemplate) {
            const source = await node_fs_1.promises.readFile(node_path_1.default.join(__dirname, './email-templates/gift-purchase-confirmation.hbs'), 'utf8');
            this.purchaseConfirmationTemplate = this.handlebars.compile(source);
        }
        return {
            html: this.purchaseConfirmationTemplate(data),
            text: (0, gift_purchase_confirmation_1.renderText)(data, this.t)
        };
    }
    async renderReminder(data) {
        if (!this.reminderTemplate) {
            const source = await node_fs_1.promises.readFile(node_path_1.default.join(__dirname, './email-templates/gift-reminder.hbs'), 'utf8');
            this.reminderTemplate = this.handlebars.compile(source);
        }
        return {
            html: this.reminderTemplate(data),
            text: (0, gift_reminder_1.renderText)(data, this.t)
        };
    }
    registerTemplateHelpers() {
        this.handlebars.registerHelper('t', (key, options) => {
            const hash = options?.hash || {};
            const escapedHash = Object.entries(hash).reduce((acc, [name, value]) => {
                acc[name] = this.htmlSafeInterpolationValue(value);
                return acc;
            }, {});
            return new handlebars_1.default.SafeString(this.t(key, {
                ...escapedHash,
                interpolation: { escapeValue: false }
            }));
        });
        this.handlebars.registerHelper('strong', (value) => {
            return new handlebars_1.default.SafeString(`<strong>${this.escape(value)}</strong>`);
        });
        this.handlebars.registerHelper('linkTag', (href, text, options) => {
            const className = options?.hash?.class ? ` class="${this.escape(options.hash.class)}"` : '';
            const style = options?.hash?.style ? ` style="${this.escape(options.hash.style)}"` : '';
            return new handlebars_1.default.SafeString(`<a${className} href="${this.escape(href)}"${style}>${this.escape(text)}</a>`);
        });
        this.handlebars.registerHelper('mailto', (email) => `mailto:${email}`);
    }
    htmlSafeInterpolationValue(value) {
        if (this.isSafeString(value)) {
            return value.toHTML();
        }
        return this.escape(value);
    }
    isSafeString(value) {
        return Boolean(value && typeof value === 'object' && typeof value.toHTML === 'function');
    }
    escape(value) {
        if (this.isSafeString(value)) {
            return value.toHTML();
        }
        return handlebars_1.default.Utils.escapeExpression(String(value ?? ''));
    }
}
exports.GiftEmailRenderer = GiftEmailRenderer;
