var countries = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req, res) {
		// console.log(countries);
		res.send(countries);
	}
};

module.exports = indexController;