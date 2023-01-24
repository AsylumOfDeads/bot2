import { bold, ButtonInteraction, ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { refreshButton } from "../components/ButtonComponents";
import { pingEmbed, uptimeEmbed } from "../components/EmbedComponents";

export = {
    data: new SlashCommandBuilder()
        .setName("bot")
        .setDescription("Управление ботом")
        .addSubcommand(subcommand =>
            subcommand
                .setName("ping")
                .setDescription("Пинг бота"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("say")
                .setDescription("Сказать что-то")
                .addStringOption(option =>
                    option
                        .setName("text")
                        .setDescription("Текст")
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName("uptime")
                .setDescription("Время работы бота"))
        .setDefaultMemberPermissions(1),
    async execute(interaction: ChatInputCommandInteraction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case "ping":
                await interaction.reply({ embeds: [pingEmbed(interaction.client)], components: [refreshButton("Ping")] });
                interaction.client.interactions.set("refreshPingButton", (interaction: ButtonInteraction) => {
                    interaction.update({ embeds: [pingEmbed(interaction.client)] });
                })
                break;
            case "say":
                const text = interaction.options.getString("text");
                await interaction.channel.send({ content: text });
                await interaction.reply({ content: bold("Сообщение отправлено"), ephemeral: true });
                break;
            case "uptime":
                await interaction.reply({ embeds: [uptimeEmbed(interaction)], components: [refreshButton("Uptime")] });
                interaction.client.interactions.set("refreshUptimeButton", (interaction: ButtonInteraction) => {
                    interaction.update({ embeds: [uptimeEmbed(interaction)] });
                })
                break;
        }
    }
}