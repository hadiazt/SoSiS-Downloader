const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { PCGame } = require('medias-info')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pcgame')
        .setDescription('Search Your Entry On PC Category'),

    async execute(interaction, client) {


        return interaction.reply({})
    },
};