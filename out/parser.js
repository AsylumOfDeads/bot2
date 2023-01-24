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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const axios_1 = __importDefault(require("axios"));
const firstServer = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27015';
const secondSrver = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27016';
const thirdServer = 'https://gamingservers.ru/search/?q=146.19.87.179%3A27017';
function getOnline() {
    return __awaiter(this, void 0, void 0, function* () {
        const first = yield axios_1.default.get(firstServer);
        const second = yield axios_1.default.get(secondSrver);
        const third = yield axios_1.default.get(thirdServer);
        const $first = (0, cheerio_1.load)(first.data);
        const $second = (0, cheerio_1.load)(second.data);
        const $third = (0, cheerio_1.load)(third.data);
        const firstOnline = $first('.players').text();
        const secondOnline = $second('.players').text();
        const thirdOnline = $third('.players').text();
        const firstOnlineTrim = firstOnline.replace(/\s/g, '');
        const secondOnlineTrim = secondOnline.replace(/\s/g, '');
        const thirdOnlineTrim = thirdOnline.replace(/\s/g, '');
        return [
            firstOnlineTrim,
            secondOnlineTrim,
            thirdOnlineTrim
        ];
    });
}
exports.default = getOnline;
