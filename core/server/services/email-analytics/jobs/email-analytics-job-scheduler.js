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
exports.EmailAnalyticsJobScheduler = void 0;
const path = __importStar(require("node:path"));
const moment_1 = __importDefault(require("moment"));
function randomFiveMinuteCron() {
    // Use a random seconds value to avoid spikes to external APIs on the minute.
    const seconds = Math.floor(Math.random() * 60); // 0-59
    // Run every 5 minutes, on 1,6,11..., 2,7,12..., 3,8,13..., etc.
    const minutes = Math.floor(Math.random() * 5); // 0-4
    return `${seconds} ${minutes}/5 * * * *`;
}
class EmailAnalyticsJobScheduler {
    #hasScheduledNewslettersJob = false;
    #hasScheduledAutomationsJob = false;
    #models;
    #config;
    #jobManager;
    constructor({ models, config, jobManager }) {
        this.#models = models;
        this.#config = config;
        this.#jobManager = jobManager;
    }
    #isConfigured() {
        return Boolean(this.#config.get('emailAnalytics:enabled') &&
            this.#config.get('backgroundJobs:emailAnalytics'));
    }
    ;
    async scheduleRecurringNewslettersJob(skipNewsletterEmailCheck = false) {
        if (this.#hasScheduledNewslettersJob) {
            return;
        }
        if (!this.#isConfigured()) {
            return;
        }
        // Don't register email analytics job if we have no emails,
        // processor usage from many sites spinning up threads can be high.
        // Mega service will re-run this scheduling task when an email is sent
        const emailCount = skipNewsletterEmailCheck ? 1 : Number(await this.#models.Email
            .where('created_at', '>', moment_1.default.utc().subtract(30, 'days').toDate())
            .where('status', '<>', 'failed')
            .count());
        if (emailCount > 0 && !this.#hasScheduledNewslettersJob) {
            this.#jobManager.addJob({
                at: randomFiveMinuteCron(),
                job: path.resolve(__dirname, 'fetch-latest/index.js'),
                name: 'email-analytics-fetch-latest'
            });
            this.#hasScheduledNewslettersJob = true;
        }
    }
    async scheduleRecurringAutomationsJob(skipAutomationEmailCheck = false) {
        if (this.#hasScheduledAutomationsJob) {
            return;
        }
        if (!this.#isConfigured()) {
            return;
        }
        const hasAutomatedEmailRecipient = (skipAutomationEmailCheck ||
            Boolean(await this.#models.AutomatedEmailRecipient
                .query()
                .where('created_at', '>', moment_1.default.utc().subtract(30, 'days').toDate())
                .whereNotNull('mailgun_message_id')
                .first('id')));
        if (!hasAutomatedEmailRecipient || this.#hasScheduledAutomationsJob) {
            return;
        }
        this.#jobManager.addJob({
            at: randomFiveMinuteCron(),
            job: path.resolve(__dirname, 'automation-fetch-latest/index.js'),
            name: 'email-analytics-automation-fetch-latest'
        });
        this.#hasScheduledAutomationsJob = true;
    }
}
exports.EmailAnalyticsJobScheduler = EmailAnalyticsJobScheduler;
