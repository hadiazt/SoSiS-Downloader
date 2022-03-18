const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const { basecolor } = require('../data/config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('SoSiS Help Menu'),
    async execute(interaction, client) {

        const helpmsg = new MessageEmbed()
            .setColor(basecolor)
            .setTitle(`${client.user.username} Help Panel :`)
            .setDescription(`
**<:bell_emoji:914129896958205982> General Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/pcgame' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/consolegame' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/movie' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/song' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/tv' + '`' + `

**<:information_emoji:914129757195620402> Other Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/about' + '`' + `
`)

        return interaction.reply({ embeds: [helpmsg] });
    },
};