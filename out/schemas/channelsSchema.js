"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.channelsSchema = new mongoose_1.default.Schema({
    channelOne: String,
    channelTwo: String,
    channelThree: String,
    category: String,
});
