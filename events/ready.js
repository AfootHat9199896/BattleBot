module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log("-----Ready-----")
		console.log(`Logged in as ${client.user.tag}`);
	},
};