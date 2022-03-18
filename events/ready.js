module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const { status, type, name } = require('../data/config.json').bot.presence
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setPresence({
            status: status,
            activities: [{
                type: type,
                name: name,
            }]
        });
    },
};