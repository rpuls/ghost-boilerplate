"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resetAuthentication;
const internal_keys_1 = __importDefault(require("../internal-keys"));
// eslint-disable-next-line @typescript-eslint/no-require-imports
const modelsDefault = require('../../models');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { deleteAllSessions: deleteAllSessionsDefault } = require('./session');
/**
 * Rotation, user lock and the audit row commit in a single transaction so
 * app crashes mid-flight can't leave the system half-rotated or lose the
 * audit trail. Session deletion runs immediately after the commit, before
 * the rescheduleAll, so a failure inside the adapter can't leave stale
 * session rows live for an attacker.
 *
 * The schedulerAdapter and userService come from boot's lifecycle, so they
 * are explicit parameters. The auth-domain primitives (models, internalKeys,
 * sessions) default to their module singletons; tests pass overrides.
 */
async function resetAuthentication({ schedulerAdapter, userService, options, models = modelsDefault, internalKeys = internal_keys_1.default, deleteAllSessions = deleteAllSessionsDefault }) {
    const previousSchedulerKey = await internalKeys.get('ghost-scheduler');
    const actorId = options?.context?.user ?? null;
    const { apiKeysRotated, usersLocked } = await models.Base.transaction(async (tx) => {
        const txOptions = Object.assign({}, options, { transacting: tx });
        const { count: rotated } = await models.ApiKey.refreshAllSecrets(txOptions);
        const { count: locked } = await userService.lockAll(txOptions);
        if (actorId) {
            await models.Action.add({
                event: 'edited',
                resource_type: 'security_action',
                resource_id: null,
                actor_type: 'user',
                actor_id: actorId,
                context: {
                    action_name: 'reset_authentication',
                    api_keys_rotated: rotated,
                    users_locked: locked
                }
            }, { transacting: tx, autoRefresh: false });
        }
        return { apiKeysRotated: rotated, usersLocked: locked };
    });
    internalKeys.clear();
    await deleteAllSessions();
    await schedulerAdapter.rescheduleAll({ previousKey: previousSchedulerKey });
    return { apiKeysRotated, usersLocked };
}
