const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "music",
	usage: "/play <song>",
	data:
		new SlashCommandBuilder()
			.setName('play')
			.setDescription('Plays a song'),

	async execute(interaction) {
		//If I had code it would go here
	},
};