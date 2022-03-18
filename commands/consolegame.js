const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('consolegame')
        .setDescription('Search Your Entry On Console Category'),

    async execute(interaction, client) {


        return interaction.reply({})
    },
};