import mongoose from "mongoose";
export declare class Data {
    static Channels: {
        new (): {};
        _model: mongoose.Model<{
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        }>>;
        create(): Promise<void>;
        get(): Promise<string[]>;
        getCategory(): Promise<string>;
        setChannel(index: number, value: string): Promise<mongoose.Document<unknown, any, {
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        }> & {
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        } & {
            _id: mongoose.Types.ObjectId;
        }>;
        setCategory(value: string): Promise<mongoose.Document<unknown, any, {
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        }> & {
            channelOne?: string;
            channelTwo?: string;
            channelThree?: string;
            category?: string;
        } & {
            _id: mongoose.Types.ObjectId;
        }>;
    };
}
