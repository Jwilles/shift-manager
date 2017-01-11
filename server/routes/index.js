var express = require('express');
var passport = require('passport');

var {mongoose} = require('../db/mongoose');
var {User} = require('../models/user');
var {Shift} = require('../models/shift');
var {Trade} = require('../models/trade');

var router = express.Router();



//GET Users
router.get('/users', (req, res) => {
	User.find().then((users) => {
		res.send({users});
	}, (e) => {
		res.status(400).send(e);
	});
});

//GET Shifts
router.get('/shifts', (req, res) => {
	Shift.find().then((shifts) => {
		res.send({shifts});
	}, (e) => {
		res.status(400).send(e);
	});
});


//POST trade
router.post('/shifts/trade', (req, res) => {
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
router.post('/shifts', (req, res) => {
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

//POST User
router.post('/users', (req, res) => {
	var newUser = new User({
		email: req.body.email
	});
			
	newUser.save().then((user) => {
		res.send(user);
	}, (e) =>  {
		res.status(400).send(e);
	});
});
 


module.exports = router;
