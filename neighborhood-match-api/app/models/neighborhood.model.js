const mongoose = require('mongoose');

const NeighborhoodSchema = mongoose.Schema({
	name: String,
	ethnicity: String,
	age: Number,
	sex: String,
	travel: String,
	travel_time: String,
	num_adults: Number,
	num_children: Number,
	health: Number,
	education_level: String,
	address: String,
	household_income: Number,
	credit_score: Number
}, {
	timestamps: true
});

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema);
