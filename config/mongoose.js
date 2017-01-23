var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ShiftManager');

module.exports = {mongoose};





//var mongoose = require('mongoose');
//
//
//mongoose.Promise = global.Promise;
//mongoose.connect = ('mongodb://localhost:27017/ShiftManager');
//
//
//module.exports = {mongoose};
