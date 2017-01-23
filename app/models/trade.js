var mongoose = require('mongoose');

var Trade = mongoose.model('trade', {
	tradeInit: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	tradeOwner: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	shiftID: {
		type: String,
		required: true
	}
	
});


module.exports = {Trade};
