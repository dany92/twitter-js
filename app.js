//I am an un needed comment.

var express = require('express');
var app = express();
var requestLog = [];


app.use(function(req, res, next){
	requestLog.push(req.method+ " "+ req.url);
	console.log(req.method+ " "+ req.url);
	res.send('something');
	console.log(req.method);
	next();
});

app.get('/news', function(req, res, next){
	res.send('This is the news!');
});

app.get('/', function(req, res, next){
	res.send('Hello');
});

app.listen(3000, function () {
  console.log('Server listening');
});
