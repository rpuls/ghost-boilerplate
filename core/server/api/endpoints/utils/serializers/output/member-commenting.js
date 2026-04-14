"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const members_1 = __importDefault(require("./members"));
// module.exports required - using `export` causes the module to fail to register
// with the web framework as it's loaded via require()
module.exports = {
    disable: members_1.default.edit,
    enable: members_1.default.edit
};
