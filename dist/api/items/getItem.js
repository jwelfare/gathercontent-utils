"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemContent = void 0;
const gcFetch_1 = require("../../util/gcFetch");
const generateSlug_1 = require("../../util/generateSlug");
const reduceFields_1 = require("../../util/reduceFields");
const getItemContent = (itemId, params, credentials) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const includeParam = new Set(params.include);
    includeParam.add('structure');
    const structureParams = Object.assign(Object.assign({}, params), { include: [...includeParam] });
    const res = yield (0, gcFetch_1.gcFetch)(`items/${itemId}`, structureParams, credentials);
    const itemData = res.data;
    const itemContent = (_a = itemData.structure) === null || _a === void 0 ? void 0 : _a.groups.reduce((acc, group) => (Object.assign(Object.assign({}, acc), { [(0, generateSlug_1.createSlug)(group.name, acc, true)]: (0, reduceFields_1.reduceFields)(itemData.content, group.fields) })), {});
    return Object.assign(Object.assign({}, itemData), { name: (0, generateSlug_1.createSlug)(itemData.name), content: itemContent });
});
exports.getItemContent = getItemContent;
