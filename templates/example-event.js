module.exports = {
	name: 'insert-name-here', //name also effects when the event is executed. A ready event will only be executed on ready.
	once: true, //if this is true the command will only run on startup.
	execute(client) {
		console.log("-----Ready-----")
		console.log(`Logged in as ${client.user.tag}`);
	},
};