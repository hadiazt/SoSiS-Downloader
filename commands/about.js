const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { src, inv, support, basecolor } = require('../data/config.json')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Information About Us'),

    async execute(interaction, client) {

        const SRCBTN = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('INVITE')
                .setStyle('LINK')
                .setURL(inv),
            new MessageButton()
                .setLabel('SUPPORT')
                .setStyle('LINK')
                .setURL(support),
            new MessageButton()
                .setLabel('SOURCE')
                .setStyle('LINK')
                .setURL(src),
        )

        var about = new MessageEmbed()
            .setColor(basecolor)
            .setTitle(`<:sosis_2:914467249157439488> About ${client.user.username}:`)
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            .setDescription(`
<:space:874678195843125278>[**${client.user.username}**](https://discord.gg/CWqTygXz4T) *is a fun bot that it coded for __you__ to entertain*
*and have a good time In Discord.*

**SoSiS Team:**
<:space:874678195843125278><:right:874690882417360986> [Hadi.Az](https://github.com/hadiazt/)
<:space:874678195843125278><:right:874690882417360986> [im-vernix](https://github.com/Mani-Vernix)

Open Source LICENSE : [MIT](https://github.com/hadiazt/SoSiS-Downloader/blob/main/LICENSE)
`)

        return interaction.reply({ embeds: [about], components: [SRCBTN] })
    },
};