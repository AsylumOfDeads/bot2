"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holdButtons = exports.ticketButtons = exports.workerButtons = exports.refreshButton = void 0;
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
function refreshButton(subject) {
    return new builders_1.ActionRowBuilder()
        .addComponents(new builders_1.ButtonBuilder()
        .setCustomId(`refresh${subject}Button`)
        .setLabel('Обновить')
        .setStyle(discord_js_1.ButtonStyle.Primary));
}
exports.refreshButton = refreshButton;
function workerButtons() {
    return new builders_1.ActionRowBuilder()
        .addComponents(new builders_1.ButtonBuilder()
        .setCustomId('acceptWorkerButton')
        .setLabel('Принять')
        .setStyle(discord_js_1.ButtonStyle.Success), new builders_1.ButtonBuilder()
        .setCustomId('declineWorkerButton')
        .setLabel('Отклонить')
        .setStyle(discord_js_1.ButtonStyle.Danger));
}
exports.workerButtons = workerButtons;
function ticketButtons() {
    return new builders_1.ActionRowBuilder()
        .addComponents(new builders_1.ButtonBuilder()
        .setCustomId('acceptTicketButton')
        .setLabel('Принять')
        .setStyle(discord_js_1.ButtonStyle.Success), new builders_1.ButtonBuilder()
        .setCustomId('declineTicketButton')
        .setLabel('Удалить')
        .setStyle(discord_js_1.ButtonStyle.Danger));
}
exports.ticketButtons = ticketButtons;
function holdButtons() {
    return new builders_1.ActionRowBuilder()
        .addComponents(new builders_1.ButtonBuilder()
        .setCustomId('holdTicketButton')
        .setLabel('Проблема решена')
        .setStyle(discord_js_1.ButtonStyle.Primary));
}
exports.holdButtons = holdButtons;
