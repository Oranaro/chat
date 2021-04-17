const express = require('express');
const router = express.Router();
const { getDoc, buildRecipesArray } = require('../libs/sheets.js');

var redis = require('async-redis').createClient(process.env.REDIS_URL);

router.get('/commande', (req, res) => {
	
	var context = {commands:[], descriptedCommands:[]}

	redis.hgetall("commands").then(all =>{
		for(var cmd in all){
			// console.log(cmd+"   "+all[cmd])
			context.commands.push({name: cmd, description: all[cmd]})
		}

		redis.hgetall("commands/description").then(descAll =>{
			for(var descCmd in descAll){
				context.descriptedCommands.push({name: descCmd, description: descAll[descCmd]})
			}
			// getCounters()
			// .then( counters => {
				// context.counters = counters
				res.render('pages/commande', {
					title: 'Commandes',
					style: 'style1.css',
					context,
				});			
			// })
		})
	})
});

module.exports = router;
