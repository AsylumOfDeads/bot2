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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_json_1 = require("./json/config.json");
const channelsSchema_1 = require("./schemas/channelsSchema");
mongoose_1.default.connect(config_json_1.dblink, {
    useNewUrlParser: true,
});
class Data {
}
exports.Data = Data;
Data.Channels = (_a = class {
        static create() {
            return __awaiter(this, void 0, void 0, function* () {
                const exists = yield this._model.findOne();
                if (!exists) {
                    const newModel = new this._model({
                        channelOne: "0",
                        channelTwo: "0",
                        channelThree: "0",
                        category: "0",
                    });
                    yield newModel.save();
                }
            });
        }
        static get() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.create();
                const channels = yield this._model.findOne();
                return [channels.channelOne, channels.channelTwo, channels.channelThree];
            });
        }
        static getCategory() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.create();
                const channels = yield this._model.findOne();
                return channels.category;
            });
        }
        static setChannel(index, value) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.create();
                const channels = yield this._model.findOne();
                if (index === 1) {
                    return yield this._model.findOneAndUpdate({ channelOne: value });
                }
                else if (index === 2) {
                    return yield this._model.findOneAndUpdate({ channelTwo: value });
                }
                else if (index === 3) {
                    return yield this._model.findOneAndUpdate({ channelThree: value });
                }
            });
        }
        static setCategory(value) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.create();
                return yield this._model.findOneAndUpdate({ category: value });
            });
        }
    },
    _a._model = mongoose_1.default.model("channels", channelsSchema_1.channelsSchema),
    _a);
