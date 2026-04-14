"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationBookshelfRepository = void 0;
class DonationBookshelfRepository {
    #Model;
    constructor({ DonationPaymentEventModel }) {
        this.#Model = DonationPaymentEventModel;
    }
    async save(event) {
        await this.#Model.add({
            name: event.name,
            email: event.email,
            member_id: event.memberId,
            amount: event.amount,
            currency: event.currency,
            donation_message: event.donationMessage,
            attribution_id: event.attributionId,
            attribution_url: event.attributionUrl,
            attribution_type: event.attributionType,
            referrer_source: event.referrerSource,
            referrer_medium: event.referrerMedium,
            referrer_url: event.referrerUrl,
            utm_source: event.utmSource,
            utm_medium: event.utmMedium,
            utm_campaign: event.utmCampaign,
            utm_term: event.utmTerm,
            utm_content: event.utmContent
        });
    }
}
exports.DonationBookshelfRepository = DonationBookshelfRepository;
