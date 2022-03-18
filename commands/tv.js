const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tv')
        .setDescription('Search Your Entry On TV Category'),

    async execute(interaction, client) {


        return interaction.reply({})
    },
};