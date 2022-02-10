const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "category-here", //current available categories [misc, music, fun]
	usage: "/example",   //use <> to indicate arguments, ie /play <song-name>
	data:
		new SlashCommandBuilder()
			.setName('example')
			.setDescription('Describes the function of the command'),
	async execute(interaction) {
		//put code here
	},
};

