"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poll = void 0;
const logging_1 = __importDefault(require("@tryghost/logging"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const constants_1 = require("../member-welcome-emails/constants");
const constants_2 = require("./constants");
// @ts-expect-error Models currently lack type definitions.
const models_1 = require("../../models");
const slugToMemberStatus = new Map(Object.entries(constants_1.MEMBER_WELCOME_EMAIL_SLUGS).map(([status, slug]) => [slug, status]));
const hasUpdatesAndAnnouncementsEnabled = (member) => {
    const preference = member.get('enable_updates_and_announcements');
    if (preference !== null) {
        return preference;
    }
    const isSubscribedToAnyNewsletters = member.related('newsletters').models.length > 0;
    return isSubscribedToAnyNewsletters;
};
const markMaxAttemptsExceeded = async (automationsApi, step) => {
    await automationsApi.markStepTerminal(step, 'failed');
    logging_1.default.warn({
        system: {
            event: 'automations.poll.max_attempts',
            step_id: step.id
        }
    }, `[AUTOMATIONS] Step ${step.id} exceeded max attempts`);
};
const handleStepExecutionFailure = async ({ automationsApi, err, step }) => {
    logging_1.default.error({
        err,
        system: {
            event: 'automations.poll.step_execution_failed',
            step_id: step.id
        }
    }, `[AUTOMATIONS] Failed to execute automation step ${step.id}`);
    if (step.step_attempts < constants_2.MAX_ATTEMPTS) {
        const retryAt = new Date(Date.now() + constants_2.RETRY_DELAY_MS);
        const didRetry = await automationsApi.retryStep(step, retryAt);
        if (didRetry) {
            return retryAt;
        }
    }
    else {
        await markMaxAttemptsExceeded(automationsApi, step);
    }
    return null;
};
const processStep = async ({ automationsApi, memberWelcomeEmailService, step }) => {
    if (step.automation_status !== 'active') {
        await automationsApi.markStepTerminal(step, 'automation disabled');
        return null;
    }
    if (step.step_attempts > constants_2.MAX_ATTEMPTS) {
        await markMaxAttemptsExceeded(automationsApi, step);
        return null;
    }
    // NOTE: This will change once we support additional automation triggers.
    const memberStatus = slugToMemberStatus.get(step.automation_slug);
    if (!memberStatus) {
        logging_1.default.error({
            system: {
                event: 'automations.poll.unknown_slug',
                slug: step.automation_slug,
                step_id: step.id
            }
        }, `[AUTOMATIONS] Unknown automation slug: ${step.automation_slug}`);
        await automationsApi.markStepTerminal(step, 'failed');
        return null;
    }
    if (!step.member_id) {
        await automationsApi.markStepTerminal(step, 'member unsubscribed');
        return null;
    }
    const member = await models_1.Member.findOne({ id: step.member_id }, { withRelated: ['newsletters'] });
    if (!member) {
        // It's possible that the member was deleted between the time the step was fetched and now, though it's
        // unlikely. That's why we log a warning, not an error.
        logging_1.default.warn({
            system: {
                event: 'automations.poll.member_missing',
                member_id: step.member_id,
                step_id: step.id
            }
        }, `[AUTOMATIONS] Member ${step.member_id} for step ${step.id} doesn't exist`);
        await automationsApi.markStepTerminal(step, 'member unsubscribed');
        return null;
    }
    const eligibleStatuses = constants_1.MEMBER_WELCOME_EMAIL_ELIGIBLE_STATUSES[memberStatus];
    if (!eligibleStatuses.includes(member.get('status') ?? '')) {
        await automationsApi.markStepTerminal(step, 'member changed status');
        return null;
    }
    let nextReadyAt = null;
    try {
        switch (step.type) {
            case 'wait':
                break;
            case 'send_email':
                if (!hasUpdatesAndAnnouncementsEnabled(member)) {
                    logging_1.default.info({
                        system: {
                            event: 'automations.poll.skipped_unsubscribed_member',
                            member_id: step.member_id,
                            step_id: step.id
                        }
                    }, `[AUTOMATIONS] Member ${step.member_id} for step ${step.id} has unsubscribed from emails. Fast-finishing this step`);
                    break;
                }
                memberWelcomeEmailService.init();
                await memberWelcomeEmailService.api.sendAutomationEmail({
                    email: {
                        designSettingId: step.email_design_setting_id,
                        lexical: step.email_lexical,
                        subject: step.email_subject
                    },
                    member: {
                        email: member.get('email'),
                        name: member.get('name'),
                        uuid: member.get('uuid')
                    },
                    memberStatus
                });
                try {
                    await models_1.AutomatedEmailRecipient.add({
                        member_id: step.member_id,
                        member_uuid: member.get('uuid'),
                        member_email: member.get('email'),
                        member_name: member.get('name'),
                        automation_action_revision_id: step.automation_action_revision_id
                    });
                }
                catch (err) {
                    logging_1.default.error({
                        err,
                        system: {
                            event: 'automations.poll.recipient_persistence_failed',
                            member_id: step.member_id,
                            step_id: step.id
                        }
                    }, `[AUTOMATIONS] Failed to record automated email recipient for step ${step.id}`);
                }
                break;
            default: {
                const _exhaustive = step;
                throw new errors_1.default.InternalServerError({
                    message: `Unexpected automation step type ${_exhaustive}`
                });
            }
        }
        nextReadyAt = await automationsApi.finishStepAndEnqueueNext(step);
    }
    catch (err) {
        return await handleStepExecutionFailure({
            automationsApi,
            err,
            step
        });
    }
    return nextReadyAt;
};
const dateMin = (a, b) => {
    if (!a) {
        return b;
    }
    if (!b) {
        return a;
    }
    return a < b ? a : b;
};
const poll = async ({ automationsApi, enqueueAnotherPollAt, memberWelcomeEmailService }) => {
    const { steps, nextStepReadyAt } = await automationsApi.fetchAndLockSteps(constants_2.MAX_STEPS_PER_BATCH);
    let nextPollAt = nextStepReadyAt;
    // If the batch is full, we might have more steps to execute later.
    //
    // This could request an unnecessary poll if `steps.length === MAX_STEPS_PER_BATCH`.
    //
    // Alternatively, we could do additional database operations to reliably determine whether an extra poll is needed.
    // For example, we could fetch `MAX_STEPS_PER_BATCH + 1`, or select `COUNT(*)`. I think that complexity is not
    // worth it.
    if (steps.length >= constants_2.MAX_STEPS_PER_BATCH) {
        nextPollAt = dateMin(nextPollAt, new Date());
    }
    await Promise.all(steps.map(async (step) => {
        try {
            const stepNextPollAt = await processStep({
                automationsApi,
                memberWelcomeEmailService,
                step
            });
            nextPollAt = dateMin(nextPollAt, stepNextPollAt);
        }
        catch (err) {
            logging_1.default.error({
                err,
                system: {
                    event: 'automations.poll.step_failed',
                    step_id: step.id
                }
            }, `[AUTOMATIONS] Failed to process automation step ${step.id}`);
            return;
        }
    }));
    if (nextPollAt) {
        enqueueAnotherPollAt(nextPollAt);
    }
};
exports.poll = poll;
