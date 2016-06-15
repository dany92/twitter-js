var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.use(express.static('public'));

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	var list = tweetBank.find( {name: name} );
	res.render('index', {title: 'Twitter.js - Posts by ' + name, userName: name, tweets: list } );
});

//
router.get('/tweets/:id', function(req, res){
	var userID = req.params.id;

	/*always check your types (we were passing find a string, when id was stored as a Number. Now id is stored as a string)*/
	var list = tweetBank.find( {id: userID} );
	res.render('index', {title: 'This tweet of ID: ' + userID, userName: list[0].name, tweets: list } );
});









//An Example of sendFile
//**************************************** 
//router.get('/stylesheets/style.css', function(req, res){
// 	var path = __dirname.split('/');

// 	path = '/' + path.slice(0, path.length - 1).join('/') 
// 	+ '/public/stylesheets/style.css';
// 	res.sendFile(path);
// })




/***********************************
Past work. 
***********************************/
// app.use(function(req, res, next){
// 	requestLog.push(req.method+ " "+ req.url);
// 	console.log(req.method+ " "+ req.url);
// 	//res.send('something');
// 	console.log(req.method);
// 	next();
// });

// app.get('/news', function(req, res, next){
// 	res.send('This is the news!');
// });


// app.get('/', function(req, res, next){
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people}, function(err, html){
// 		if (err) console.error("aaaa");
// 		res.send(html);
// 	});
// 	//res.send('Hello');
// });


module.exports = router;
