import mongoose from "mongoose";

export const channelsSchema = new mongoose.Schema({
    channelOne: String,
    channelTwo: String,
    channelThree: String,
    category: String,
});

export type ChannelsType = mongoose.Document & {
    channelOne: String,
    channelTwo: String,
    channelThree: String,
    category: String,
};