const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
	category: "category-here", //current available categories [misc, music, fun]
	usage: "/info",   //use <> to indicate arguments, ie /play <song-name>
	data:
		new SlashCommandBuilder()
		.setName('info')
		.setDescription('Gives information about the server'),
	async execute(interaction) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('ping')
				.setLabel('Ping')
				.setStyle('PRIMARY'),
			new MessageButton()
				.setCustomId("population")
				.setLabel("Population")
				.setStyle("PRIMARY")
		)
		
       await interaction.reply({content: "Choose what info you want to seee.", components: [row]}) 
	},
};

