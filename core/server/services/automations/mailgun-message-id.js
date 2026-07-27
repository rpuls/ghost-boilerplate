"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailgunMessageId = exports.normalizeMailgunMessageId = void 0;
const isMailgunSendResult = (value) => {
    return typeof value === 'object' &&
        value !== null &&
        'id' in value &&
        typeof value.id === 'string';
};
const parseMailgunMessageId = (sendResult) => {
    if (!isMailgunSendResult(sendResult)) {
        return undefined;
    }
    return sendResult.id;
};
const normalizeMailgunMessageId = (mailgunMessageId) => {
    return mailgunMessageId.trim().replace(/^<|>$/g, '');
};
exports.normalizeMailgunMessageId = normalizeMailgunMessageId;
const getMailgunMessageId = (sendResult) => {
    const mailgunMessageId = parseMailgunMessageId(sendResult);
    return mailgunMessageId === undefined ? undefined : (0, exports.normalizeMailgunMessageId)(mailgunMessageId);
};
exports.getMailgunMessageId = getMailgunMessageId;
