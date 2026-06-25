"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSVStreamResponse = createCSVStreamResponse;
const node_stream_1 = require("node:stream");
const errors_1 = require("@tryghost/errors");
/**
 * Builds the `frame.response` handler for a streaming CSV download, centralising
 * the wiring shared by every CSV export: the Content-Type/Content-Disposition
 * headers, the `no-transform` cache directive (so proxies don't recompress and
 * corrupt the byte stream), and `pipeline()` piping that tears down every stream
 * on error.
 */
function createCSVStreamResponse({ source, transform, filename }) {
    return function streamResponse(req, res, next) {
        if (!filename) {
            return next(new errors_1.InternalServerError({
                message: 'Missing CSV export filename'
            }));
        }
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `Attachment; filename="${filename}"`);
        const cacheControl = res.getHeader('Cache-Control');
        const cacheControlDirectives = cacheControl ? String(cacheControl).split(',').map((value) => value.trim().toLowerCase()) : [];
        if (!cacheControlDirectives.includes('no-transform')) {
            res.setHeader('Cache-Control', cacheControl ? `${cacheControl}, no-transform` : 'no-transform');
        }
        (0, node_stream_1.pipeline)(source, transform, res, (err) => {
            // On success, pipeline has already ended the response and there's no
            // downstream middleware waiting. Only forward errors so the framework's
            // error handler can log them and (if possible) send a status to the client.
            if (err) {
                next(err);
            }
        });
    };
}
