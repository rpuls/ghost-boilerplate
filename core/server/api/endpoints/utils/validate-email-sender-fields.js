"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailSenderFields = validateEmailSenderFields;
const errors_1 = __importDefault(require("@tryghost/errors"));
const EMAIL_VALIDATIONS = [
    {
        field: 'sender_email',
        addressType: 'from'
    },
    {
        field: 'sender_reply_to',
        addressType: 'replyTo'
    }
];
function validateEmailSenderFields(emailAddressService, data) {
    for (const { field, addressType } of EMAIL_VALIDATIONS) {
        const value = data[field];
        if (!value) {
            continue;
        }
        const validated = emailAddressService.validate(value, addressType);
        if (!validated.allowed) {
            throw new errors_1.default.ValidationError({
                message: `You cannot set ${field} to ${value}`
            });
        }
        if (validated.verificationEmailRequired) {
            throw new errors_1.default.ValidationError({
                message: `You cannot set ${field} to ${value} without verification`
            });
        }
    }
}
