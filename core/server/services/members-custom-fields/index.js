"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.definitions = void 0;
exports.init = init;
const definitions_service_1 = require("./definitions-service");
const values_service_1 = require("./values-service");
const actions_1 = require("./actions");
const config_1 = require("./config");
function init() {
    // The two are constructed together below, so checking both keeps the "both or
    // neither" invariant explicit rather than trusting one to stand in for the pair.
    if (exports.definitions && exports.values) {
        return;
    }
    const { knex } = require('../../data/db');
    const models = require('../../models');
    const recordAction = ({ context, verb, subject, details }) => (0, actions_1.recordCustomFieldAction)({ Action: models.Action, context, verb, subject, details });
    // Resolved here, not in the service: reading config is this module's job, and
    // the service is handed a number. A getter rather than a value because the
    // ceiling is an operator setting that can change between requests, and a Ghost
    // container holds no state across them.
    const config = require('../../../shared/config');
    exports.definitions = new definitions_service_1.CustomFieldDefinitionsService({
        knex,
        recordAction,
        getMaxDefinitions: () => (0, config_1.resolveMaxDefinitions)(config.get('members:customFields:maxDefinitions'))
    });
    // The values service reads the field definitions straight from the table, so
    // it needs knex and the same ceiling — no handle on the definitions service.
    exports.values = new values_service_1.CustomFieldValuesService({
        knex,
        getMaxDefinitions: () => (0, config_1.resolveMaxDefinitions)(config.get('members:customFields:maxDefinitions'))
    });
}
