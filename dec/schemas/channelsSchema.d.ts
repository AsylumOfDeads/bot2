import mongoose from "mongoose";
export declare const channelsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    channelOne?: string;
    channelTwo?: string;
    channelThree?: string;
    category?: string;
}>;
export type ChannelsType = mongoose.Document & {
    channelOne: String;
    channelTwo: String;
    channelThree: String;
    category: String;
};
