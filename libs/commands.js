/**
 * @returns {object} Collection of commands, desciptedCommands and timers
 */
exports.getCommands = async (redis) => {
	const [allCommands, allDescriptedCommands] = await Promise.all([
		redis.hgetall("commands"), 
		redis.hgetall("commands/description")
	]);

	let commands = [];
	let descriptedCommands = [];

	for(const [cmd, desc] of Object.entries(allCommands)){
		commands.push({ name: cmd, description: desc });
	}

	for(const [cmd, desc] of Object.entries(allDescriptedCommands)) {
		descriptedCommands.push({ name: cmd, description: desc });
	}

	return { 
		commands: commands.sort((a, b) => a.name.localeCompare(b.name)), 
		descriptedCommands: descriptedCommands.sort((a, b) => a.name.localeCompare(b.name))
	};
};