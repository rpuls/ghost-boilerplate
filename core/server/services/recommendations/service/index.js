"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./RecommendationController"), exports);
__exportStar(require("./RecommendationService"), exports);
__exportStar(require("./RecommendationRepository"), exports);
__exportStar(require("./InMemoryRecommendationRepository"), exports);
__exportStar(require("./Recommendation"), exports);
__exportStar(require("./WellknownService"), exports);
__exportStar(require("./BookshelfRecommendationRepository"), exports);
__exportStar(require("./ClickEvent"), exports);
__exportStar(require("./BookshelfClickEventRepository"), exports);
__exportStar(require("./SubscribeEvent"), exports);
__exportStar(require("./BookshelfSubscribeEventRepository"), exports);
__exportStar(require("./IncomingRecommendationController"), exports);
__exportStar(require("./IncomingRecommendationService"), exports);
__exportStar(require("./IncomingRecommendationEmailRenderer"), exports);
__exportStar(require("./RecommendationMetadataService"), exports);
