module.exports = (app) => {
	const neighborhood = require('../controllers/neighborhood.controller.js');

	// Create a new Neighborhood
	app.post('/neighborhood', neighborhood.create);

	// Retreive all Neighborhoods
	app.get('/neighborhood', neighborhood.findAll);

	// Retrieve a single Neighborhood with neighborhoodId
	app.get('/neighborhood/:neighborhoodId', neighborhood.findOne);

	// Update an Neighborhood with neighborhoodId
	app.post('/update/:neighborhoodId', neighborhood.update);

	// Delete an Neighborhood with neighborhoodId
	app.post('/delete/:neighborhoodId', neighborhood.delete);
}
