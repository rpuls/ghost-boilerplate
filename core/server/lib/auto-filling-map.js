"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFillingMap = void 0;
/**
 * A Map that lazily computes missing values via the supplied function.
 * Equivalent to the stage-4 `Map.prototype.getOrInsertComputed` proposal.
 *
 * Consumers can be typed as `ReadonlyMap<K, V>` so they only see `.get`
 * (and `.has`, etc.); the owner keeps full Map semantics including
 * `.delete(key)` and `.clear()` for invalidation flows.
 */
class AutoFillingMap extends Map {
    #compute;
    constructor(compute) {
        super();
        this.#compute = compute;
    }
    get(key) {
        if (!super.has(key)) {
            super.set(key, this.#compute(key));
        }
        return super.get(key);
    }
}
exports.AutoFillingMap = AutoFillingMap;
