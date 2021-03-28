const express = require('express');
const router = express.Router();
const { getDoc, buildRecipesArray } = require('../libs/sheets.js');

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

	res.render('pages/cuisine', {
		title: 'Recettes',
		style: 'style1.css',
		recipes: recipes,
	});
});
router.get('/commande', (req, res) => {
	res.render('pages/commande', {
		title: 'Commandes',
		style: 'style1.css',
	});
});
module.exports = router;
