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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSVTransform = createCSVTransform;
const node_stream_1 = require("node:stream");
const papaparse = __importStar(require("papaparse"));
const errors_1 = require("@tryghost/errors");
/**
 * Converts post objects into a CSV, one row at a time.
 *
 * Pipe a `Readable` of post objects in, pipe CSV string out.
 */
function createCSVTransform() {
    let fields = null;
    return new node_stream_1.Transform({
        objectMode: true,
        transform(post, _encoding, callback) {
            try {
                if (fields === null) {
                    // Lock the column list from the first row's keys, then emit
                    // the header + the row in a single chunk.
                    fields = Object.keys(post);
                    const csv = papaparse.unparse({ fields, data: [post] }, {
                        header: true,
                        escapeFormulae: true
                    });
                    callback(null, csv);
                    return;
                }
                // Subsequent rows reuse the locked-in field list and skip the header.
                const csv = papaparse.unparse({ fields, data: [post] }, {
                    header: false,
                    escapeFormulae: true
                });
                // papaparse never prepends or appends a newline around its output,
                // so we add exactly one CRLF to separate this row from the previous.
                callback(null, '\r\n' + csv);
            }
            catch (err) {
                callback(err instanceof Error ? err : new errors_1.InternalServerError({ message: String(err) }));
            }
        }
    });
}
