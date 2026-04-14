"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsafeData = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
function serializeField(field) {
    if (field.length === 0) {
        return 'data';
    }
    return field.join('.');
}
/**
 * NOTE: should be moved to a separate package in case this pattern is found to be useful
 */
class UnsafeData {
    data;
    context;
    constructor(data, context = {}) {
        this.data = data;
        this.context = context;
    }
    get field() {
        return serializeField(this.context.field ?? []);
    }
    addKeyToField(key) {
        return this.context.field ? [...this.context.field, key] : [key];
    }
    fieldWithKey(key) {
        return serializeField(this.addKeyToField(key));
    }
    /**
     * Returns undefined if the key is not present on the object. Note that this doesn't check for null.
     */
    optionalKey(key) {
        if (typeof this.data !== 'object' || this.data === null) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be an object` });
        }
        if (!Object.prototype.hasOwnProperty.call(this.data, key)) {
            return undefined;
        }
        return new UnsafeData(this.data[key], {
            field: this.addKeyToField(key)
        });
    }
    key(key) {
        if (typeof this.data !== 'object' || this.data === null) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be an object` });
        }
        if (!Object.prototype.hasOwnProperty.call(this.data, key)) {
            throw new errors_1.default.ValidationError({ message: `${this.fieldWithKey(key)} is required` });
        }
        return new UnsafeData(this.data[key], {
            field: this.addKeyToField(key)
        });
    }
    /**
     * Use this to get a nullable value:
     * ```
     * const url: string|null = data.key('url').nullable.string
     * ```
     */
    get nullable() {
        if (this.data === null) {
            const d = {
                get string() {
                    return null;
                },
                get boolean() {
                    return null;
                },
                get number() {
                    return null;
                },
                get integer() {
                    return null;
                },
                get url() {
                    return null;
                },
                enum() {
                    return null;
                },
                key() {
                    return d;
                },
                optionalKey() {
                    return d;
                },
                get array() {
                    return null;
                },
                index() {
                    return d;
                }
            };
            return d;
        }
        return this;
    }
    get string() {
        if (typeof this.data !== 'string') {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be a string` });
        }
        return this.data;
    }
    get boolean() {
        if (typeof this.data !== 'boolean') {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be a boolean` });
        }
        return this.data;
    }
    get number() {
        if (typeof this.data === 'string') {
            const parsed = parseFloat(this.data);
            if (isNaN(parsed) || parsed.toString() !== this.data) {
                throw new errors_1.default.ValidationError({ message: `${this.field} must be a number, got ${typeof this.data}` });
            }
            return new UnsafeData(parsed, this.context).number;
        }
        if (typeof this.data !== 'number') {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be a number, got ${typeof this.data}` });
        }
        if (Number.isNaN(this.data) || !Number.isFinite(this.data)) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be a finite number` });
        }
        return this.data;
    }
    get integer() {
        if (typeof this.data === 'string') {
            const parsed = parseInt(this.data);
            if (isNaN(parsed) || parsed.toString() !== this.data) {
                throw new errors_1.default.ValidationError({ message: `${this.field} must be an integer` });
            }
            return new UnsafeData(parseInt(this.data), this.context).integer;
        }
        const number = this.number;
        if (!Number.isSafeInteger(number)) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be an integer` });
        }
        return number;
    }
    get url() {
        if (this.data instanceof URL) {
            return this.data;
        }
        const string = this.string;
        try {
            const url = new URL(string);
            if (!['http:', 'https:'].includes(url.protocol)) {
                throw new errors_1.default.ValidationError({ message: `${this.field} must be a valid URL` });
            }
            return url;
        }
        catch {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be a valid URL` });
        }
    }
    enum(allowedValues) {
        if (!allowedValues.includes(this.data)) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be one of ${allowedValues.join(', ')}` });
        }
        return this.data;
    }
    get array() {
        if (!Array.isArray(this.data)) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be an array` });
        }
        return this.data.map((d, i) => new UnsafeData(d, { field: this.addKeyToField(`${i}`) }));
    }
    index(index) {
        const arr = this.array;
        if (index < 0 || !Number.isSafeInteger(index)) {
            throw new errors_1.default.IncorrectUsageError({ message: `index must be a positive integer` });
        }
        if (index >= arr.length) {
            throw new errors_1.default.ValidationError({ message: `${this.field} must be an array of length ${index + 1}` });
        }
        return arr[index];
    }
}
exports.UnsafeData = UnsafeData;
