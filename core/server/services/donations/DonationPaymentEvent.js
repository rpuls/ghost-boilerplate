"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationPaymentEvent = void 0;
class DonationPaymentEvent {
    timestamp;
    name;
    email;
    memberId;
    amount;
    currency;
    donationMessage;
    attributionId;
    attributionUrl;
    attributionType;
    referrerSource;
    referrerMedium;
    referrerUrl;
    constructor(data, timestamp) {
        this.timestamp = timestamp;
        this.name = data.name;
        this.email = data.email;
        this.memberId = data.memberId;
        this.amount = data.amount;
        this.currency = data.currency;
        this.donationMessage = data.donationMessage;
        this.attributionId = data.attributionId;
        this.attributionUrl = data.attributionUrl;
        this.attributionType = data.attributionType;
        this.referrerSource = data.referrerSource;
        this.referrerMedium = data.referrerMedium;
        this.referrerUrl = data.referrerUrl;
    }
    static create(data, timestamp) {
        return new DonationPaymentEvent(data, timestamp ?? new Date());
    }
}
exports.DonationPaymentEvent = DonationPaymentEvent;
