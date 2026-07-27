"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const members_custom_fields_1 = require("../../services/members-custom-fields");
const permissionsService = require('../../services/permissions');
// There is no Bookshelf model for this resource, so permissions are checked
// explicitly against the member_custom_field object type (the default
// `permissions: true` handler would try to load a model that doesn't exist).
function canThis(frame) {
    return permissionsService.canThis(frame.options.context);
}
function requestContextFromFrame(frame) {
    const context = (frame.options.context ?? {});
    if (context.integration) {
        return { actor: { id: context.integration.id, type: 'integration' } };
    }
    if (context.user) {
        return { actor: { id: context.user, type: 'user' } };
    }
    return { actor: null };
}
const noCacheInvalidation = { cacheInvalidate: false };
const controller = {
    docName: 'members_custom_fields',
    browse: {
        headers: noCacheInvalidation,
        // `filter` narrows by status (the definition list is otherwise small and
        // global, returned whole in a fixed order). Archived fields are hidden by
        // default; Settings passes `filter=status:[active,archived]` to see both.
        // No pagination/order options — a future sort_order column would change the
        // order server-side, not add a client option.
        options: ['filter'],
        permissions(frame) {
            return canThis(frame).browse.member_custom_field();
        },
        query(frame) {
            return members_custom_fields_1.definitions.browse({ filter: frame.options.filter });
        }
    },
    read: {
        headers: noCacheInvalidation,
        options: ['key'],
        validation: { options: { key: { required: true } } },
        permissions(frame) {
            return canThis(frame).read.member_custom_field(frame.options.key);
        },
        query(frame) {
            return members_custom_fields_1.definitions.read(frame.options.key);
        }
    },
    add: {
        statusCode: 201,
        headers: noCacheInvalidation,
        permissions(frame) {
            return canThis(frame).add.member_custom_field();
        },
        // The whole array is passed through: create is a batch, applied
        // all-or-nothing. A client sending a single definition (as Admin does)
        // is just the one-item case and sees no change.
        query(frame) {
            return members_custom_fields_1.definitions.add(requestContextFromFrame(frame), frame.data.members_custom_fields);
        }
    },
    edit: {
        headers: noCacheInvalidation,
        options: ['key'],
        validation: { options: { key: { required: true } } },
        permissions(frame) {
            return canThis(frame).edit.member_custom_field(frame.options.key);
        },
        query(frame) {
            return members_custom_fields_1.definitions.edit(requestContextFromFrame(frame), frame.options.key, frame.data.members_custom_fields[0]);
        }
    },
    destroy: {
        statusCode: 204,
        headers: noCacheInvalidation,
        options: ['key'],
        validation: { options: { key: { required: true } } },
        permissions(frame) {
            return canThis(frame).destroy.member_custom_field(frame.options.key);
        },
        async query(frame) {
            await members_custom_fields_1.definitions.destroy(requestContextFromFrame(frame), frame.options.key);
            return null;
        }
    }
};
// module.exports (not export): the API framework loads controllers via require().
module.exports = controller;
