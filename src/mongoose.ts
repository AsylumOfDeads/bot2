import mongoose, { ConnectOptions } from "mongoose";
import { dblink } from "./json/config.json"
import { channelsSchema } from "./schemas/channelsSchema";

mongoose.connect(dblink, {
    useNewUrlParser: true,
} as ConnectOptions);

export class Data {
    public static Channels = class {
        public static _model = mongoose.model("channels", channelsSchema);
        public static async create() {
            const exists = await this._model.findOne();
            if (!exists) {
                const newModel = new this._model({
                    channelOne: "0",
                    channelTwo: "0",
                    channelThree: "0",
                    category: "0",
                });
                await newModel.save();
            }
        }
        public static async get() {
            await this.create();
            const channels = await this._model.findOne();
            return [channels.channelOne, channels.channelTwo, channels.channelThree]
        }
        public static async getCategory() {
            await this.create();
            const channels = await this._model.findOne();
            return channels.category;
        }
        public static async setChannel(index: number, value: string) {
            await this.create();
            const channels = await this._model.findOne();
            if (index === 1) {
                return await this._model.findOneAndUpdate({ channelOne: value });
            } else if (index === 2) {
                return await this._model.findOneAndUpdate({ channelTwo: value });
            } else if (index === 3) {
                return await this._model.findOneAndUpdate({ channelThree: value });
            }
        }
        public static async setCategory(value: string) {
            await this.create();
            return await this._model.findOneAndUpdate({ category: value });
        }
    } 
}