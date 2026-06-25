"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftReminderScheduler = void 0;
const logging_1 = __importDefault(require("@tryghost/logging"));
const constants_1 = require("./constants");
// Same-domain (scheduling) primitives, used unconditionally.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const urlUtils = require('../../../shared/url-utils');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getSignedAdminToken } = require('../../adapters/scheduling/utils');
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const GIFT_REMINDER_LEAD_MS = constants_1.GIFT_REMINDER_LEAD_DAYS * MS_PER_DAY;
class GiftReminderScheduler {
    #apiUrl;
    #adapter;
    #internalKeys;
    #findUnsentReminders;
    constructor({ apiUrl, adapter, internalKeys, findUnsentReminders }) {
        this.#apiUrl = apiUrl;
        this.#adapter = adapter;
        this.#internalKeys = internalKeys;
        this.#findUnsentReminders = findUnsentReminders;
        this.#adapter.register(this);
    }
    /**
     * Queue a single reminder callback for a freshly-redeemed gift. The
     * callback fires at consumesAt - GIFT_REMINDER_LEAD_DAYS. Already-due
     * reminders are skipped — the daily cron picks them up.
     */
    async scheduleFor(gift) {
        if (!gift.consumesAt) {
            return;
        }
        const time = gift.consumesAt.getTime() - GIFT_REMINDER_LEAD_MS;
        if (time <= Date.now()) {
            return;
        }
        try {
            const key = await this.#internalKeys.get('ghost-scheduler');
            this.#adapter.schedule(this.#buildJob(time, key));
        }
        catch (err) {
            logging_1.default.error({
                event: { name: 'gift_reminder_scheduler.schedule.failed' },
                err,
                giftToken: gift.token
            }, 'Failed to schedule gift reminder');
        }
    }
    /**
     * Re-issue every queued reminder under the current scheduler key. Pass
     * the pre-rotation secret as `previousKey` so each adapter-queued URL
     * can be reconstructed for unschedule before resigning with the new
     * key. Reminders whose fire time has already passed are skipped — the
     * daily cron picks them up.
     */
    async rescheduleAll({ previousKey } = {}) {
        const currentKey = await this.#internalKeys.get('ghost-scheduler');
        const unscheduleKey = previousKey ?? currentKey;
        const pending = await this.#findUnsentReminders();
        // Same-key rebuild (no previousKey, boot path) → URL signature is
        // identical to the about-to-be-scheduled job. The default adapter
        // implements unschedule via tombstones keyed by URL+time, so a same-URL
        // unschedule poisons the scheduled job. Bootstrap mode skips the
        // tombstone write. Rotation (previousKey provided) → URLs differ, so
        // the tombstone correctly targets the old queued entry.
        const bootstrap = !previousKey;
        for (const gift of pending) {
            if (!gift.consumesAt) {
                continue;
            }
            const time = gift.consumesAt.getTime() - GIFT_REMINDER_LEAD_MS;
            if (time <= Date.now()) {
                continue;
            }
            this.#adapter.unschedule(this.#buildJob(time, unscheduleKey), { bootstrap });
            this.#adapter.schedule(this.#buildJob(time, currentKey));
        }
    }
    #buildJob(time, key) {
        const signedAdminToken = getSignedAdminToken({
            publishedAt: new Date(time).toISOString(),
            apiUrl: this.#apiUrl,
            key
        });
        const url = new URL(urlUtils.urlJoin(this.#apiUrl, 'gifts', 'flush_reminders'));
        url.searchParams.set('token', signedAdminToken);
        return { time, url: url.toString(), extra: { httpMethod: 'PUT' } };
    }
}
exports.GiftReminderScheduler = GiftReminderScheduler;
