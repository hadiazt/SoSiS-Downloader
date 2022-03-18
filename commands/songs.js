const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('song')
        .setDescription('Search Your Entry On Songs Category'),

    async execute(interaction, client) {


        return interaction.reply({})
    },
};