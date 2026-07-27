"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parse;
const node_stream_1 = require("node:stream");
const papaparse_1 = __importDefault(require("papaparse"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const transformValue = (header, value) => {
    if (header === 'labels') {
        if (value && typeof value === 'string') {
            return value.split(',').map(name => ({ name }));
        }
        return [];
    }
    if (header === 'subscribed') {
        return value.toLowerCase() !== 'false';
    }
    if (header === 'complimentary_plan') {
        return value.toLowerCase() === 'true';
    }
    if (value === '') {
        return null;
    }
    if (value === 'undefined') {
        return null;
    }
    if (value.toLowerCase() === 'false') {
        return false;
    }
    if (value.toLowerCase() === 'true') {
        return true;
    }
    return value;
};
/**
 * @param path - The path to the CSV to prepare
 * @param headerMapping - An object whose keys are headers in the input CSV and values are the header to replace it with
 * @param defaultLabels - A list of labels to apply to every parsed member row
 * @returns The parsed member rows, keyed by mapped header
 */
function parse(path, headerMapping, defaultLabels = []) {
    return new Promise(function (resolve, reject) {
        const csvFileStream = fs_extra_1.default.createReadStream(path);
        const csvParserStream = papaparse_1.default.parse(papaparse_1.default.NODE_STREAM_INPUT, {
            header: true
        });
        const rows = [];
        const parsedCSVStream = (0, node_stream_1.pipeline)(csvFileStream, csvParserStream, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
        parsedCSVStream.on('data', (parsedRow) => {
            // a throw here escapes as an uncaught exception and leaves this
            // promise forever unsettled, so it has to become a rejection
            try {
                const row = {};
                for (const [header, value] of Object.entries(parsedRow)) {
                    // papaparse gathers the overflow from a row carrying more
                    // fields than there are headers under __parsed_extra, as an
                    // array rather than a cell any mapping can name
                    if (typeof value !== 'string') {
                        continue;
                    }
                    // hasOwn, not `in`: a column named after an Object.prototype
                    // member would otherwise pass as mapped and take a function
                    // as its mapped name
                    if (!headerMapping || !Object.hasOwn(headerMapping, header)) {
                        continue;
                    }
                    const mappedHeader = headerMapping[header];
                    row[mappedHeader] = transformValue(mappedHeader, value);
                }
                // skip rows with no data
                if (!Object.keys(row).length) {
                    return;
                }
                // labels is absent when the column is unmapped, and an array otherwise
                const parsedLabels = row.labels;
                row.labels = [
                    ...(Array.isArray(parsedLabels) ? parsedLabels : []),
                    ...defaultLabels
                ];
                rows.push(row);
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
