var bodyParser = require('body-parser');
var express = require('express');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var logger = require('morgan');
var app = express();



var routes = require('./app/routes');

require('./config/passport')(passport);


//Middleware

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'abc123' }));
app.use(logger('dev'));

app.use(express.static('./public'));


//Passport Init
app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);
app.use('/private', express.static('./private'));

app.listen(8000, () =>  {
	console.log('Server Started');
});
