// App init
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var redis = require('async-redis').createClient(process.env.REDIS_URL);

// View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Controllers (routes)
registerController(app, '/', 'root', [redis])
registerController(app, '/classement', 'ranking', [redis])
registerController(app, '/cuisine', 'recipe', [redis])

app.listen(port, () => {
	console.log(`Server on : ${port}/`);
});

function registerController(app, path, controller, dependencies) {
	const controllerRouter = require(`./controllers/${controller}.controller.js`)
	app.use(path, controllerRouter.apply(null, dependencies));
}