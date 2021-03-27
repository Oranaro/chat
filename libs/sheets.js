const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 * @returns {object} Collection of sheets and their rows
 */
exports.getDoc = async () => {
	const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

	await doc.useServiceAccountAuth({
		client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		private_key: process.env.GOOGLE_PRIVATE_KEY,
	});

	await doc.loadInfo(); // loads document properties and worksheets

	let sheets = [];

	const numberOfSheets = doc.sheetCount;

	for (let i = 0; i < numberOfSheets; i++) {
		const sheet = doc.sheetsByIndex[i];
		const rows = await sheet.getRows();
		sheets.push(rows);
	}

	return sheets;
};

/**
 *
 * @param {object} document (provided by getDoc())
 * @returns {Array} Array of recipes
 */
exports.buildRecipesArray = (document) => {
	let recipes = [];

	document.forEach((rows) => {
		rows.forEach((row) => {
			const recipe = {
				name: row._rawData[0] !== undefined ? row._rawData[0] : null,
				list: row._rawData[1] !== undefined ? row._rawData[1].split(',') : null,
				prep: row._rawData[2] !== undefined ? row._rawData[2] : null,
			};
			recipes.push(recipe);
		});
	});

	return recipes;
};
