"use strict";
// Flat snake_case <-> camelCase key mappers. Top-level keys only: values are copied by reference
// and their types pass through untouched (T[K]). Deep case-convert libraries recurse into value
// types, which mangles branded primitives (a branded string is `string & {...}`, so it reads as an
// object and gets walked); staying flat sidesteps that and keeps the keys' value types exact.
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelKeys = camelKeys;
exports.snakeKeys = snakeKeys;
const toCamel = (key) => key.replace(/_([a-z])/g, (_full, letter) => letter.toUpperCase());
const toSnake = (key) => key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
function camelKeys(row) {
    return Object.fromEntries(Object.entries(row).map(([key, value]) => [toCamel(key), value]));
}
function snakeKeys(model) {
    return Object.fromEntries(Object.entries(model).map(([key, value]) => [toSnake(key), value]));
}
