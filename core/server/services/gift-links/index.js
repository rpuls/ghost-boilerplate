"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
exports.init = init;
const service_1 = require("./service");
function init() {
    if (exports.service) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { knex } = require('../../data/db');
    exports.service = new service_1.GiftLinksService({ knex });
}
