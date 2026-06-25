"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEmailService = void 0;
const sanitize_email_html_1 = require("./sanitize-email-html");
/**
 * Renders a notification email in the shared shell and sends it to each
 * recipient. Recipient resolution is a separate concern handled by the caller.
 */
class NotificationEmailService {
    mailer;
    generateEmailContent;
    getSiteUrl;
    constructor(deps) {
        this.mailer = deps.mailer;
        this.generateEmailContent = deps.generateEmailContent;
        this.getSiteUrl = deps.getSiteUrl;
    }
    async send({ to, subject, content }) {
        if (!to.length) {
            return;
        }
        const message = (0, sanitize_email_html_1.sanitizeEmailHtml)(content);
        const siteUrl = this.getSiteUrl();
        for (const recipient of to) {
            const { html, text } = await this.generateEmailContent({
                template: 'notification',
                data: { message, siteUrl, recipientEmail: recipient }
            });
            await this.mailer.send({
                to: recipient,
                subject,
                html,
                ...(text ? { text } : {})
            });
        }
    }
}
exports.NotificationEmailService = NotificationEmailService;
