// App init
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var redis = require('async-redis').createClient(process.env.REDIS_URL);

const PagesController = require('./controllers/pages.controller');
new PagesController.pages(redis)
// View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Controllers (routes)
app.use('/', PagesController.router);

app.listen(port, () => {
	console.log(`Server on : ${port}/`);
});
