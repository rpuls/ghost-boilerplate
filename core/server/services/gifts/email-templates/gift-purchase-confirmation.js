"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderText = renderText;
function renderText(data, t) {
    const intro = t('Thank you for your support. Share the link below with whoever you\'d like to gift them a {cadenceLabel} {tierName} membership to {siteTitle}.', {
        cadenceLabel: data.gift.cadenceLabel,
        tierName: data.gift.tierName,
        siteTitle: data.siteTitle,
        interpolation: { escapeValue: false }
    });
    return `${t('Your gift is ready')}

${intro}

${data.gift.link}

${t('The link expires on {expiresAt} and can only be redeemed once.', {
        expiresAt: data.gift.expiresAt,
        interpolation: { escapeValue: false }
    })}

---
${t('This message was sent from {siteDomain} to {email}.', {
        siteDomain: data.siteDomain,
        email: data.toEmail,
        interpolation: { escapeValue: false }
    })}`;
}
