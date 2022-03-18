const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { basecolor } = require('../data/config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Bot Stats'),
    async execute(interaction, client) {



        var MemberCount = 0;
        client.guilds.cache.forEach(Member => {
            MemberCount += Member.memberCount
        })

        const supportmsg = new MessageEmbed()
            .setTitle('Bot Stats')
            .setColor(basecolor)
            .setDescription(`
<:space:874678195843125278><:airplane_emoji:914500272087236628> *Guilds Count : `+ '`' + client.guilds.cache.size + '`' + `*

<:space:874678195843125278><:bustsinsilhouette_emoji:914504068020437012> *Members Count : `+ '`' + MemberCount + '`' + `*

<:space:874678195843125278><:keycapnumbersign_emoji:914500272422789161> *Channels Count : `+ '`' + client.channels.cache.size + '`' + `*

<:space:874678195843125278><:horizontaltrafficlight_emoji:914504404818874389> *Status : `+ '`' + client.user.presence.status + '`' + `*

<:space:874678195843125278><:antennabars_emoji:914500272255025193> *Ping : `+ '`' + Math.round(client.ws.ping) + 'ms`' + `*

`)

        return interaction.reply({ embeds: [supportmsg] })
    }
}