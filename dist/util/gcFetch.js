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
exports.gcFetch = void 0;
const API_URL_BASE = 'https://api.gathercontent.com';
const gcFetch = (uri, params, credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const base64credentials = Buffer.from(`${credentials.email}:${credentials.apiKey}`).toString('base64');
    const url = new URL(`${API_URL_BASE}/${uri}`);
    const queryString = new URLSearchParams(params).toString();
    url.search = queryString;
    const headers = {
        Accept: 'application/vnd.gathercontent.v2+json',
        Authorization: `Basic ${base64credentials}`,
    };
    const res = yield fetch(url.toString(), { headers });
    return res.json();
});
exports.gcFetch = gcFetch;
