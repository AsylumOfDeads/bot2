import { CategoryChannel, ChannelType, ChatInputCommandInteraction, PermissionsBitField, SlashCommandBuilder, GuildChannelCreateOptions } from "discord.js";
import { Data } from "../mongoose";
import getOnline from "../parser";
import cron from "node-cron"

export = {
    data: new SlashCommandBuilder()
        .setName('monitoring')
        .setDescription('Показывает информацию о мониторинге')
        .setDefaultMemberPermissions(8),
    async initMonitoring(interaction: ChatInputCommandInteraction) {
        const channels = await Data.Channels.get();
            const online = await getOnline();
            console.log(online[0], online[1], online[2])
            const categoryFetch = async () => { 
                try {
                    const category = await Data.Channels.getCategory();
                    return await interaction.guild.channels.fetch(category);
                } catch (error) {
                    const category = await interaction.guild.channels.create({
                        name: 'Мониторинг',
                        type: ChannelType.GuildCategory,
                        position: 0
                    })
                    await Data.Channels.setCategory(category.id);
                    return category;
                }
            }
            const category = (await categoryFetch() as CategoryChannel);
            channels.map(async (channel: string, index: number) => {
                try {
                    const channelFetch = await interaction.guild.channels.fetch(channel);
                    switch (index + 1) {
                        case 1:
                            await channelFetch.setName(`public #1 mirage ${online[index]}`);
                            break;
                        case 2:
                            await channelFetch.setName(`public #2 main ${online[index]}`);
                            break;
                        case 3:
                            await channelFetch.setName(`public #3 only awp ${online[index]}`);
                    }
                } catch (error) {
                    const channel = await interaction.guild.channels.create({
                        name: `Сервер ${index + 1}: ${online[index]}`,
                        type: ChannelType.GuildVoice,
                        parent: category,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.roles.everyone,
                                deny: PermissionsBitField.Flags.Connect,
                            }
                        ],
                        position: index
                    })
                    await Data.Channels.setChannel(index + 1, channel.id);
                }
            }
        )
    },
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply();
        const tasks = cron.getTasks();
        tasks.forEach(task => task.stop());
        await this.initMonitoring(interaction);
        cron.schedule('*/5 * * * *', async () => {
            await this.initMonitoring(interaction);
        })
        await interaction.editReply('Мониторинг запущен');
    }
}