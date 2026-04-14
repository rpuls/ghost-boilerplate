"use strict";
/* eslint-disable ghost/filenames/match-exported-class */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recommendation = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const errors_1 = __importDefault(require("@tryghost/errors"));
const unsafe_data_1 = require("./unsafe-data");
class Recommendation {
    id;
    title;
    description;
    excerpt; // Fetched from the site meta data
    featuredImage; // Fetched from the site meta data
    favicon; // Fetched from the site meta data
    url;
    oneClickSubscribe;
    createdAt;
    updatedAt;
    #clickCount;
    #subscriberCount;
    #deleted;
    get deleted() {
        return this.#deleted;
    }
    get clickCount() {
        return this.#clickCount;
    }
    get subscriberCount() {
        return this.#subscriberCount;
    }
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.excerpt = data.excerpt;
        this.featuredImage = data.featuredImage;
        this.favicon = data.favicon;
        this.url = data.url;
        this.oneClickSubscribe = data.oneClickSubscribe;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.#clickCount = data.clickCount;
        this.#subscriberCount = data.subscriberCount;
        this.#deleted = false;
    }
    static validate(properties) {
        if (properties.title.length === 0) {
            throw new errors_1.default.ValidationError({
                message: 'Title must not be empty'
            });
        }
        if (properties.title.length > 2000) {
            throw new errors_1.default.ValidationError({
                message: 'Title must be less than 2000 characters'
            });
        }
        if (properties.description && properties.description.length > 200) {
            throw new errors_1.default.ValidationError({
                message: 'Description must be less than 200 characters'
            });
        }
    }
    clean() {
        if (this.description !== null && this.description.length === 0) {
            this.description = null;
        }
        if (this.excerpt !== null && this.excerpt.length === 0) {
            this.excerpt = null;
        }
        if (this.excerpt !== null && this.excerpt.length > 2000) {
            this.excerpt = this.excerpt.slice(0, 1997) + '...';
        }
        this.createdAt.setMilliseconds(0);
        this.updatedAt?.setMilliseconds(0);
    }
    static create(data) {
        const id = data.id ?? (0, bson_objectid_1.default)().toString();
        const d = {
            id,
            title: data.title,
            description: data.description,
            excerpt: data.excerpt,
            featuredImage: new unsafe_data_1.UnsafeData(data.featuredImage, { field: ['featuredImage'] }).nullable.url,
            favicon: new unsafe_data_1.UnsafeData(data.favicon, { field: ['favicon'] }).nullable.url,
            url: new unsafe_data_1.UnsafeData(data.url, { field: ['url'] }).url,
            oneClickSubscribe: data.oneClickSubscribe,
            createdAt: data.createdAt ?? new Date(),
            updatedAt: data.updatedAt ?? null,
            clickCount: data.clickCount,
            subscriberCount: data.subscriberCount
        };
        this.validate(d);
        const recommendation = new Recommendation(d);
        recommendation.clean();
        return recommendation;
    }
    get plain() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            excerpt: this.excerpt,
            featuredImage: this.featuredImage,
            favicon: this.favicon,
            url: this.url,
            oneClickSubscribe: this.oneClickSubscribe,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            clickCount: this.clickCount,
            subscriberCount: this.subscriberCount
        };
    }
    /**
     * Change the specified properties. Properties that are set to undefined will not be changed
     */
    edit(properties) {
        // Delete undefined properties
        const newProperties = this.plain;
        let didChange = false;
        for (const key of Object.keys(properties)) {
            if (Object.prototype.hasOwnProperty.call(properties, key) && properties[key] !== undefined && properties[key] !== newProperties[key]) {
                newProperties[key] = properties[key];
                didChange = true;
            }
        }
        if (!didChange) {
            return;
        }
        newProperties.updatedAt = new Date();
        const created = Recommendation.create(newProperties);
        Object.assign(this, created);
    }
    delete() {
        this.#deleted = true;
    }
}
exports.Recommendation = Recommendation;
