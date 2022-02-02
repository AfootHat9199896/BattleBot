const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "category-here", //current available categories [misc, music, fun]
	usage: "/info",   //use <> to indicate arguments, ie /play <song-name>
	data:
		new SlashCommandBuilder()
		.setName('info')
		.setDescription('Gives information about the server'),
	async execute(interaction) {
		
       await interaction.reply("") 
	},
};

