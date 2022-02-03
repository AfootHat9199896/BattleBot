const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "misc",
	usage: "/hi",
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with Howdy!'),
	async execute(interaction) {

        const responses = ["howdy", "hi", "yoo", "sup", "howdy parn'r", "hey", "hiiiii", "ello", "helllllo","bye"]
        x = Math.floor(Math.random() * 10)
        await interaction.reply(responses[x])
 



		
	},
};
