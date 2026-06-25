"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteFlagsService = void 0;
const logging_1 = __importDefault(require("@tryghost/logging"));
const resolve_1 = require("./resolve");
const DEFAULT_POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
const DEFAULT_JITTER_MS = 60 * 1000; // up to 1 minute of spread per poll
const REQUEST_TIMEOUT_MS = 10 * 1000;
/**
 * Polls the manifest, resolves it for this site, and writes the result to the
 * shared override store. Fail-open by design: a missing/broken/unreachable manifest
 * keeps last-known-good (or clears) and never throws, so it can't take a site down.
 * The HTTP client and override sink are injected for testing.
 */
class RemoteFlagsService {
    url;
    siteUuid;
    applyOverrides;
    request;
    pollInterval;
    jitter;
    getRandom;
    _etag;
    _resolvedKey;
    _timer;
    _started;
    _refreshing;
    constructor(deps) {
        this.url = deps.url;
        this.siteUuid = deps.siteUuid;
        this.applyOverrides = deps.applyOverrides;
        this.request = deps.request;
        this.pollInterval = deps.pollInterval || DEFAULT_POLL_INTERVAL_MS;
        this.jitter = deps.jitter === undefined ? DEFAULT_JITTER_MS : deps.jitter;
        this.getRandom = deps.getRandom || Math.random;
        this._etag = null; // last seen ETag, for conditional GETs
        this._resolvedKey = null; // serialized last-applied resolved map, for change detection
        this._timer = null;
        this._started = false;
        this._refreshing = false;
    }
    /**
     * Fetch, resolve, and apply the manifest once. Never rejects. Overlapping calls
     * are coalesced so concurrent refreshes can't race the cached ETag.
     */
    async refresh() {
        if (this._refreshing) {
            return;
        }
        this._refreshing = true;
        try {
            await this._doRefresh();
        }
        finally {
            this._refreshing = false;
        }
    }
    /** @private */
    async _doRefresh() {
        let response;
        try {
            const headers = {};
            if (this._etag) {
                headers['if-none-match'] = this._etag;
            }
            // Pass the string form: @tryghost/request rejects a URL object.
            response = await this.request(this.url.href, {
                method: 'GET',
                headers,
                throwHttpErrors: false,
                responseType: 'text',
                followRedirect: false,
                retry: { limit: 0 },
                timeout: { request: REQUEST_TIMEOUT_MS }
            });
        }
        catch (err) {
            // Network/timeout error: keep last-known-good, change nothing.
            logging_1.default.warn({
                system: { event: 'remote_flags.fetch_failed' },
                err
            }, 'Remote feature flags fetch failed; keeping last-known-good');
            return;
        }
        try {
            const status = response && response.statusCode;
            if (status === 304) {
                // Not modified: current overrides are still correct.
                return;
            }
            if (status === 404) {
                // No manifest published: no opinion for anyone, fail open to empty.
                this._etag = null;
                this._applyAndMaybeLog({}, null);
                return;
            }
            if (!status || status < 200 || status >= 300) {
                logging_1.default.warn({
                    system: { event: 'remote_flags.fetch_bad_status', statusCode: status || null }
                }, 'Remote feature flags fetch returned an unexpected status; keeping last-known-good');
                return;
            }
            let manifest;
            try {
                manifest = JSON.parse(response.body);
            }
            catch (parseErr) {
                logging_1.default.warn({
                    system: { event: 'remote_flags.parse_failed' },
                    err: parseErr
                }, 'Remote feature flags manifest was not valid JSON; keeping last-known-good');
                return;
            }
            // got lowercases response header keys, so `.etag` is the only spelling.
            const etag = (response.headers && response.headers.etag) || null;
            // Commit the ETag only after the manifest has actually been applied: if
            // apply throws, we keep the old ETag so the next poll re-fetches and
            // retries instead of getting a 304 for a manifest we never applied.
            this._applyAndMaybeLog(manifest, etag);
            this._etag = etag;
        }
        catch (err) {
            // Backstop: resolve()/applyOverrides shouldn't throw, but fail open if they do.
            logging_1.default.warn({
                system: { event: 'remote_flags.apply_failed' },
                err
            }, 'Remote feature flags could not be applied; keeping last-known-good');
        }
    }
    /**
     * Resolve and apply the manifest, logging only when the resolved set changes
     * (so a steady fleet doesn't log on every poll).
     * @private
     */
    _applyAndMaybeLog(manifest, etag) {
        const resolved = (0, resolve_1.resolve)(manifest, {
            siteUuid: this.siteUuid
        });
        this.applyOverrides(resolved);
        // Stable-stringify (sorted keys) so a reordered-but-identical manifest isn't
        // seen as a change. JSON.stringify's 2nd arg is a key allowlist, here the sorted keys.
        const key = JSON.stringify(resolved, Object.keys(resolved).sort());
        if (key !== this._resolvedKey) {
            this._resolvedKey = key;
            logging_1.default.info({
                system: {
                    event: 'remote_flags.applied',
                    etag: etag || null,
                    flags: resolved
                }
            }, 'Remote feature flags applied');
        }
    }
    _scheduleNext() {
        if (!this._started) {
            return;
        }
        // Clear any existing timer so a stop/start cycle can't leave two chains running.
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
        const delay = this.pollInterval + Math.floor(this.getRandom() * this.jitter);
        this._timer = setTimeout(async () => {
            await this.refresh();
            this._scheduleNext();
        }, delay);
        // Never hold the process open just for the poll timer.
        if (this._timer && typeof this._timer.unref === 'function') {
            this._timer.unref();
        }
    }
    /**
     * Start polling: an immediate refresh (so boot reflects current flag state),
     * then a jittered recurring poll. Idempotent.
     */
    async start() {
        if (this._started) {
            return;
        }
        this._started = true;
        await this.refresh();
        this._scheduleNext();
    }
    /**
     * Stop polling. Does not clear already-applied overrides.
     */
    stop() {
        this._started = false;
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    }
}
exports.RemoteFlagsService = RemoteFlagsService;
