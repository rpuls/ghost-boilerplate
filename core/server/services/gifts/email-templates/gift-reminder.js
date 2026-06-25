"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderText = renderText;
function renderText(data, t) {
    const greeting = data.firstName
        ? t('Hi {firstName},', { firstName: data.firstName, interpolation: { escapeValue: false } })
        : t('Hey there,');
    return `${greeting}

${t('Your gift subscription to {siteTitle} ends on {consumesAt}.', {
        siteTitle: data.siteTitle,
        consumesAt: data.gift.consumesAt,
        interpolation: { escapeValue: false }
    })}

${t('To keep your {tierName} membership, continue with a paid subscription today and we\'ll automatically add the rest of your gift period as a free trial.', {
        tierName: data.gift.tierName,
        interpolation: { escapeValue: false }
    })}

${t('Continue subscription')}:
${data.gift.manageSubscriptionUrl}

${t('Thanks for reading {siteTitle}.', {
        siteTitle: data.siteTitle,
        interpolation: { escapeValue: false }
    })}

---
${t('This message was sent from {siteDomain} to {email}.', {
        siteDomain: data.siteDomain,
        email: data.memberEmail,
        interpolation: { escapeValue: false }
    })}`;
}
