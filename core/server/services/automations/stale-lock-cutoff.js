"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaleLockCutoff = getStaleLockCutoff;
const constants_1 = require("./constants");
function getStaleLockCutoff(now) {
    return new Date(now.getTime() - constants_1.LOCK_TIMEOUT_MS);
}
