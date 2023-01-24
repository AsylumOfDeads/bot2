import { ButtonBuilder, ActionRowBuilder } from "@discordjs/builders";
import { ButtonStyle } from "discord.js";

export function refreshButton(subject: string) {
    return new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId(`refresh${subject}Button`)
                .setLabel('Обновить')
                .setStyle(ButtonStyle.Primary)
        );
}

export function workerButtons() {
    return new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('acceptWorkerButton')
                .setLabel('Принять')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('declineWorkerButton')
                .setLabel('Отклонить')
                .setStyle(ButtonStyle.Danger)
        );
}

export function ticketButtons() {
    return new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('acceptTicketButton')
                .setLabel('Принять')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('declineTicketButton')
                .setLabel('Удалить')
                .setStyle(ButtonStyle.Danger)
        );
}

export function holdButtons() {
    return new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('holdTicketButton')
                .setLabel('Проблема решена')
                .setStyle(ButtonStyle.Primary),
        );
}