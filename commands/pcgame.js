const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { PCGame } = require('medias-info')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pcgame')
        .setDescription('Search Your Entry On PC Category')
        .addStringOption(option =>
            option.setName('enrty')
                .setDescription('Your Entry For Search')
                .setRequired(true)
        ),
    async execute(interaction, client) {
        var name = interaction.options.get('enrty').value;

        PCGame({ name }).then(res => {
            console.log(res)
        })

        return interaction.reply({})
    },
};