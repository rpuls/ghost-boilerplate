"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.automations = exports.newsletters = void 0;
// @ts-expect-error This module lacks type definitions.
const email_analytics_service_wrapper_1 = __importDefault(require("./email-analytics-service-wrapper"));
const config_1 = __importDefault(require("../../../shared/config"));
// @ts-expect-error This module lacks type definitions.
const newsletter_email_analytics_batch_processor_1 = require("./newsletter-email-analytics-batch-processor");
// @ts-expect-error This module lacks type definitions.
const newsletter_email_event_storage_1 = __importDefault(require("../email-service/newsletter-email-event-storage"));
// @ts-expect-error This module lacks type definitions.
const email_event_processor_1 = __importDefault(require("../email-service/email-event-processor"));
// @ts-expect-error This module lacks type definitions.
const db_1 = __importDefault(require("../../data/db"));
const members_1 = __importDefault(require("../members"));
// @ts-expect-error This module lacks type definitions.
const email_suppression_list_1 = __importDefault(require("../email-suppression-list"));
// @ts-expect-error This module lacks type definitions.
const models_1 = require("../../models");
// @ts-expect-error This module lacks type definitions.
const domain_events_1 = __importDefault(require("@tryghost/domain-events"));
// @ts-expect-error This module lacks type definitions.
const prometheus_client_1 = __importDefault(require("../../../shared/prometheus-client"));
// @ts-expect-error This module lacks type definitions.
const queries_1 = __importDefault(require("./lib/queries"));
const start_email_analytics_job_event_1 = require("./events/start-email-analytics-job-event");
const start_automation_email_analytics_job_event_1 = require("./events/start-automation-email-analytics-job-event");
const constants_1 = require("../member-welcome-emails/constants");
const automationsApi = __importStar(require("../automations/automations-api"));
const automation_email_analytics_batch_processor_1 = require("./automation-email-analytics-batch-processor");
exports.newsletters = new email_analytics_service_wrapper_1.default({
    logName: 'newsletters'
});
exports.automations = new email_analytics_service_wrapper_1.default({
    logName: 'automations',
});
const init = () => {
    const newsletterEmailEventProcessor = new email_event_processor_1.default({
        domainEvents: domain_events_1.default,
        db: db_1.default,
        eventStorage: new newsletter_email_event_storage_1.default({
            db: db_1.default,
            membersRepository: members_1.default.api.members,
            models: {
                Email: models_1.Email,
                EmailRecipientFailure: models_1.EmailRecipientFailure,
                EmailSpamComplaintEvent: models_1.EmailSpamComplaintEvent
            },
            emailSuppressionList: email_suppression_list_1.default,
            prometheusClient: prometheus_client_1.default
        }),
        prometheusClient: prometheus_client_1.default
    });
    const newsletterMailgunTags = ['bulk-email'];
    if (config_1.default.get('bulkEmail:mailgun:tag')) {
        newsletterMailgunTags.push(config_1.default.get('bulkEmail:mailgun:tag'));
    }
    exports.newsletters.init({
        event: start_email_analytics_job_event_1.StartEmailAnalyticsJobEvent,
        mailgunTags: newsletterMailgunTags,
        jobNames: {
            latestNonOpened: 'email-analytics-latest-others',
            missing: 'email-analytics-missing',
            latestOpened: 'email-analytics-latest-opened',
            scheduled: 'email-analytics-scheduled'
        },
        cursorSeed: {
            tableName: 'email_recipients',
            eventColumns: {
                delivered: 'delivered_at',
                opened: 'opened_at',
                failed: 'failed_at'
            }
        },
        prometheusClient: prometheus_client_1.default,
        createEventProcessor: () => (new newsletter_email_analytics_batch_processor_1.NewsletterEmailAnalyticsBatchProcessor({
            config: config_1.default,
            emailEventProcessor: newsletterEmailEventProcessor,
            prometheusClient: prometheus_client_1.default,
            queries: queries_1.default
        }))
    });
    exports.automations.init({
        event: start_automation_email_analytics_job_event_1.StartAutomationEmailAnalyticsJobEvent,
        mailgunTags: [constants_1.AUTOMATION_EMAIL_TAG],
        jobNames: {
            latestNonOpened: 'email-analytics-automation-latest-others',
            missing: 'email-analytics-automation-missing',
            latestOpened: 'email-analytics-automation-latest-opened',
            scheduled: 'email-analytics-automation-scheduled'
        },
        cursorSeed: {
            tableName: 'automated_email_recipients',
            eventColumns: {
                delivered: 'delivered_at',
                opened: 'opened_at'
            }
        },
        createEventProcessor: () => (new automation_email_analytics_batch_processor_1.AutomationEmailAnalyticsBatchProcessor({
            automationsApi
        }))
    });
};
exports.init = init;
