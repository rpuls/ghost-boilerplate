"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
exports.init = init;
const service_1 = require("./service");
const actions_1 = require("./actions");
function init() {
    if (exports.service) {
        return;
    }
    const { knex } = require('../../data/db');
    const models = require('../../models');
    const recordAction = ({ context, verb, subject }) => (0, actions_1.recordGiftLinkAction)({ Action: models.Action, context, verb, subject });
    exports.service = new service_1.GiftLinksService({ knex, recordAction });
}
