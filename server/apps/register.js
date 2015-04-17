(function () {
	var showDb = require('../utilities.js').showDb;
	var q = require('../utilities.js').q;

	function register(req, res, next) {
		console.log(req.body);
		var query = "INSERT INTO users (`email`, `password`) VALUES ( '" + req.body.user + "' ,  '" + req.body.password + "' )";
		showDb(query).then(function (ress) {
			//res.status(200).json({"done":"ok"});
			res.send('hi');
			//next();
		}).fail(function (err) {
			console.log('');
			res.send('Errrrrrrrrrrrr : ', err);
			//next();
		});
	}
	exports.register = register;
}());