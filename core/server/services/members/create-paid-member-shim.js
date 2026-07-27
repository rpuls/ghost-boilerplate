"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaidMemberShim = createPaidMemberShim;
const logging_1 = __importDefault(require("@tryghost/logging"));
const models = require('../../models');
/**
 * Build a stand-in paid member for content gating — NOT a real member. It
 * carries only the `status` and `products` that
 * `contentGating.checkPostAccess` / `checkGatedBlockAccess` read, letting previews
 * (`member_status=paid`) and gift-link reads reveal gated content without a
 * logged-in member. When a tier slug is supplied the shim has only that tier,
 * including archived tiers; otherwise it has every active paid tier. Single
 * source of truth for this security-sensitive grant.
 */
async function createPaidMemberShim(tierSlug) {
    let products = [];
    try {
        if (tierSlug) {
            const paidProduct = await models.Product.findOne({ slug: tierSlug, type: 'paid' });
            if (paidProduct) {
                products = [{ slug: paidProduct.get('slug') }];
            }
        }
        else {
            const paidProducts = await models.Product.findAll({ status: 'active', type: 'paid' });
            products = paidProducts.map((product) => ({ slug: product.get('slug') }));
        }
    }
    catch (error) {
        // Fall back to no tiers rather than failing the render — still grants
        // status:paid/members content, just not tier-specific blocks.
        logging_1.default.error('Failed to build paid member shim tiers:', error);
    }
    return {
        status: 'paid',
        products
    };
}
