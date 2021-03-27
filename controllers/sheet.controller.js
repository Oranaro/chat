const express = require('express');
const router = express.Router();
const { getDoc, buildRecipesArray } = require('../libs/sheets.js');

router.get('/', async (req, res) => {
	try {
		const document = await getDoc();

		const recipes = buildRecipesArray(document);

		res.render('pages/recipes-test', { recipes });

	} catch (err) {
		console.log(err);
		throw new Error('Problem fetching or sending back sheet data');
	}
});

module.exports = router;
