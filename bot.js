const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

//Event Handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
console.log('-----Loading Events-----')
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
		console.log(event.name);
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
		console.log(event.name);
	}
}

//Command Handler

const commandDirs = fs.readdirSync('./commands') //todo: make this only look for dirs
console.log('-----Loading Commands-----')
for (const dir of commandDirs) {
	const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);
		client.commands.set(command.data.name, command);
		console.log(command.data.name);
	}

}
client.login(token);