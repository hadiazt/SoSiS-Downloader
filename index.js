const { token } = require('./data/config.json').bot
const chalk = require('chalk')
const { readdirSync } = require("fs");

// --------------------------------------------

const { Client, Intents, Collection } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.login(token)

// --------------------------------------------

client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(chalk.red('------------- LOADING COMMANDS -------------'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	console.log(chalk.blue(command.data.name + ' LOADED'));
}
console.log(chalk.red('-------------- LOADING EVENTS --------------'));
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
	console.log(chalk.blue(event.name + ' LOADED'));
}
console.log(chalk.red('--------------------------------------------'));
client.on('guildCreate', async guild => {
	let JoinEmbed = new MessageEmbed()
		.setDescription('**<:space:874678195843125278><:right:874690882417360986> A New Guild Has Been Submited**')
		.setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
		.setColor('#0fe694')
	client.channels.cache.get(config.BOT_LOG).send({ embeds: [JoinEmbed] });
});
// --------------------------------------------
client.on('guildDelete', async guild => {
	let LeftEmbed = new MessageEmbed()
		.setDescription('**<:space:874678195843125278><:right:874690882417360986> A Guild Has Been Removed **')
		.setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
		.setColor('#ff0000')
	client.channels.cache.get(config.BOT_LOG).send({ embeds: [LeftEmbed] });
});