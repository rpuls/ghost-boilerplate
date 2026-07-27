"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCapturingSchedulingAdapter = void 0;
exports.withErrorCapture = withErrorCapture;
const logging_1 = __importDefault(require("@tryghost/logging"));
// CJS-only module without TS declarations.
// TODO: replace with dependency injection once the sentry module is TS
const sentry = require('../../../shared/sentry');
/**
 * Job URLs carry a signed admin token in their query string which stays valid
 * for hours after the scheduled time, so only the path is safe to report.
 */
function redactToken(url) {
    return url.split('?')[0];
}
function report(err, operation, job) {
    sentry.captureException(err);
    logging_1.default.error({
        event: { name: `scheduler.${operation}.failed` },
        err,
        url: redactToken(job.url),
        time: job.time
    }, `Scheduler failed to ${operation} a job`);
}
/**
 * Decorates a scheduling adapter so that failures from `schedule`/`unschedule`
 * are reported by Ghost rather than by each adapter. Adapters signal failure
 * however the contract permits — throwing, or rejecting the returned promise —
 * and both are handled here.
 *
 * Failures are reported rather than propagated because no caller awaits these:
 * `rescheduleAll` queues one job per scheduled post, and awaiting each would
 * stall boot behind an adapter's rate limiting.
 */
class ErrorCapturingSchedulingAdapter {
    #adapter;
    constructor(adapter) {
        this.#adapter = adapter;
    }
    get rescheduleOnBoot() {
        return this.#adapter.rescheduleOnBoot;
    }
    run() {
        return this.#adapter.run();
    }
    register(rescheduler) {
        this.#adapter.register(rescheduler);
    }
    rescheduleAll(opts) {
        return this.#adapter.rescheduleAll(opts);
    }
    schedule(job) {
        this.#capture(() => this.#adapter.schedule(job), 'schedule', job);
    }
    unschedule(job, opts) {
        this.#capture(() => this.#adapter.unschedule(job, opts), 'unschedule', job);
    }
    #capture(run, operation, job) {
        try {
            const result = run();
            if (result) {
                Promise.resolve(result).catch(err => report(err, operation, job));
            }
        }
        catch (err) {
            report(err, operation, job);
        }
    }
}
exports.ErrorCapturingSchedulingAdapter = ErrorCapturingSchedulingAdapter;
function withErrorCapture(adapter) {
    return new ErrorCapturingSchedulingAdapter(adapter);
}
