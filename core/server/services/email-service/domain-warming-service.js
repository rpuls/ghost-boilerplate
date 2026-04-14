"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainWarmingService = void 0;
const DefaultWarmupOptions = {
    start: 200,
    end: 200000,
    totalDays: 42
};
class DomainWarmingService {
    #emailModel;
    #config;
    #warmupConfig;
    constructor(dependencies) {
        this.#emailModel = dependencies.models.Email;
        this.#config = dependencies.config;
        this.#warmupConfig = DefaultWarmupOptions;
    }
    /**
     * @returns Whether the domain warming feature is enabled
     */
    isEnabled() {
        const fallbackDomain = this.#config.get('hostSettings:managedEmail:fallbackDomain');
        const fallbackAddress = this.#config.get('hostSettings:managedEmail:fallbackAddress');
        return Boolean(fallbackDomain && fallbackAddress);
    }
    async #getDaysSinceFirstEmail() {
        const res = await this.#emailModel.findPage({
            filter: 'csd_email_count:-null',
            order: 'created_at ASC',
            limit: 1
        });
        if (!res.data.length) {
            return 0;
        }
        return Math.floor((Date.now() - new Date(res.data[0].get('created_at')).getTime()) / (1000 * 60 * 60 * 24));
    }
    /**
     * Get the maximum amount of emails that should be sent from the warming sending domain in today's newsletter
     * @param emailCount The total number of emails to be sent in this newsletter
     * @returns The number of emails that should be sent from the warming sending domain (remaining emails to be sent from fallback domain)
     */
    async getWarmupLimit(emailCount) {
        const day = await this.#getDaysSinceFirstEmail();
        let limit = 0;
        if (day >= this.#warmupConfig.totalDays) {
            // Max limit if we're after the warm-up period
            limit = Infinity;
        }
        else {
            // Interpolate the warmup amount
            limit = Math.round(this.#warmupConfig.start *
                Math.pow(this.#warmupConfig.end / this.#warmupConfig.start, day / (this.#warmupConfig.totalDays - 1)));
        }
        return Math.min(emailCount, limit);
    }
}
exports.DomainWarmingService = DomainWarmingService;
