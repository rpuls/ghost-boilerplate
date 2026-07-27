"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordCustomFieldAction = recordCustomFieldAction;
const logging_1 = __importDefault(require("@tryghost/logging"));
// Field-definition changes map to activity-feed events. A field's timeline reads
// added -> edited -> archived -> restored, and a permanent delete (only from the
// archived state) ends it with deleted.
const COMMANDS = {
    create: 'added',
    rename: 'edited',
    archive: 'archived',
    restore: 'restored',
    delete: 'deleted'
};
// Best-effort action-log write: a failed action must never fail the command that triggered it.
async function recordCustomFieldAction({ Action, context, verb, subject, details }) {
    if (!context.actor) {
        return;
    }
    try {
        await Action.add({
            event: COMMANDS[verb],
            resource_type: 'member_custom_field',
            // The field's id: this column holds 24 characters, and a key minted from
            // a publisher-chosen name is bounded by the far wider key column, so only
            // the id fits every field.
            resource_id: subject,
            actor_type: context.actor.type,
            actor_id: context.actor.id,
            context: details
        }, { autoRefresh: false });
    }
    catch (err) {
        logging_1.default.error(err);
    }
}
