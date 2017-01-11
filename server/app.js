var bodyParser = require('body-parser');
var express = require('express');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

var routes = require('./routes/index');

var app = express();

//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));

//Passport Init
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);



app.use('/', routes);

app.listen(8000, () =>  {
	console.log('Server Started');
});
