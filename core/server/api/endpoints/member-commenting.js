"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const members_1 = __importDefault(require("../../services/members"));
const INVALIDATE_MEMBERS_CACHE = { value: '/members/' };
const controller = {
    docName: 'member_commenting',
    disable: {
        statusCode: 200,
        headers: {
            cacheInvalidate: INVALIDATE_MEMBERS_CACHE
        },
        options: [
            'id'
        ],
        data: [
            'reason',
            'expires_at',
            'hide_comments'
        ],
        validation: {
            options: {
                id: {
                    required: true
                }
            }
        },
        permissions: {
            method: 'edit',
            docName: 'member'
        },
        async query(frame) {
            return members_1.default.api.memberBREADService.disableCommenting(frame.options.id, frame.data.reason, frame.data.expires_at || null, frame.data.hide_comments || false, frame.options.context);
        }
    },
    enable: {
        statusCode: 200,
        headers: {
            cacheInvalidate: INVALIDATE_MEMBERS_CACHE
        },
        options: [
            'id'
        ],
        validation: {
            options: {
                id: {
                    required: true
                }
            }
        },
        permissions: {
            method: 'edit',
            docName: 'member'
        },
        async query(frame) {
            return members_1.default.api.memberBREADService.enableCommenting(frame.options.id, frame.options.context);
        }
    }
};
// module.exports required - using `export` causes the module to fail to register
// with the web framework as it's loaded via require()
module.exports = controller;
