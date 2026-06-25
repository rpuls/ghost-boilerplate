"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.MEMBER_WELCOME_EMAIL_ELIGIBLE_STATUSES = exports.MEMBER_WELCOME_EMAIL_SLUGS = exports.MEMBER_WELCOME_EMAIL_TAG = exports.MEMBER_WELCOME_EMAIL_LOG_KEY = exports.DEFAULT_EMAIL_DESIGN_SETTING_SLUG = void 0;
const DEFAULT_EMAIL_DESIGN_SETTING_SLUG = 'default-automated-email';
exports.DEFAULT_EMAIL_DESIGN_SETTING_SLUG = DEFAULT_EMAIL_DESIGN_SETTING_SLUG;
const MEMBER_WELCOME_EMAIL_LOG_KEY = '[MEMBER-WELCOME-EMAIL]';
exports.MEMBER_WELCOME_EMAIL_LOG_KEY = MEMBER_WELCOME_EMAIL_LOG_KEY;
const MEMBER_WELCOME_EMAIL_SLUGS = {
    free: 'member-welcome-email-free',
    paid: 'member-welcome-email-paid'
};
exports.MEMBER_WELCOME_EMAIL_SLUGS = MEMBER_WELCOME_EMAIL_SLUGS;
const MEMBER_WELCOME_EMAIL_ELIGIBLE_STATUSES = {
    free: ['free'],
    paid: ['paid', 'gift']
};
exports.MEMBER_WELCOME_EMAIL_ELIGIBLE_STATUSES = MEMBER_WELCOME_EMAIL_ELIGIBLE_STATUSES;
const MEMBER_WELCOME_EMAIL_TAG = 'member-welcome-email';
exports.MEMBER_WELCOME_EMAIL_TAG = MEMBER_WELCOME_EMAIL_TAG;
const MESSAGES = {
    NO_MEMBER_WELCOME_EMAIL: 'No member welcome email found',
    INVALID_LEXICAL_STRUCTURE: 'Member welcome email has invalid content structure',
    MISSING_EMAIL_CONTENT: 'Email content is required to send a test email',
    MISSING_EMAIL_SUBJECT: 'Email subject is required to send a test email',
    MISSING_RECIPIENT_EMAIL: 'Cannot send welcome email: no recipient email address available',
    memberWelcomeEmailInactive: (memberStatus) => `Member welcome email for "${memberStatus}" members is inactive`
};
exports.MESSAGES = MESSAGES;
