/**
 * This patch fixes a CJS/ESM interoperability issue with the `cron-validate` package.
 * Some dependencies expect `require('cron-validate')` to return a function, but newer
 * versions return an object with a `default` property (e.g., `{ default: [Function] }`).
 *
 * This script pre-loads the module, extracts the actual function from the `default`
 * property, and then overwrites the require cache. Any subsequent `require('cron-validate')`
 * call will receive the function directly, satisfying the dependencies.
 */
const cronValidateModule = require('cron-validate');
if (cronValidateModule && cronValidateModule.default) {
    require.cache[require.resolve('cron-validate')].exports = cronValidateModule.default;
}
