"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeToYaml = exports.parseYaml = exports.parseJson = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const errors = __importStar(require("@tryghost/errors"));
const messages = {
    jsonParse: 'Could not parse JSON: {context}.',
    jsonInvalid: 'JSON input must be an array of redirect objects.',
    yamlParse: 'Could not parse YAML: {context}.',
    yamlInvalid: 'YAML input is invalid. Check the contents of your YAML file.',
    redirectsHelp: 'https://ghost.org/docs/themes/routing/#redirects'
};
const parseJson = (content) => {
    let parsed;
    try {
        parsed = JSON.parse(content);
    }
    catch (err) {
        throw new errors.BadRequestError({
            message: (0, tpl_1.default)(messages.jsonParse, { context: err.message })
        });
    }
    if (!Array.isArray(parsed)) {
        throw new errors.BadRequestError({
            message: (0, tpl_1.default)(messages.jsonInvalid),
            help: (0, tpl_1.default)(messages.redirectsHelp)
        });
    }
    return parsed;
};
exports.parseJson = parseJson;
const isPlainMapping = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const parseYaml = (content) => {
    let configYaml;
    try {
        configYaml = js_yaml_1.default.load(content);
    }
    catch (err) {
        throw new errors.BadRequestError({
            message: (0, tpl_1.default)(messages.yamlParse, { context: err.message })
        });
    }
    // A list, scalar, or empty file would otherwise produce zero redirects
    // and silently wipe the live config via `replaceAll([])` on upload.
    if (!isPlainMapping(configYaml)) {
        throw new errors.BadRequestError({
            message: (0, tpl_1.default)(messages.yamlInvalid),
            help: (0, tpl_1.default)(messages.redirectsHelp)
        });
    }
    // Same silent-wipe risk for a mapping with no recognised section.
    if (!Object.hasOwn(configYaml, '301') && !Object.hasOwn(configYaml, '302')) {
        throw new errors.BadRequestError({
            message: (0, tpl_1.default)(messages.yamlInvalid),
            help: (0, tpl_1.default)(messages.redirectsHelp)
        });
    }
    const redirects = [];
    for (const statusCode of ['302', '301']) {
        const section = configYaml[statusCode];
        // `301:` / `302:` with no entries parses as null — tolerated.
        if (section === undefined || section === null) {
            continue;
        }
        if (!isPlainMapping(section)) {
            throw new errors.BadRequestError({
                message: (0, tpl_1.default)(messages.yamlInvalid),
                help: (0, tpl_1.default)(messages.redirectsHelp)
            });
        }
        for (const from in section) {
            const to = section[from];
            // YAML coerces `: 123` to a number and `: ~` to null; reject
            // both here so the error points at the YAML rather than at
            // a coerced redirect entry downstream.
            if (typeof to !== 'string') {
                throw new errors.BadRequestError({
                    message: (0, tpl_1.default)(messages.yamlInvalid),
                    help: (0, tpl_1.default)(messages.redirectsHelp)
                });
            }
            redirects.push({ from, to, permanent: statusCode === '301' });
        }
    }
    return redirects;
};
exports.parseYaml = parseYaml;
// Round-trips through parseYaml to []. Avoids a "download → save →
// re-upload throws on empty body" footgun on fresh installs.
const EMPTY_DOWNLOAD_TEMPLATE = '# See https://ghost.org/docs/themes/routing/#redirects\n301: {}\n302: {}\n';
const serializeToYaml = (redirects) => {
    const permanent = [];
    const temporary = [];
    for (const redirect of redirects) {
        if (redirect.permanent) {
            permanent.push(redirect);
        }
        else {
            temporary.push(redirect);
        }
    }
    const sections = [];
    if (permanent.length > 0) {
        sections.push(formatSection('301', permanent));
    }
    if (temporary.length > 0) {
        sections.push(formatSection('302', temporary));
    }
    if (sections.length === 0) {
        return EMPTY_DOWNLOAD_TEMPLATE;
    }
    return sections.join('\n');
};
exports.serializeToYaml = serializeToYaml;
// Section headers are emitted by hand because js-yaml quotes
// numeric-string keys (`"301":`), diverging from the unquoted form
// every existing redirects.yaml file ships with. Pairs go through
// js-yaml so special-char escaping stays correct. lineWidth: -1
// disables line folding so long URLs aren't rewritten into `>-`
// block scalars the user never authored.
const formatSection = (statusCode, redirects) => {
    const lines = [`${statusCode}:`];
    for (const redirect of redirects) {
        const pair = js_yaml_1.default.dump({ [redirect.from]: redirect.to }, { lineWidth: -1 });
        for (const line of pair.split('\n')) {
            if (line === '') {
                continue;
            }
            lines.push(`  ${line}`);
        }
    }
    return lines.join('\n') + '\n';
};
