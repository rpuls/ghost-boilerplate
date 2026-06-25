"use strict";
/* eslint-disable ghost/ghost-custom/no-native-error */
Object.defineProperty(exports, "__esModule", { value: true });
exports.errify = void 0;
/**
 * Converts an unknown value to an Error object, if it isn't already.
 */
const errify = (value) => {
    if (value instanceof Error) {
        return value;
    }
    if ((value === null) || (value === undefined)) {
        return new Error();
    }
    if (value &&
        typeof value === 'object' &&
        'message' in value) {
        value = value.message;
    }
    let message;
    try {
        message = String(value);
    }
    catch {
        message = Object.prototype.toString.call(value);
    }
    return new Error(message);
};
exports.errify = errify;
