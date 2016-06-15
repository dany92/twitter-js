var express = require('express');
var swig  = require('swig');
var app = express();
var routes = require('./routes/');
var requestLog = [];

app.use(express.static('public/stylesheets'));
app.use('/', routes);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

app.listen(3000, function () {
  console.log('Server listening');
});