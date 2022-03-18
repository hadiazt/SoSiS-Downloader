const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('movie')
        .setDescription('Search Your Entry On Movie Category'),

    async execute(interaction, client) {


        return interaction.reply({})
    },
};