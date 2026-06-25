"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectAndSend = void 0;
const node_net_1 = __importDefault(require("node:net"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const getErrorCode = (err) => (err && typeof err === 'object' && 'code' in err && typeof err.code === 'string'
    ? err.code
    : undefined);
const isValidPort = (port) => (typeof port === 'number' &&
    Number.isInteger(port) &&
    port >= 1 &&
    port <= 65535);
const hasSocketAddress = (socketAddress) => (typeof socketAddress?.host === 'string' && Boolean(socketAddress.host) &&
    isValidPort(socketAddress.port));
const connectAndSend = (socketAddress, message) => {
    // Very basic guard against bad calls
    if (!hasSocketAddress(socketAddress) || !logging_1.default || !logging_1.default.info || !logging_1.default.warn || message === undefined) {
        return Promise.resolve();
    }
    const client = new node_net_1.default.Socket();
    return new Promise((resolve) => {
        const connect = (options) => {
            let wasResolved = false;
            const waitTimeout = setTimeout(() => {
                logging_1.default.info('Bootstrap socket timed out.');
                if (!client.destroyed) {
                    client.destroy();
                }
                if (wasResolved) {
                    return;
                }
                wasResolved = true;
                resolve();
            }, 1000 * 5);
            client.connect(socketAddress.port, socketAddress.host, () => {
                if (waitTimeout) {
                    clearTimeout(waitTimeout);
                }
                client.write(JSON.stringify(message));
                if (wasResolved) {
                    return;
                }
                wasResolved = true;
                resolve();
            });
            client.on('close', () => {
                logging_1.default.info('Bootstrap client was closed.');
                if (waitTimeout) {
                    clearTimeout(waitTimeout);
                }
            });
            client.on('error', (err) => {
                logging_1.default.warn(`Can't connect to the bootstrap socket (${socketAddress.host} ${socketAddress.port}) ${getErrorCode(err)}.`);
                client.removeAllListeners();
                if (waitTimeout) {
                    clearTimeout(waitTimeout);
                }
                if (options.tries < 3) {
                    logging_1.default.warn(`Tries: ${options.tries}`);
                    // retry
                    logging_1.default.warn('Retrying...');
                    const retryTimeout = setTimeout(() => {
                        clearTimeout(retryTimeout);
                        connect({ tries: options.tries + 1 });
                    }, 150);
                }
                else {
                    if (wasResolved) {
                        return;
                    }
                    wasResolved = true;
                    resolve();
                }
            });
        };
        connect({ tries: 0 });
    });
};
exports.connectAndSend = connectAndSend;
