"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serializers_1 = require("../../../../../services/gift-links/serializers");
const serializeGiftLinks = (post, _apiConfig, frame) => {
    frame.response = serializers_1.toGiftLinksResponse.parse(post.giftLinks);
};
// module.exports (not export): the API framework loads serializers via require(). The endpoint ->
// serializer mapping lives here; the response shaping lives with the gift-links service module.
module.exports = {
    read: serializeGiftLinks,
    issue: serializeGiftLinks,
    reissue: serializeGiftLinks,
    revokeAll(data, _apiConfig, frame) {
        frame.response = serializers_1.toRevokeAllResponse.parse(data);
    }
};
