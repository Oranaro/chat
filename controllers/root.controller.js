const { getCommands } = require('../libs/commands.js');
const express = require('express');

module.exports = (redis) => {	
	const router = express.Router();

	router.get('/', (req, res) => {
		res.render('pages/home', {
			title: 'Chat Des Bois',
			style: 'style.css',
		});
	});
	
	router.get('/commandes', (req, res) => {
		getCommands(redis).then(commandList => {
			res.render('pages/commands', {
				title: 'Commandes',
				style: 'style1.css',
				context: commandList,
			});		
		});
	});

	return router
}