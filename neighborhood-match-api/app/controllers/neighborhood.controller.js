const Neighborhood = require('../models/neighborhood.model.js');

// Create and Save a new Neighborhood
exports.create = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	
	// Validate request
	if(!req.body.name) {
		return res.status(400).send({
			message: "Neighborhood cannot be nameless"
		});
	}
	
	// Create an Neighborhood
	const neighborhood = new Neighborhood({
		name: String,
		ethnicity: String,
		age: Number,
		sex: String,
		travel: String,
		travel_time: String,
		num_adults: Number,
		num_children: Number,
		num_bedrooms: Number,
		num_bathrooms:Number,
		health: Number,
		crime: Number,
		education_level: String,
		address: String,
		household_income: Number,
		credit_score: Number
	});

	// Save Neighborhood in the database
	neighborhood.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occured while creating the Neighborhood."
		});
	});
};

// Retrieve and return all neighborhoods from the database.
exports.findAll = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	Neighborhood.find()
	.then(neighborhoods => {
		res.send(neighborhoods);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving neighborhoods."
		});
	});
};

// Find a single neighborhoods with a noteId
exports.findOne = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	Neighborhood.findById(req.params.neighborhoodId)
	.then(neighborhood => {
		if(!neighborhood) {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		res.send(neighborhood);
	}).catch(err => {
		if(err.kind == 'ObjectId') {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		return res.status(500).send({
			message: "Error retrieving neighborhood with id " + req.params.neighborhoodId
		});
	});
};

// Update an neighborhood identified by the neighborhoodId in the request
exports.update = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	// Validate Request
	if(!req.body.name) {
		return res.status(400).send({
			message: "Neighborhood cannot be nameless"
		});
	}

	// Find neighborhood and update it with the request body
	Neighborhood.findByIdAndUpdate(req.params.neighborhoodId, {
		name: String,
		ethnicity: String,
		age: Number,
		sex: String,
		travel: String,
		travel_time: String,
		num_adults: Number,
		num_children: Number,
		num_bedrooms: Number,
		num_bathrooms: Number,
		health: Number,
		crime: Number,
		education_level: String,
		address: String,
		household_income: Number,
		credit_score: Number
	}, {new: true})
	.then(neighborhood => {
		if(!neighborhood) {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		res.send(neighborhood);
	}).catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		return res.status(500).send({
			message: "Error updating neighborhood with id " + req.params.neighborhoodId
		});
	});
};

// Delete an neighborhood with the specified neighborhoodId in the request
exports.delete = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	Neighborhood.findByIdAndRemove(req.params.neighborhoodId)
	.then(neighborhood => {
		if(!neighborhood) {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		res.send({message: "Neighborhood deleted successfully!"});
	}).catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).send({
				message: "Neighborhood not found with id " + req.params.neighborhoodId
			});
		}
		return res.status(500).send({
			message: "Could not delete neighborhood with id " + req.params.neighborhoodId
		});
	});
};
