const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = 3000;


/*var db;
MongoClient.connect('mongodb://stone:westray@ds037215.mlab.com:37215/feeder', function(err, database){
	if(err)
		return console.log(err);
	db = database;
});*/

var db;
mongoose.connect('mongodb://stone:westray@ds037215.mlab.com:37215/feeder', function(err, database){
	if(err)
		return console.log(err);
	db = database;
});

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

var RecipeSchema = new Schema({
	name: String,
	description: String,
	ingredients: [{
		quantity: Number,
		unit: String,
		item: String
	}],
	steps: [String],
	reviews: [String],
	score: Number
});

var RecipeModel = mongoose.model('RecipeModel', RecipeSchema);

app.listen(port);
console.log('app listening on port 3000');

app.get('api/recipes', function(req, res){
	RecipeModel.find(function(err, recipes){
		if(err)
			res.send(err);
		res.json(recipes);
	});
});

app.post('api/recipes', function(req, res){
	RecipeModel.create({

	});
});