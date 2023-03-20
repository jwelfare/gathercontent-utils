"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentify = void 0;
const generateSlug_1 = require("./generateSlug");
const reduceFields_1 = require("./reduceFields");
const contentify = (item) => {
    var _a;
    const itemContent = (_a = item.structure) === null || _a === void 0 ? void 0 : _a.groups.reduce((acc, group) => (Object.assign(Object.assign({}, acc), { [(0, generateSlug_1.createSlug)(group.name, acc, true)]: (0, reduceFields_1.reduceFields)(item.content, group.fields) })), {});
    return {
        name: (0, generateSlug_1.createSlug)(item.name, {}, true),
        content: itemContent,
    };
};
exports.contentify = contentify;
