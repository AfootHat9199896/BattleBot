const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { testClientId, testGuildId, token } = require('./config.json');
const fs = require('fs');

const commands = [];
//check for all folders in the commands folder
const commandDirs = fs.readdirSync('./commands') //todo: make this only look for dirs
for (const dir of commandDirs) {
	//look for all the command files in those subfolders
	const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);

		commands.push(command.data.toJSON());
	}

}
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(testClientId, testGuildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
