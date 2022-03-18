const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { PCGame } = require('medias-info')
const { basecolor } = require('../data/config.json')

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

        PCGame({ name }).then(items => {
            if (!items.code) {

                const MSGBTN = new MessageActionRow()
                const MSGEMBED = new MessageEmbed()
                    .setColor(basecolor)
                    .setTitle('You Entry Top 5 Result')

                if (items[0]) {
                    MSGEMBED.addField(`1. **${items[0].title}**`, `*(${items[0].size})*`, true)
                    const one = new MessageButton()
                        .setLabel('1')
                        .setStyle('PRIMARY')
                        .setEmoji('🔗')
                        .setCustomId('first');
                    MSGBTN.addComponents(one)
                }
                if (items[1]) {
                    MSGEMBED.addField(`2. **${items[1].title}**`, `*(${items[1].size})*`, true)
                    const two = new MessageButton()
                        .setLabel('2')
                        .setStyle('SUCCESS')
                        .setEmoji('🔗')
                        .setCustomId('second');
                    MSGBTN.addComponents(two)
                }
                if (items[2]) {
                    MSGEMBED.addField(`3. **${items[2].title}**`, `*(${items[2].size})*`, true)
                    const three = new MessageButton()
                        .setLabel('3')
                        .setStyle('DANGER')
                        .setEmoji('🔗')
                        .setCustomId('third');
                    MSGBTN.addComponents(three)
                }

                interaction.reply({ embeds: [MSGEMBED], components: [MSGBTN], ephemeral: true })
                collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 120000 });

                collector.on('collect', async (btn) => {
                    if (btn.customId === 'first') {
                        await btn.update({ content: `You Selected :\n${items[0].title}\n[__Click To Donwload__](${items[0].link})`, ephemeral: true })
                    } else if (btn.customId === 'second') {
                        await btn.update({ content: `You Selected :\n${items[1].title}\n[__Click To Donwload__](${items[0].link})`, ephemeral: true })
                    } else if (btn.customId === 'third') {
                        await btn.update({ content: `You Selected :\n${items[2].title}\n[__Click To Donwload__](${items[0].link})`, ephemeral: true })
                    }
                });

            } else {
                return interaction.reply({ content: "Nothing Found For Your Entry", ephemeral: true })
            }
        })

    },
};