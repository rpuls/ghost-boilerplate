"use strict";
/**
 * Cache-key data helpers shared by the public posts/pages endpoints. Every
 * dimension that changes what a read returns (requested options, the
 * requester's access level, gift-link access) must contribute to the key, or
 * a cached variant leaks across requests that should see different content.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOptionsData = generateOptionsData;
exports.generateAuthData = generateAuthData;
function generateOptionsData(frame, options) {
    return options.reduce((memo, option) => {
        let value = frame.options?.[option];
        if (['include', 'fields', 'formats'].includes(option) && typeof value === 'string') {
            value = value.split(',').sort();
        }
        if (option === 'page') {
            value = value || 1;
        }
        return {
            ...memo,
            [option]: value
        };
    }, {});
}
function generateAuthData(frame) {
    const member = frame.options?.context?.member;
    if (member) {
        return {
            free: member.status === 'free',
            tiers: member.products?.map(product => product.slug).sort()
        };
    }
}
