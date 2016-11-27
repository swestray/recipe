var http = require('http');
var express = require('express');
var app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.listen(port, function(){
	console.log('Listening on port ' + port);
});

