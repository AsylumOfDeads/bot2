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
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
const ButtonComponents_1 = require("../components/ButtonComponents");
const EmbedComponents_1 = require("../components/EmbedComponents");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName("bot")
        .setDescription("Управление ботом")
        .addSubcommand(subcommand => subcommand
        .setName("ping")
        .setDescription("Пинг бота"))
        .addSubcommand(subcommand => subcommand
        .setName("say")
        .setDescription("Сказать что-то")
        .addStringOption(option => option
        .setName("text")
        .setDescription("Текст")
        .setRequired(true)))
        .addSubcommand(subcommand => subcommand
        .setName("uptime")
        .setDescription("Время работы бота"))
        .setDefaultMemberPermissions(1),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case "ping":
                    yield interaction.reply({ embeds: [(0, EmbedComponents_1.pingEmbed)(interaction.client)], components: [(0, ButtonComponents_1.refreshButton)("Ping")] });
                    interaction.client.interactions.set("refreshPingButton", (interaction) => {
                        interaction.update({ embeds: [(0, EmbedComponents_1.pingEmbed)(interaction.client)] });
                    });
                    break;
                case "say":
                    const text = interaction.options.getString("text");
                    yield interaction.channel.send({ content: text });
                    yield interaction.reply({ content: (0, discord_js_1.bold)("Сообщение отправлено"), ephemeral: true });
                    break;
                case "uptime":
                    yield interaction.reply({ embeds: [(0, EmbedComponents_1.uptimeEmbed)(interaction)], components: [(0, ButtonComponents_1.refreshButton)("Uptime")] });
                    interaction.client.interactions.set("refreshUptimeButton", (interaction) => {
                        interaction.update({ embeds: [(0, EmbedComponents_1.uptimeEmbed)(interaction)] });
                    });
                    break;
            }
        });
    }
};
