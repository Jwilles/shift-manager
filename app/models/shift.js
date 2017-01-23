var mongoose = require('mongoose');

var Shift = mongoose.model('shift', {
	employee: {
		type: String,
		required: true,
		minlength: 1,
		trim: true 

	},
	shiftTime: {
		type: String,
		required: true  
	}
});

module.exports = {Shift};
