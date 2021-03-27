// App init
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const PagesController = require('./controllers/pages.controller')

// View engine
app.set('view engine','ejs')
app.use(express.static('public'));

// Controllers (routes)
app.use('/', PagesController);


app.listen(port, () => {
	console.log(`Server on : ${port}/`);
});
