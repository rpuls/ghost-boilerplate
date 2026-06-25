"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const moment_1 = __importDefault(require("moment"));
const logging_1 = __importDefault(require("@tryghost/logging"));
// CJS-only modules — typed loosely below. models is the Bookshelf registry
// without TS declarations; the rest are JS modules without types.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const models = require('../../models');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const urlUtils = require('../../../shared/url-utils');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getSignedAdminToken } = require('../../adapters/scheduling/utils');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const events = require('../../lib/common/events');
// Pages live in the posts table with type:'page', so both types are
// queried through models.Post and discriminated via the type filter.
const SCHEDULED_RESOURCES = ['post', 'page'];
class PostScheduling {
    #apiUrl;
    #adapter;
    #internalKeys;
    constructor({ apiUrl, adapter, internalKeys }) {
        this.#apiUrl = apiUrl;
        this.#adapter = adapter;
        this.#internalKeys = internalKeys;
        SCHEDULED_RESOURCES.forEach((resource) => {
            events.on(`${resource}.scheduled`, async (model) => {
                try {
                    const key = await internalKeys.get('ghost-scheduler');
                    this.#adapter.schedule(this.#normalize({ model, key, resourceType: resource }));
                }
                catch (err) {
                    logging_1.default.error({ event: { name: 'post-scheduling.schedule.error' }, err, resource, id: model.get('id') }, 'Failed to schedule resource');
                }
            });
            // Reschedule = matched unschedule + fresh schedule, because tokens
            // are signed against the published_at timestamp.
            events.on(`${resource}.rescheduled`, async (model) => {
                try {
                    const key = await internalKeys.get('ghost-scheduler');
                    this.#adapter.unschedule(this.#normalize({ model, key, resourceType: resource }, 'unscheduled'));
                    this.#adapter.schedule(this.#normalize({ model, key, resourceType: resource }));
                }
                catch (err) {
                    logging_1.default.error({ event: { name: 'post-scheduling.reschedule.error' }, err, resource, id: model.get('id') }, 'Failed to reschedule resource');
                }
            });
            events.on(`${resource}.unscheduled`, async (model) => {
                try {
                    const key = await internalKeys.get('ghost-scheduler');
                    this.#adapter.unschedule(this.#normalize({ model, key, resourceType: resource }, 'unscheduled'));
                }
                catch (err) {
                    logging_1.default.error({ event: { name: 'post-scheduling.unschedule.error' }, err, resource, id: model.get('id') }, 'Failed to unschedule resource');
                }
            });
        });
        this.#adapter.register(this);
    }
    /**
     * Re-issue every queued schedule under the current internal-keys cache.
     * On boot the previous key is the same as the current key. For key
     * rotation, the caller passes `previousKey` so unschedule URLs match
     * the entries the adapter already holds (signed under the previous
     * secret); schedule URLs are reissued under the current secret.
     */
    async rescheduleAll({ previousKey } = {}) {
        const scheduledResources = await this.#loadScheduledResources();
        const currentKey = await this.#internalKeys.get('ghost-scheduler');
        const unscheduleKey = previousKey ?? currentKey;
        // Same-key rebuild (no previousKey, boot path) → URL signature is
        // identical to the about-to-be-scheduled job. The default adapter
        // implements unschedule via tombstones keyed by URL+time, so a same-URL
        // unschedule poisons the scheduled job. Bootstrap mode skips the
        // tombstone write. Rotation (previousKey provided) → URLs differ, so
        // the tombstone correctly targets the old queued entry.
        const bootstrap = !previousKey;
        for (const resourceType of Object.keys(scheduledResources)) {
            for (const model of scheduledResources[resourceType]) {
                this.#adapter.unschedule(this.#normalize({ model, key: unscheduleKey, resourceType }), { bootstrap });
                this.#adapter.schedule(this.#normalize({ model, key: currentKey, resourceType }));
            }
        }
    }
    async #loadScheduledResources() {
        const entries = await Promise.all(SCHEDULED_RESOURCES.map(async (resourceType) => {
            const found = await models.Post.findAll({
                filter: `status:scheduled+type:${resourceType}`,
                columns: ['id', 'published_at', 'created_at', 'type']
            });
            return [resourceType, found];
        }));
        return Object.fromEntries(entries);
    }
    #normalize({ model, resourceType, key }, event = '') {
        const resource = `${resourceType}s`;
        const publishedAt = (event === 'unscheduled') ? model.previous('published_at') : model.get('published_at');
        const signedAdminToken = getSignedAdminToken({ publishedAt, apiUrl: this.#apiUrl, key });
        const url = `${urlUtils.urlJoin(this.#apiUrl, 'schedules', resource, model.get('id'))}/?token=${signedAdminToken}`;
        return {
            // NOTE: The scheduler expects a unix timestamp.
            time: (0, moment_1.default)(publishedAt).valueOf(),
            url,
            extra: {
                httpMethod: 'PUT',
                oldTime: model.previous('published_at') ? (0, moment_1.default)(model.previous('published_at')).valueOf() : null
            }
        };
    }
}
exports.default = PostScheduling;
