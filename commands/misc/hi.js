const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	category: "misc",
	usage: "/hi",
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with Howdy!'),
	async execute(interaction) {
		x = Math.floor(Math.random() * 10) 
switch (x) {
    case 1:
        console.log("howdy")
        break;
    case 2:
        console.log("hi")
        break;
    case 3:
        console.log("yoo")
        break;
    case 4:
        console.log("sup")
        break;
    case 5:
        console.log("howdy parn'r")
        break;
    case 6:
        console.log("hey")
        break;
    case 7:
        console.log("hiiiii")
        break;
    case 8:
        console.log("ello")
        break;
    case 9:
        console.log("helllllo")
        break;
    case 10:
        console.log("bye")
        break;
    
    

    default:
        break;
}

		
	},
};
