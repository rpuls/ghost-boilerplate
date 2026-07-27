"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gift_links_1 = require("../../services/gift-links");
const permissionsService = require('../../services/permissions');
async function assertCanEditAndGift(frame) {
    const { context, id } = frame.options;
    await permissionsService.canThis(context).manage.gift_link(id);
    await permissionsService.canThis(context).edit.post(id);
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
    docName: 'gift_links',
    browse: {
        headers: noCacheInvalidation,
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions(frame) {
            return assertCanEditAndGift(frame);
        },
        query(frame) {
            return gift_links_1.service.getPost(frame.options.id);
        }
    },
    ensure: {
        headers: noCacheInvalidation,
        statusCode: 200,
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions(frame) {
            return assertCanEditAndGift(frame);
        },
        query(frame) {
            return gift_links_1.service.ensure(requestContextFromFrame(frame), frame.options.id);
        }
    },
    create: {
        headers: noCacheInvalidation,
        statusCode: 200,
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions(frame) {
            return assertCanEditAndGift(frame);
        },
        query(frame) {
            return gift_links_1.service.create(requestContextFromFrame(frame), frame.options.id);
        }
    },
    removeAll: {
        headers: noCacheInvalidation,
        statusCode: 200,
        permissions(frame) {
            return permissionsService.canThis(frame.options.context).removeAll.gift_link();
        },
        async query(frame) {
            const count = await gift_links_1.service.removeAll(requestContextFromFrame(frame));
            return { count };
        }
    }
};
// module.exports (not export): the API framework loads controllers via require().
module.exports = controller;
