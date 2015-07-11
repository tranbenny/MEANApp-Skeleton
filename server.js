var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

app.set('views', __dirname + "/server/views");
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
/*
app.use(stylus.middleware(
	{
		src: __dirname + '/public', 
		compile : compile
	}
));*/

app.use(express.static(__dirname + "/public"));

app.get('/partials/:partialPath', function(req, res) {
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
	res.render('index');
});

app.listen(3030);
console.log("Listening on Port 3030");