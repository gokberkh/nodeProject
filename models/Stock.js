const mongoose = require('mongoose');
const moment = require('moment-timezone');
const timeZone = moment.tz(Date.now(), 'Europe/Istanbul');


const Schema = new mongoose.Schema({
	product_id: {
		type: Number,
	},
	name: {
		type: String
	},
	stock: {
		type: Number
	},
	__v: {
		type: Number,
		select: false
	},

	created_date: {
		type: Date,
		default: timeZone
	}
});
module.exports = mongoose.model('stocks', Schema);