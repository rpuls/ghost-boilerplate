"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackPingService = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("./constants");
/**
 * @TODO: change this function to check for the properties we depend on
 */
function hasPostProperties(data) {
    return Object.prototype.hasOwnProperty.call(data, 'html') && Object.prototype.hasOwnProperty.call(data, 'title') && Object.prototype.hasOwnProperty.call(data, 'slug');
}
class SlackPingService {
    blogIcon;
    events;
    logging;
    request;
    settingsCache;
    urlService;
    urlUtils;
    postListener;
    testListener;
    constructor({ blogIcon, events, logging, request, settingsCache, urlService, urlUtils }) {
        this.blogIcon = blogIcon;
        this.events = events;
        this.logging = logging;
        this.request = request;
        this.settingsCache = settingsCache;
        this.urlService = urlService;
        this.urlUtils = urlUtils;
        // Stable references so removeListener() can de-register them across reboots.
        this.postListener = this.handlePostEvent.bind(this);
        this.testListener = this.handleTestEvent.bind(this);
    }
    getSlackSettings() {
        const username = this.settingsCache.get('slack_username');
        const url = this.settingsCache.get('slack_url');
        return {
            username,
            url
        };
    }
    ping(post) {
        let message;
        let title = null;
        let author = null;
        let description;
        let slackData = {};
        const slackSettings = this.getSlackSettings();
        const blogTitle = this.settingsCache.get('title');
        // If this is a post, we want to send the link of the post
        if (hasPostProperties(post)) {
            message = this.urlService.facade.getUrlForResource({ ...post, type: 'posts' }, { absolute: true });
            title = post.title ? post.title : null;
            author = post.authors ? post.authors[0] : null;
            if (post.custom_excerpt) {
                description = post.custom_excerpt;
            }
            else if (post.html) {
                const membersContentIdx = post.html.indexOf('<!--members-only-->');
                const substringEnd = membersContentIdx > -1 ? membersContentIdx : post.html.length;
                // Remove members-only content
                let plaintext = post.html.substring(0, substringEnd);
                // Strip out HTML to a fixed point: a single replace pass can
                // leave a tag reconstructed from nested input, so repeat until
                // nothing changes
                let previous;
                do {
                    previous = plaintext;
                    plaintext = plaintext.replace(/<[^>]+>/g, '');
                } while (plaintext !== previous);
                description = `${plaintext
                    // Split into sentences
                    .split('.')
                    // Remove empty strings
                    .filter(sentence => sentence.trim() !== '')
                    // Get the first three sentences
                    .slice(0, 3)
                    // Join 'em back together
                    .join('.')}.`;
            }
            else {
                description = null;
            }
        }
        else {
            message = post.message;
        }
        // Quit here if slack integration is not activated
        if (slackSettings && slackSettings.url && slackSettings.url !== '') {
            const username = slackSettings.username ? slackSettings.username : 'Ghost';
            // Only ping when not a page
            if (post.type === 'page') {
                return;
            }
            // Don't ping for the default posts.
            // This also handles the case where during Ghost's first run
            // model loading inserts this post but permissions.init() hasn't
            // (can't) run yet.
            if (post.slug && constants_1.defaultPostSlugs.indexOf(post.slug) > -1) {
                return;
            }
            if (hasPostProperties(post)) {
                slackData = {
                    // We are handling the case of test notification here by checking
                    // if it is a post or a test message to check webhook working.
                    text: `Notification from *${blogTitle}* :ghost:`,
                    unfurl_links: true,
                    icon_url: this.blogIcon.getIconUrl({ absolute: true }),
                    username,
                    // We don't want to send attachment if it is a test notification.
                    attachments: [
                        {
                            fallback: 'Sorry, content cannot be shown.',
                            title: title,
                            title_link: message,
                            author_name: blogTitle,
                            image_url: post ? this.urlUtils.urlFor('image', { image: post.feature_image }, true) : null,
                            color: '#008952',
                            fields: [
                                {
                                    title: 'Description',
                                    value: description,
                                    short: false
                                }
                            ]
                        },
                        {
                            fallback: 'Sorry, content cannot be shown.',
                            color: '#008952',
                            thumb_url: author ? this.urlUtils.urlFor('image', { image: author.profile_image }, true) : null,
                            fields: [
                                {
                                    title: 'Author',
                                    value: author ? `<${this.urlService.facade.getUrlForResource({ ...author, type: 'authors' }, { absolute: true })} | ${author.name}>` : null,
                                    short: true
                                }
                            ],
                            footer: blogTitle,
                            footer_icon: this.blogIcon.getIconUrl({ absolute: true }),
                            ts: (0, moment_1.default)().unix()
                        }
                    ]
                };
            }
            else {
                slackData = {
                    text: message,
                    unfurl_links: true,
                    icon_url: this.blogIcon.getIconUrl({ absolute: true }),
                    username
                };
            }
            return this.request(slackSettings.url, {
                body: JSON.stringify(slackData),
                headers: {
                    'Content-type': 'application/json'
                }
            }).catch((err) => {
                this.logging.error(new errors_1.default.InternalServerError({
                    err: err,
                    context: (0, tpl_1.default)(constants_1.messages.requestFailedError, { service: 'slack' }),
                    help: (0, tpl_1.default)(constants_1.messages.requestFailedHelp, { url: 'https://ghost.org/docs/' })
                }));
            });
        }
    }
    /**
     * Event listener for post.published events
     */
    handlePostEvent(model, options) {
        // CASE: do not ping slack if we import a database
        // TODO: refactor post.published events to never fire on importing
        if (options && options.importing) {
            return;
        }
        this.ping({
            ...model.toJSON(),
            authors: model.related('authors').toJSON(),
            // tags are needed so the lazy URL service can evaluate collection
            // filters (e.g. `tag:foo`) when resolving the post URL; without them
            // a tag-filtered post resolves to /404/
            tags: model.related('tags').toJSON()
        });
    }
    /**
     * Event listener for the slack.test event fired by the Admin API to
     * verify the webhook configuration.
     */
    handleTestEvent() {
        this.ping({
            message: 'Heya! This is a test notification from your Ghost blog :smile:. Seems to work fine!'
        });
    }
    /**
     * Register event listeners for the Slack ping integration.
     *
     * The slack.test event comes from the API rather than a direct call,
     * which was done long ago to avoid circular dependencies.
     */
    subscribeEvents() {
        this.events
            .removeListener('post.published', this.postListener)
            .on('post.published', this.postListener);
        this.events
            .removeListener('slack.test', this.testListener)
            .on('slack.test', this.testListener);
    }
}
exports.SlackPingService = SlackPingService;
