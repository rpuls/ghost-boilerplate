"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseAutomationsRepository = createDatabaseAutomationsRepository;
const errors_1 = __importDefault(require("@tryghost/errors"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const dequal_1 = require("dequal");
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("../member-welcome-emails/constants");
const constants_2 = require("./constants");
const HOUR_MS = 60 * 60 * 1000;
const DATABASE_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_WELCOME_EMAIL_AUTOMATIONS = [{
        name: 'Free member welcome flow',
        slug: constants_1.MEMBER_WELCOME_EMAIL_SLUGS.free
    }, {
        name: 'Paid member welcome flow',
        slug: constants_1.MEMBER_WELCOME_EMAIL_SLUGS.paid
    }];
const messages = {
    invalidAutomationActionRevision: 'Automation action "{actionId}" of type "{actionType}" is missing required revision field "{field}".',
    conflictingAutomationActionId: 'Automation action "{actionId}" already exists and cannot be inserted.',
    conflictingAutomationActionType: 'Automation action "{actionId}" already exists with a different type.',
    defaultEmailDesignSettingNotFound: 'Default automated email design setting not found.'
};
const DEFAULT_EMAIL_DESIGN_SETTING_REFERENCE = constants_1.DEFAULT_EMAIL_DESIGN_SETTING_SLUG;
function toDatabaseDate(date) {
    return (0, moment_1.default)(date).format(DATABASE_DATE_FORMAT);
}
function createDatabaseAutomationsRepository({ knex, fakeWaitHoursMultiplier }) {
    return {
        async browse() {
            return await knex.transaction(async (trx) => {
                await ensureDefaultAutomations(trx);
                const rows = await loadAutomations(trx);
                return {
                    data: rows.map(row => buildAutomationSummary(row)),
                    meta: {
                        pagination: buildPagination(rows.length)
                    }
                };
            });
        },
        async getById(id) {
            return await knex.transaction(async (trx) => {
                const automation = await loadAutomation(trx, id);
                if (!automation) {
                    return null;
                }
                return await buildAutomation(trx, automation);
            });
        },
        async edit(id, data) {
            return await knex.transaction(async (trx) => {
                const automation = await loadAutomation(trx, id);
                if (!automation) {
                    return null;
                }
                const updatedAutomation = await updateAutomation(trx, {
                    ...automation,
                    status: data.status,
                    updated_at: toDatabaseDate(new Date())
                });
                await replaceAutomationGraph(trx, updatedAutomation.id, data.actions, data.edges);
                return await buildAutomation(trx, updatedAutomation);
            });
        },
        async trigger(options) {
            return await knex.transaction(trx => trigger(trx, {
                ...options,
                fakeWaitHoursMultiplier
            }));
        },
        async fetchAndLockSteps(limit) {
            return await knex.transaction(trx => fetchAndLockSteps(trx, limit));
        },
        async finishStepAndEnqueueNext(step) {
            return await knex.transaction(trx => finishStepAndEnqueueNext(trx, {
                step,
                fakeWaitHoursMultiplier
            }));
        },
        async markStepTerminal(step, status) {
            return await knex.transaction(trx => markStepTerminal(trx, step, status));
        },
        async retryStep(step, retryAt) {
            return await knex.transaction(trx => retryStep(trx, step, retryAt));
        }
    };
}
async function ensureDefaultAutomations(trx) {
    for (const defaults of DEFAULT_WELCOME_EMAIL_AUTOMATIONS) {
        const automation = await ensureAutomation(trx, defaults);
        await ensureWelcomeEmailAction(trx, automation.id);
    }
}
async function ensureAutomation(trx, defaults) {
    const now = toDatabaseDate(new Date());
    const id = (0, bson_objectid_1.default)().toHexString();
    await trx('automations')
        .insert({
        id,
        status: 'inactive',
        name: defaults.name,
        slug: defaults.slug,
        created_at: now,
        updated_at: now
    })
        .onConflict('slug')
        .ignore();
    return requireAutomation(await loadAutomationBySlug(trx, defaults.slug), defaults.slug);
}
async function ensureWelcomeEmailAction(trx, automationId) {
    const hasActions = await trx('automation_actions')
        .where('automation_id', automationId)
        .whereNull('deleted_at')
        .first('id');
    if (hasActions) {
        return;
    }
    await trx('automations')
        .select('id')
        .where('id', automationId)
        .forUpdate()
        .first();
    const email = await trx('welcome_email_automated_emails')
        .select('subject', 'lexical', 'email_design_setting_id')
        .where('welcome_email_automation_id', automationId)
        .orderBy([
        'created_at',
        'id'
    ])
        .first();
    if (!email) {
        return;
    }
    const now = toDatabaseDate(new Date());
    const actionId = (0, bson_objectid_1.default)().toHexString();
    await insertActions(trx, [{
            id: actionId,
            created_at: now,
            updated_at: now,
            automation_id: automationId,
            type: 'send_email'
        }]);
    await insertActionRevisions(trx, [{
            actionId,
            action: {
                id: actionId,
                type: 'send_email',
                data: {
                    email_subject: email.subject,
                    email_lexical: email.lexical ?? '',
                    email_design_setting_id: email.email_design_setting_id
                }
            },
            createdAt: getNextRevisionCreatedAt(null, now)
        }]);
}
async function trigger(trx, options) {
    const { memberEmail, memberId, memberStatus, fakeWaitHoursMultiplier } = options;
    const firstAction = await findFirstActionRevision(trx, memberStatus);
    if (!firstAction) {
        return;
    }
    const now = new Date();
    const nowString = toDatabaseDate(now);
    const readyAt = getReadyAtForAction(firstAction, now, fakeWaitHoursMultiplier);
    const run = {
        id: (0, bson_objectid_1.default)().toHexString(),
        created_at: nowString,
        updated_at: nowString,
        automation_id: firstAction.automation_id,
        member_id: memberId,
        member_email: memberEmail
    };
    await trx('automation_runs').insert(run);
    await insertRunStep(trx, {
        automationRunId: run.id,
        automationActionRevisionId: firstAction.automation_action_revision_id,
        now,
        readyAt
    });
}
async function insertRunStep(trx, { automationRunId, automationActionRevisionId, now, readyAt }) {
    const nowString = toDatabaseDate(now);
    await trx('automation_run_steps').insert({
        id: (0, bson_objectid_1.default)().toHexString(),
        created_at: nowString,
        updated_at: nowString,
        automation_run_id: automationRunId,
        automation_action_revision_id: automationActionRevisionId,
        ready_at: toDatabaseDate(readyAt)
    });
}
async function fetchAndLockSteps(trx, limit) {
    // Two things make this tricky:
    //
    // - We want to do row-level locking, so multiple calls don't step on each other.
    // - We can't `UPDATE` a fixed number of rows.
    //
    // To get around these problems, here's what we do:
    //
    // 1. Select up to `limit` candidate rows.
    // 2. Try to lock those rows.
    // 3. Select any rows we successfully locked.
    const now = new Date();
    const nowString = toDatabaseDate(now);
    const staleLockCutoff = new Date(now.getTime() - constants_2.LOCK_TIMEOUT_MS);
    const staleLockCutoffString = toDatabaseDate(staleLockCutoff);
    const lockId = node_crypto_1.default.randomUUID();
    // 1. Select up to `limit` candidate rows.
    const candidates = await trx('automation_run_steps')
        .select('id')
        .where('status', 'pending')
        .where('ready_at', '<=', nowString)
        .where((builder) => {
        builder
            .whereNull('locked_by')
            .orWhere('locked_at', '<', staleLockCutoffString);
    })
        .orderBy([
        'ready_at',
        'created_at',
        'id'
    ])
        .limit(limit);
    if (candidates.length === 0) {
        return {
            steps: [],
            nextStepReadyAt: await findNextPendingReadyAt(trx, staleLockCutoff)
        };
    }
    const candidateIds = candidates.map(candidate => candidate.id);
    // 2. Try to lock those rows.
    await trx('automation_run_steps')
        .update({
        locked_by: lockId,
        locked_at: nowString,
        started_at: nowString,
        updated_at: nowString
    })
        .increment('step_attempts', 1)
        .whereIn('id', candidateIds)
        .where('status', 'pending')
        .where('ready_at', '<=', nowString)
        .where((builder) => {
        builder
            .whereNull('locked_by')
            .orWhere('locked_at', '<', staleLockCutoffString);
    });
    // 3. Select any rows we successfully locked.
    const rows = await trx('automation_run_steps as step')
        .select('step.id as id', 'step.locked_by as locked_by', 'step.automation_run_id as automation_run_id', 'run.automation_id as automation_id', 'automation.slug as automation_slug', 'automation.status as automation_status', 'run.member_id as member_id', 'run.member_email as member_email', 'action.id as action_id', 'revision.id as automation_action_revision_id', 'action.type as type', 'step.ready_at as ready_at', 'step.step_attempts as step_attempts', 'revision.wait_hours as wait_hours', 'revision.email_subject as email_subject', 'revision.email_lexical as email_lexical', 'revision.email_design_setting_id as email_design_setting_id')
        .innerJoin('automation_runs as run', 'run.id', 'step.automation_run_id')
        .innerJoin('automations as automation', 'automation.id', 'run.automation_id')
        .innerJoin('automation_action_revisions as revision', 'revision.id', 'step.automation_action_revision_id')
        .innerJoin('automation_actions as action', 'action.id', 'revision.action_id')
        .where('step.locked_by', lockId)
        .orderBy([
        'step.ready_at',
        'step.created_at',
        'step.id'
    ]);
    return {
        steps: rows.map(row => buildStepToRun(row)),
        nextStepReadyAt: await findNextPendingReadyAt(trx, staleLockCutoff)
    };
}
async function findNextPendingReadyAt(trx, staleLockCutoff) {
    const row = await trx('automation_run_steps')
        .min({ next_ready_at: 'ready_at' })
        .where('status', 'pending')
        .where((builder) => {
        builder
            .whereNull('locked_by')
            .orWhere('locked_at', '<', toDatabaseDate(staleLockCutoff));
    })
        .first();
    return row?.next_ready_at ? new Date(row.next_ready_at) : null;
}
function buildStepToRun(row) {
    const base = {
        id: row.id,
        step_attempts: row.step_attempts,
        ready_at: new Date(row.ready_at),
        locked_by: row.locked_by,
        automation_run_id: row.automation_run_id,
        automation_id: row.automation_id,
        automation_slug: row.automation_slug,
        automation_status: row.automation_status,
        member_id: row.member_id,
        member_email: row.member_email,
        action_id: row.action_id,
        automation_action_revision_id: row.automation_action_revision_id
    };
    switch (row.type) {
        case 'wait':
            return {
                ...base,
                type: 'wait',
                wait_hours: requireValue(row, 'wait_hours')
            };
        case 'send_email':
            return {
                ...base,
                type: 'send_email',
                email_subject: requireValue(row, 'email_subject'),
                email_lexical: requireValue(row, 'email_lexical'),
                email_design_setting_id: row.email_design_setting_id
            };
        default:
            throw new errors_1.default.InternalServerError({
                message: `Unexpected action type from database: ${row.type}`
            });
    }
}
async function findFirstActionRevision(trx, memberStatus) {
    const automationSlug = constants_1.MEMBER_WELCOME_EMAIL_SLUGS[memberStatus];
    const row = await trx('automations as automation')
        .select('automation.id as automation_id', 'actions.id as action_id', 'revisions.id as automation_action_revision_id', 'actions.type as type', 'revisions.wait_hours as wait_hours')
        .innerJoin('automation_actions as actions', 'actions.automation_id', 'automation.id')
        .innerJoin('automation_action_revisions as revisions', 'revisions.action_id', 'actions.id')
        .where('automation.slug', automationSlug)
        .where('automation.status', 'active')
        .whereNull('actions.deleted_at')
        .whereNotExists(trx('automation_action_edges as edge')
        .select('edge.target_action_id')
        .innerJoin('automation_actions as source_actions', 'source_actions.id', 'edge.source_action_id')
        .whereNull('source_actions.deleted_at')
        .where('edge.target_action_id', trx.ref('actions.id')))
        .where('revisions.created_at', trx('automation_action_revisions')
        .max('created_at')
        .where('action_id', trx.ref('actions.id')))
        .orderBy([
        'actions.created_at',
        'actions.id'
    ])
        .first();
    return row ?? null;
}
async function finishStepAndEnqueueNext(trx, options) {
    const { step, fakeWaitHoursMultiplier } = options;
    const didFinish = await markStepTerminal(trx, step, 'finished');
    if (!didFinish) {
        return null;
    }
    const next = await findNextActionRevision(trx, step.action_id);
    if (!next) {
        return null;
    }
    const now = new Date();
    const nextReadyAt = getReadyAtForAction(next, now, fakeWaitHoursMultiplier);
    await insertRunStep(trx, {
        automationRunId: step.automation_run_id,
        automationActionRevisionId: next.automation_action_revision_id,
        now,
        readyAt: nextReadyAt
    });
    return nextReadyAt;
}
async function findNextActionRevision(trx, sourceActionId) {
    const row = await trx('automation_action_edges as edge')
        .select('action.id as action_id', 'revision.id as automation_action_revision_id', 'action.type as type', 'revision.wait_hours as wait_hours')
        .innerJoin('automation_actions as action', 'action.id', 'edge.target_action_id')
        .innerJoin('automation_action_revisions as revision', 'revision.action_id', 'action.id')
        .where('edge.source_action_id', sourceActionId)
        .whereNull('action.deleted_at')
        .where('revision.created_at', trx('automation_action_revisions')
        .max('created_at')
        .where('action_id', trx.ref('action.id')))
        .orderBy('revision.created_at', 'desc')
        .orderBy('revision.id', 'desc')
        .first();
    return row ?? null;
}
async function markStepTerminal(trx, step, status) {
    const nowString = toDatabaseDate(new Date());
    return await updateStep(trx, step, {
        status,
        finished_at: nowString,
        updated_at: nowString
    });
}
async function retryStep(trx, step, retryAt) {
    const nowString = toDatabaseDate(new Date());
    return await updateStep(trx, step, {
        status: 'pending',
        started_at: null,
        finished_at: null,
        ready_at: toDatabaseDate(retryAt),
        updated_at: nowString
    });
}
function getReadyAtForAction(action, now, fakeWaitHoursMultiplier) {
    switch (action.type) {
        case 'wait': {
            const waitHours = requireValue({
                ...action,
                id: action.action_id
            }, 'wait_hours');
            const waitMs = waitHours * (fakeWaitHoursMultiplier || HOUR_MS);
            return new Date(now.getTime() + waitMs);
        }
        case 'send_email':
            return now;
        default: {
            const _exhaustive = action.type;
            throw new errors_1.default.IncorrectUsageError({
                message: `Unexpected action type ${_exhaustive}`
            });
        }
    }
}
/**
 * Update a step. Returns whether the update succeeded.
 *
 * Should only update locked steps to avoid race conditions. Imagine the following scenario:
 *
 * 1. A step is locked by Worker A.
 * 2. The lock expires.
 * 3. The step is locked by Worker B.
 * 4. Worker A finishes its work.
 *
 * Worker A has lost its lock, so it shouldn't be updating the step any more.
 */
async function updateStep(trx, step, attrs) {
    /* eslint-disable camelcase */
    const { started_at, finished_at, ready_at } = attrs;
    const changes = await trx('automation_run_steps')
        .update({
        status: attrs.status,
        updated_at: attrs.updated_at,
        locked_by: null,
        locked_at: null,
        ...(started_at === undefined ? {} : { started_at }),
        ...(finished_at === undefined ? {} : { finished_at }),
        ...(ready_at === undefined ? {} : { ready_at })
    })
        .where('id', step.id)
        .where('status', 'pending')
        .where('locked_by', step.locked_by);
    /* eslint-enable camelcase */
    return changes >= 1;
}
async function loadAutomation(trx, automationId) {
    const row = await trx('automations')
        .select('id', 'slug', 'name', 'status', 'created_at', 'updated_at')
        .where('id', automationId)
        .first();
    return row ?? null;
}
async function loadAutomationBySlug(trx, slug) {
    const row = await trx('automations')
        .select('id', 'slug', 'name', 'status', 'created_at', 'updated_at')
        .where('slug', slug)
        .first();
    return row ?? null;
}
async function loadAutomations(trx) {
    return await trx('automations')
        .select('id', 'slug', 'name', 'status', 'created_at', 'updated_at')
        .orderBy('name');
}
async function updateAutomation(trx, automation) {
    await trx('automations')
        .update({
        status: automation.status,
        updated_at: automation.updated_at
    })
        .where('id', automation.id);
    return requireAutomation(await loadAutomation(trx, automation.id), automation.id);
}
async function replaceAutomationGraph(trx, automationId, submittedActions, edges) {
    const existingActions = await loadAutomationActionRows(trx, automationId);
    const existingActionById = new Map(existingActions.map(action => [action.id, action]));
    const actions = await resolveEmailDesignSettingIds(trx, submittedActions);
    const submittedActionIds = new Set(actions.map(action => action.id));
    const actionIdsWithOwners = await loadActionIdsWithOwners(trx, [...submittedActionIds]);
    const latestRevisionByActionId = new Map((await loadLatestActionRevisions(trx, [...submittedActionIds])).map(revision => [revision.action_id, revision]));
    const now = toDatabaseDate(new Date());
    const actionsToInsert = [];
    const revisionsToInsert = [];
    for (const action of actions) {
        const existingAction = existingActionById.get(action.id);
        if (existingAction) {
            if (existingAction.type !== action.type) {
                throw new errors_1.default.ValidationError({
                    message: (0, tpl_1.default)(messages.conflictingAutomationActionType, {
                        actionId: action.id
                    }),
                    property: 'actions.type'
                });
            }
        }
        else {
            if (actionIdsWithOwners.has(action.id)) {
                throw new errors_1.default.ValidationError({
                    message: (0, tpl_1.default)(messages.conflictingAutomationActionId, {
                        actionId: action.id
                    }),
                    property: 'actions.id'
                });
            }
            actionsToInsert.push({
                id: action.id,
                created_at: now,
                updated_at: now,
                automation_id: automationId,
                type: action.type
            });
        }
        const latestRevision = latestRevisionByActionId.get(action.id);
        if (shouldInsertActionRevision(action, latestRevision)) {
            revisionsToInsert.push({
                actionId: action.id,
                action,
                createdAt: getNextRevisionCreatedAt(latestRevision?.created_at ?? null, now)
            });
        }
    }
    await insertActions(trx, actionsToInsert);
    await insertActionRevisions(trx, revisionsToInsert);
    const actionIdsToSoftDelete = existingActions
        .filter(existingAction => !submittedActionIds.has(existingAction.id))
        .map(existingAction => existingAction.id);
    await softDeleteActions(trx, actionIdsToSoftDelete, now);
    await deleteAutomationEdges(trx, automationId);
    await insertActionEdges(trx, edges);
}
async function resolveEmailDesignSettingIds(trx, actions) {
    if (!actions.some(action => action.type === 'send_email' && action.data.email_design_setting_id === DEFAULT_EMAIL_DESIGN_SETTING_REFERENCE)) {
        return [...actions];
    }
    const defaultEmailDesignSettingId = await loadDefaultEmailDesignSettingId(trx);
    return actions.map((action) => {
        if (action.type !== 'send_email' || action.data.email_design_setting_id !== DEFAULT_EMAIL_DESIGN_SETTING_REFERENCE) {
            return action;
        }
        return {
            ...action,
            data: {
                ...action.data,
                email_design_setting_id: defaultEmailDesignSettingId
            }
        };
    });
}
async function loadDefaultEmailDesignSettingId(trx) {
    const row = await trx('email_design_settings')
        .select('id')
        .where('slug', constants_1.DEFAULT_EMAIL_DESIGN_SETTING_SLUG)
        .first();
    if (!row?.id) {
        throw new errors_1.default.InternalServerError({
            message: (0, tpl_1.default)(messages.defaultEmailDesignSettingNotFound)
        });
    }
    return row.id;
}
async function loadAutomationActionRows(trx, automationId) {
    return await trx('automation_actions')
        .select('id', 'type')
        .where('automation_id', automationId)
        .whereNull('deleted_at');
}
async function loadActionIdsWithOwners(trx, actionIds) {
    if (actionIds.length === 0) {
        return new Set();
    }
    const rows = await trx('automation_actions')
        .select('id')
        .whereIn('id', actionIds);
    return new Set(rows.map(row => row.id));
}
async function insertActions(trx, actions) {
    if (actions.length === 0) {
        return;
    }
    await trx('automation_actions').insert(actions);
}
function shouldInsertActionRevision(action, latestRevision) {
    if (!latestRevision) {
        return true;
    }
    return !(0, dequal_1.dequal)(buildRevisionActionData(action, latestRevision), action.data);
}
function buildRevisionActionData(action, revision) {
    switch (action.type) {
        case 'wait':
            return {
                wait_hours: revision.wait_hours
            };
        case 'send_email':
            return {
                email_subject: revision.email_subject,
                email_lexical: revision.email_lexical,
                email_design_setting_id: revision.email_design_setting_id
            };
        default: {
            const _exhaustive = action;
            throw new errors_1.default.InternalServerError({
                message: `Unhandled action type: ${_exhaustive}`
            });
        }
    }
}
async function loadLatestActionRevisions(trx, actionIds) {
    if (actionIds.length === 0) {
        return [];
    }
    const latestRevisionDates = trx('automation_action_revisions')
        .select('action_id')
        .max({ created_at: 'created_at' })
        .whereIn('action_id', actionIds)
        .groupBy('action_id')
        .as('latest_revision_dates');
    return await trx('automation_action_revisions')
        .select('automation_action_revisions.action_id', 'automation_action_revisions.created_at', 'automation_action_revisions.wait_hours', 'automation_action_revisions.email_subject', 'automation_action_revisions.email_lexical', 'automation_action_revisions.email_design_setting_id')
        .innerJoin(latestRevisionDates, function () {
        this.on('automation_action_revisions.action_id', 'latest_revision_dates.action_id')
            .andOn('automation_action_revisions.created_at', 'latest_revision_dates.created_at');
    });
}
async function softDeleteActions(trx, actionIds, deletedAt) {
    if (actionIds.length === 0) {
        return;
    }
    await trx('automation_actions')
        .update({
        deleted_at: deletedAt,
        updated_at: deletedAt
    })
        .whereIn('id', actionIds);
}
async function insertActionRevisions(trx, revisions) {
    if (revisions.length === 0) {
        return;
    }
    await trx('automation_action_revisions').insert(revisions.map(({ actionId, action, createdAt }) => buildActionRevision(actionId, action, createdAt)));
}
function getNextRevisionCreatedAt(latestCreatedAt, requestedCreatedAt) {
    if (!latestCreatedAt) {
        return toDatabaseDate(requestedCreatedAt);
    }
    const requestedTime = new Date(requestedCreatedAt).getTime();
    const latestTime = new Date(latestCreatedAt).getTime();
    if (requestedTime > latestTime) {
        return toDatabaseDate(requestedCreatedAt);
    }
    return toDatabaseDate(new Date(latestTime + 1000));
}
function buildActionRevision(actionId, action, createdAt) {
    switch (action.type) {
        case 'wait':
            return {
                id: (0, bson_objectid_1.default)().toString(),
                created_at: createdAt,
                action_id: actionId,
                wait_hours: action.data.wait_hours,
                email_subject: null,
                email_lexical: null,
                email_design_setting_id: null
            };
        case 'send_email':
            return {
                id: (0, bson_objectid_1.default)().toString(),
                created_at: createdAt,
                action_id: actionId,
                wait_hours: null,
                email_subject: action.data.email_subject,
                email_lexical: action.data.email_lexical,
                email_design_setting_id: action.data.email_design_setting_id
            };
        default: {
            const _exhaustive = action;
            throw new errors_1.default.InternalServerError({
                message: `Unexpected action type ${_exhaustive}`
            });
        }
    }
}
async function deleteAutomationEdges(trx, automationId) {
    await trx('automation_action_edges')
        .delete()
        .whereIn('source_action_id', trx('automation_actions')
        .select('id')
        .where('automation_id', automationId));
}
async function insertActionEdges(trx, edges) {
    if (edges.length === 0) {
        return;
    }
    await trx('automation_action_edges').insert(edges.map(edge => ({
        source_action_id: edge.source_action_id,
        target_action_id: edge.target_action_id
    })));
}
function requireAutomation(automation, id) {
    if (!automation) {
        throw new errors_1.default.InternalServerError({
            message: `Updated automation "${id}" could not be loaded.`
        });
    }
    return automation;
}
async function buildAutomation(trx, automation) {
    const actionRows = await loadActionRows(trx, automation.id);
    const edgeRows = await loadEdgeRows(trx, automation.id);
    return {
        ...buildAutomationSummary(automation),
        actions: actionRows.map(row => buildActionPayload(row)),
        edges: edgeRows.map(row => buildEdgePayload(row))
    };
}
function buildAutomationSummary(automation) {
    return {
        id: automation.id,
        slug: automation.slug,
        name: automation.name,
        status: automation.status,
        created_at: serializeDate(automation.created_at),
        updated_at: serializeDate(automation.updated_at)
    };
}
function serializeDate(date) {
    const normalizedDate = new Date(date);
    normalizedDate.setMilliseconds(0);
    return normalizedDate.toISOString();
}
async function loadActionRows(trx, automationId) {
    return await trx('automation_actions as a')
        .select('a.id as id', 'a.type as type', 'r.wait_hours as wait_hours', 'r.email_subject as email_subject', 'r.email_lexical as email_lexical', 'r.email_design_setting_id as email_design_setting_id')
        .innerJoin('automation_action_revisions as r', 'r.action_id', 'a.id')
        .where('a.automation_id', automationId)
        .whereNull('a.deleted_at')
        .where('r.created_at', trx('automation_action_revisions')
        .max('created_at')
        .where('action_id', trx.ref('a.id')))
        .orderBy([
        'a.created_at',
        'a.id'
    ]);
}
async function loadEdgeRows(trx, automationId) {
    return await trx('automation_action_edges as e')
        .select('e.source_action_id', 'e.target_action_id')
        .innerJoin('automation_actions as source_action', (join) => {
        join
            .on('source_action.id', 'e.source_action_id')
            .onNull('source_action.deleted_at');
    })
        .innerJoin('automation_actions as target_action', (join) => {
        join
            .on('target_action.id', 'e.target_action_id')
            .onNull('target_action.deleted_at')
            .on('target_action.automation_id', 'source_action.automation_id');
    })
        .where('source_action.automation_id', automationId)
        .orderBy([
        'e.source_action_id',
        'e.target_action_id'
    ]);
}
function buildActionPayload(row) {
    switch (row.type) {
        case 'wait':
            return {
                id: row.id,
                type: 'wait',
                data: {
                    wait_hours: requireValue(row, 'wait_hours')
                }
            };
        case 'send_email':
            return {
                id: row.id,
                type: 'send_email',
                data: {
                    email_subject: requireValue(row, 'email_subject'),
                    email_lexical: requireValue(row, 'email_lexical'),
                    email_design_setting_id: requireValue(row, 'email_design_setting_id')
                }
            };
    }
}
function requireValue(row, field) {
    const value = row[field];
    if ((value === null) || (value === undefined)) {
        throw new errors_1.default.InternalServerError({
            message: (0, tpl_1.default)(messages.invalidAutomationActionRevision, {
                actionId: row.id,
                actionType: row.type,
                field
            })
        });
    }
    return value;
}
function buildEdgePayload(edge) {
    return {
        source_action_id: edge.source_action_id,
        target_action_id: edge.target_action_id
    };
}
function buildPagination(total) {
    return {
        page: 1,
        pages: 1,
        limit: 'all',
        total,
        prev: null,
        next: null
    };
}
