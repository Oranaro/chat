const express = require('express');
const { getDoc, buildRecipesArray } = require('../libs/sheets.js');

module.exports = (redis) => {	
	const router = express.Router();

	router.get('/', async (req, res) => {
		const document = await getDoc();
		const recipes = buildRecipesArray(document);
	
		res.render('pages/cooking', {
			title: 'Recettes',
			style: 'style1.css',
			recipes,
		});
	});
	
	return router
}