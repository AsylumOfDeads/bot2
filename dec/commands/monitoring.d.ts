import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
declare const _default: {
    data: SlashCommandBuilder;
    initMonitoring(interaction: ChatInputCommandInteraction): Promise<void>;
    execute(interaction: ChatInputCommandInteraction): Promise<void>;
};
export = _default;
