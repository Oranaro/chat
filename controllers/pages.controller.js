const express = require('express');
const router = express.Router();
const { getDoc, buildRecipesArray } = require('../libs/sheets.js');

// var redis = require('async-redis').createClient(process.env.REDIS_URL);

function pages(redis) {
	router.get('/commande', (req, res) => {
		var context = {commands:[], descriptedCommands:[]}
	
		redis.hgetall("commands").then(all =>{
			for(var cmd in all){
				context.commands.push({name: cmd, description: all[cmd]})
			}
	
			redis.hgetall("commands/description").then(descAll =>{
				for(var descCmd in descAll){
					context.descriptedCommands.push({name: descCmd, description: descAll[descCmd]})
				}
				res.render('pages/commande', {
					title: 'Commandes',
					style: 'style1.css',
					context,
				});			
			})
		})
	});
}

router.get('/', (req, res) => {
	res.render('pages/home', {
		title: 'Chat Des Bois',
		style: 'style.css',
	});
});

router.get('/classement', (req, res) => {
	res.render('pages/classement', {
		title: 'Classement',
		style: 'style1.css',
	});
});

router.get('/cuisine', async (req, res) => {
	const document = await getDoc();
	const recipes = buildRecipesArray(document);
	console.log(recipes)

	res.render('pages/cuisine', {
		title: 'Recettes',
		style: 'style1.css',
		recipes,
	});
});

module.exports = { pages, router };
