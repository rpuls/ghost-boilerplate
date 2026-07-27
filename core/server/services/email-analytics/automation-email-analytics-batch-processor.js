"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationEmailAnalyticsBatchProcessor = void 0;
const mailgun_message_id_1 = require("../automations/mailgun-message-id");
const event_processing_result_1 = require("./event-processing-result");
const getMailgunMessageIds = (events) => {
    const result = new Set();
    for (const { providerId } of events) {
        result.add((0, mailgun_message_id_1.normalizeMailgunMessageId)(providerId));
    }
    return result;
};
const getAutomatedEmailRecipients = async (automationsApi, mailgunMessageIds) => (mailgunMessageIds.size
    ? await automationsApi.getAutomatedEmailRecipientsByMailgunIds(Array.from(mailgunMessageIds))
    : []);
const getAutomatedEmailRecipientsByMessageId = (automatedEmailRecipients) => {
    const result = new Map();
    for (const automatedEmailRecipient of automatedEmailRecipients) {
        result.set(automatedEmailRecipient.mailgun_message_id, automatedEmailRecipient);
    }
    return result;
};
const trackEarliest = (map, recipient, field, timestamp) => {
    const events = map.get(recipient.id) ?? {
        automationActionRevisionId: recipient.automation_action_revision_id
    };
    const existing = events[field];
    if (!existing || timestamp < existing) {
        events[field] = timestamp;
    }
    map.set(recipient.id, events);
};
class AutomationEmailAnalyticsBatchProcessor {
    #automationsApi;
    constructor({ automationsApi }) {
        this.#automationsApi = automationsApi;
    }
    async processBatch(events, result, fetchData) {
        const mailgunMessageIds = getMailgunMessageIds(events);
        const automatedEmailRecipients = await getAutomatedEmailRecipients(this.#automationsApi, mailgunMessageIds);
        const automatedEmailRecipientsByMessageId = getAutomatedEmailRecipientsByMessageId(automatedEmailRecipients);
        const eventsByAutomatedEmailRecipientId = new Map();
        for (const event of events) {
            if (!fetchData.lastEventTimestamp || event.timestamp > fetchData.lastEventTimestamp) {
                fetchData.lastEventTimestamp = event.timestamp;
            }
            let eventResult;
            const getRecipient = () => {
                const mailgunMessageId = (0, mailgun_message_id_1.normalizeMailgunMessageId)(event.providerId);
                return automatedEmailRecipientsByMessageId.get(mailgunMessageId);
            };
            switch (event.type) {
                case 'delivered': {
                    const recipient = getRecipient();
                    if (recipient) {
                        trackEarliest(eventsByAutomatedEmailRecipientId, recipient, 'deliveredAt', event.timestamp);
                        eventResult = new event_processing_result_1.EventProcessingResult({ delivered: 1 });
                    }
                    else {
                        eventResult = new event_processing_result_1.EventProcessingResult({ unprocessable: 1 });
                    }
                    break;
                }
                case 'opened': {
                    const recipient = getRecipient();
                    if (recipient) {
                        trackEarliest(eventsByAutomatedEmailRecipientId, recipient, 'openedAt', event.timestamp);
                        eventResult = new event_processing_result_1.EventProcessingResult({ opened: 1 });
                    }
                    else {
                        eventResult = new event_processing_result_1.EventProcessingResult({ unprocessable: 1 });
                    }
                    break;
                }
                default:
                    eventResult = new event_processing_result_1.EventProcessingResult({ unhandled: 1 });
                    break;
            }
            result.merge(eventResult);
        }
        await this.#automationsApi.trackEmailDeliveredAndOpened(eventsByAutomatedEmailRecipientId);
    }
}
exports.AutomationEmailAnalyticsBatchProcessor = AutomationEmailAnalyticsBatchProcessor;
