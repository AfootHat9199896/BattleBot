const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "misc",
	usage: "/hi",
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with Howdy!'),
	async execute(interaction) {
        await interaction.reply(responses[x])
        x = Math.floor(Math.random() * 10) 
        await interaction.reply(responses[x])
}

		
	},
};
