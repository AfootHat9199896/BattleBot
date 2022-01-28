const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "category-here", //current available categories [misc, music, fun]
	usage: "/ping",   //use <> to indicate arguments, ie /play <song-name>
	data:
		new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

