"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENSITIVE_ATTRIBUTES = void 0;
exports.maskSensitiveData = maskSensitiveData;
exports.processPayload = processPayload;
/**
 * Utility functions for data privacy and PII protection
 */
/**
 * Default attributes that should be masked for privacy
 */
exports.SENSITIVE_ATTRIBUTES = [
    'username',
    'user',
    'user_id',
    'userid',
    'password',
    'pass',
    'pin',
    'passcode',
    'token',
    'api_token',
    'email',
    'address',
    'phone',
    'sex',
    'gender',
    'order',
    'order_id',
    'orderid',
    'payment',
    'credit_card'
];
/**
 * Mask sensitive attributes in a payload
 */
function maskSensitiveData(payload, attributesToMask = exports.SENSITIVE_ATTRIBUTES) {
    // Deep copy
    let payloadStr = JSON.stringify(payload);
    attributesToMask.forEach((attr) => {
        payloadStr = payloadStr.replace(new RegExp(`("${attr}"):(".+?"|\\d+)`, 'mgi'), '$1:"********"');
    });
    return payloadStr;
}
function processPayload(payload, globalAttributes = {}, stringify = true) {
    if (stringify) {
        const maskedStr = maskSensitiveData(payload);
        const processed = Object.assign({}, JSON.parse(maskedStr), globalAttributes);
        return JSON.stringify(processed);
    }
    else {
        const processed = Object.assign({}, payload, globalAttributes);
        const maskedStr = maskSensitiveData(processed);
        return JSON.parse(maskedStr);
    }
}
