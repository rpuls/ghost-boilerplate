"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCommentingCodec = void 0;
const member_commenting_1 = require("./member-commenting");
exports.MemberCommentingCodec = {
    /**
     * Parse a raw JSON string from storage into a MemberCommenting domain object.
     * Invalid data fails open to enabled state.
     */
    parse(raw) {
        try {
            const data = JSON.parse(raw ?? '');
            if (!data.disabled) {
                return member_commenting_1.MemberCommenting.enabled();
            }
            if (!data.disabledReason) {
                throw undefined;
            }
            const disabledUntil = data.disabledUntil ? new Date(data.disabledUntil) : null;
            if (disabledUntil && isNaN(disabledUntil.getTime())) {
                throw undefined;
            }
            return member_commenting_1.MemberCommenting.disabled(data.disabledReason, disabledUntil);
        }
        catch {
            return member_commenting_1.MemberCommenting.enabled();
        }
    },
    /**
     * Format a MemberCommenting domain object into a JSON string for storage.
     */
    format(commenting) {
        return JSON.stringify({
            disabled: commenting.disabled,
            disabledReason: commenting.disabledReason,
            disabledUntil: commenting.disabledUntil?.toISOString() ?? null
        });
    },
    /**
     * Serialize a MemberCommenting domain object for API responses.
     * Converts camelCase domain properties to snake_case API format.
     */
    toJSON(commenting) {
        if (!commenting) {
            return commenting;
        }
        return {
            disabled: commenting.disabled,
            disabled_reason: commenting.disabledReason,
            disabled_until: commenting.disabledUntil?.toISOString() ?? null
        };
    }
};
