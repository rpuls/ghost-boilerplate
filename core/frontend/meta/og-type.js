"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOgType = getOgType;
function getOgType(data) {
    const context = data.context ? data.context[0] : null;
    if (context === 'author') {
        return 'profile';
    }
    if (context === 'post') {
        return 'article';
    }
    return 'website';
}
