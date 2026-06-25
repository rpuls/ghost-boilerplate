"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFakeWaitHoursMultiplier = parseFakeWaitHoursMultiplier;
function parseFakeWaitHoursMultiplier(value) {
    if (typeof value !== 'number' && typeof value !== 'string') {
        return null;
    }
    const multiplier = Number(value);
    if (!Number.isSafeInteger(multiplier) || multiplier <= 0) {
        return null;
    }
    return multiplier;
}
