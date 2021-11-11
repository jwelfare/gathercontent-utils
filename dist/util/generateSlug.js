"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlug = void 0;
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
const slugify_1 = __importDefault(require("slugify"));
const createSlug = (string, existingSlugs = {}, convertToCamelCase = false) => {
    const stringToLower = string.toLowerCase();
    const slugged = (0, slugify_1.default)(stringToLower, { remove: /[*+~.,()/'"!:@]/g });
    const convertedSlug = convertToCamelCase ? Object.keys((0, camelcase_keys_1.default)({ [slugged]: string }))[0] : slugged;
    const duplicateKeys = Object.keys(existingSlugs).filter((slug) => slug === convertedSlug);
    return duplicateKeys.length ? `${convertedSlug}${duplicateKeys.length + 1}` : convertedSlug;
};
exports.createSlug = createSlug;
