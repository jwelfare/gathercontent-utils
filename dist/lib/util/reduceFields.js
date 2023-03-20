"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceFields = exports.reduceComponent = void 0;
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
const generateSlug_1 = require("./generateSlug");
const reduceComponent = (dataContext, fields) => {
    // reduce fields to reference object
    // e.g. { <uuid>: <slug>, <uuid2>: <slug2> }
    const componentFieldUuidMap = fields.reduce((acc, field) => {
        return Object.assign(Object.assign({}, acc), { [field.uuid]: (0, generateSlug_1.createSlug)(field.label, acc, true) });
    }, {});
    // Check if the value is an array, if so do the same for every item
    if (Array.isArray(dataContext)) {
        return dataContext.map((fieldValueItem) => Object.keys(fieldValueItem).reduce((acc, fieldValueProp) => {
            return Object.assign(Object.assign({}, acc), { [componentFieldUuidMap[fieldValueProp]]: fieldValueItem[fieldValueProp] });
        }, {}));
    }
    // Check if the value is a repeated component
    // Otherwise, consider it a POJO and loop through its keys
    // replacing them with their respective slugs from the above map
    return Object.keys(dataContext).reduce((acc, fieldValueProp) => {
        return Object.assign(Object.assign({}, acc), { [componentFieldUuidMap[fieldValueProp]]: dataContext[fieldValueProp] });
    }, {});
};
exports.reduceComponent = reduceComponent;
const reduceFields = (dataContext, fields) => fields.reduce((acc, field) => {
    const slug = (0, generateSlug_1.createSlug)(field.label, acc, true);
    // if the value is a repeated component, we need to first flatten it to an array
    if (field.field_type === 'component' && 'repeatable' in field.metadata) {
        dataContext[field.uuid] = Object.values(dataContext[field.uuid]);
    }
    if (field.field_type === 'component') {
        const componentFields = (0, exports.reduceComponent)(dataContext[field.uuid], field.component.fields);
        return Object.assign(Object.assign({}, acc), { [slug]: componentFields });
    }
    return (0, camelcase_keys_1.default)(Object.assign(Object.assign({}, acc), { [slug]: dataContext[field.uuid] }), { deep: true });
}, {});
exports.reduceFields = reduceFields;
