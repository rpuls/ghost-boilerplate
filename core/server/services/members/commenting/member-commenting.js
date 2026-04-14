"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCommenting = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const messages = {
    reasonRequired: 'A reason is required when disabling commenting for a member',
    reasonTooLong: 'Reason must be 2000 characters or less'
};
class MemberCommenting {
    disabled;
    disabledReason;
    disabledUntil;
    canComment;
    constructor(data) {
        if (data.disabled && !data.disabledReason) {
            throw new errors_1.default.ValidationError({
                message: (0, tpl_1.default)(messages.reasonRequired),
                property: 'reason'
            });
        }
        if (data.disabledReason && data.disabledReason.length > 2000) {
            throw new errors_1.default.ValidationError({
                message: (0, tpl_1.default)(messages.reasonTooLong),
                property: 'reason'
            });
        }
        this.disabled = data.disabled;
        this.disabledReason = data.disabledReason;
        this.disabledUntil = data.disabledUntil;
        this.canComment = true;
        if (this.disabled) {
            this.canComment = this.disabledUntil ? this.disabledUntil <= new Date() : false;
        }
    }
    static enabled() {
        return new MemberCommenting({
            disabled: false,
            disabledReason: null,
            disabledUntil: null
        });
    }
    static disabled(reason, until) {
        return new MemberCommenting({
            disabled: true,
            disabledReason: reason,
            disabledUntil: until
        });
    }
    enable() {
        return MemberCommenting.enabled();
    }
    disable(reason, until) {
        return MemberCommenting.disabled(reason, until);
    }
}
exports.MemberCommenting = MemberCommenting;
