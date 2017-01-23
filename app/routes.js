var express = require('express');

var {mongoose} = require('../config/mongoose');
var {User} = require('./models/user');
var {Shift} = require('./models/shift');
var {Trade} = require('./models/trade');

module.exports = function(app, passport) {	
	
	app.all('/private/*', (req, res, next) => {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.redirect('/');
		}
	});

	//GET Users
	app.get('/private/users', (req, res) => {
		User.find().then((users) => {
			res.send({users});
		}, (e) => {
			res.status(400).send(e);
		});
	});
	
	//GET Shifts
	app.get('/shifts', (req, res) => {
		Shift.find().then((shifts) => {
			res.send({shifts});
		}, (e) => {
			res.status(400).send(e);
		});
	});
	
	
	//POST trade
	app.post('/shifts/trade', (req, res) => {
		var newTrade = new Trade({
			tradeInit: req.body.tradeInit,
			tradeOwner: req.body.tradeOwner,
			shiftID: req.body.shiftID 
		});
		
		newTrade.save().then((trade) => {
			res.send(trade);
		}, (e) => {
			res.status(400).send(e);
		});
	});
	
	//POST Shift 
	app.post('/shifts', (req, res) => {
		var newShift = new Shift({
			employeeName: req.body.employee,
			shiftTime: req.body.shiftTime
		});
	
		newShift.save().then((shift) => {
			res.send(shift);
		}, (e) => {
			res.status(400).send(e);
		});
	});
	
	//POST users/login

	app.post('/users/login', passport.authenticate('local-login',{
		successRedirect: '/private/homepage.html',
		failureRedirect: '/login.html'
	}));
	
		
	//POST users
	app.post('/users', passport.authenticate('local-signup', {
			successRedirect: '/private/homepage.html',
			failureRedirect: '/signup.html'
		//	session: false
		}) 
	);
 
	app.get('/users/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
}
