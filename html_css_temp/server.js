// server.js
// sets up node server and modules

// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
// var db = require('./config/db');

var port  = process.env.PORT || 8080;

// set up db here, uncomment when database is configured 
// mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api + json'}));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// set up static route
app.use(express.static(__dirname + '/public'));

// routes 
require('./app/routes')(app); // configure routes

app.listen(port);
console.log("Running on port: " + port);
