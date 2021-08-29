const express = require('express');

module.exports = (redis) => {	
	const router = express.Router();

	router.get('/', (req, res) => {
		res.render('pages/ranking', {
			title: 'Classement',
			style: 'style1.css',
		});
	});
	
	return router
}