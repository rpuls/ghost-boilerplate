"use strict";
/**
 * Shared in-memory store for remote feature-flag overrides: the remote-flags service
 * writes it (replace), the labs service reads it (getAll) in its overlay. Keeping it
 * separate means labs never exposes a write API and never imports the service. Empty
 * on self-hosted (nothing writes), so the labs overlay is a no-op there.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = replace;
exports.clear = clear;
exports.getAll = getAll;
let overrides = {};
/**
 * Replace the active overrides. A non-object payload becomes "none". The value is
 * shallow-copied so the caller can't later mutate live flag state (values are
 * booleans, so a shallow copy fully isolates).
 */
function replace(next) {
    overrides = (next && typeof next === 'object' && !Array.isArray(next))
        ? { ...next }
        : {};
}
/**
 * Drop all overrides, returning to purely local flag state.
 */
function clear() {
    overrides = {};
}
/**
 * A read-only copy of the active overrides, for the labs overlay and for tests.
 */
function getAll() {
    return { ...overrides };
}
