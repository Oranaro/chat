const express = require('express');
const router = express.Router();

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

router.get('/cuisine', (req, res) => {
	res.render('pages/cuisine', {
		title: 'Recettes',
		style: 'style1.css',
	});
});
router.get('/commande', (req, res) => {
	res.render('pages/commande', {
		title: 'Commandes',
		style: 'style1.css',
	});
});
module.exports = router;
