(function () {
	var showDb = require('../utilities.js').showDb,
		encryptor2 = require('../utilities.js').encryptor2,
		sign = require('../utilities.js').sign,
		q = require('../utilities.js').q;

	function register(req, res, next) {
		console.log(req.body);
		var user = req.body.user,
			password = req.body.password;
		password = encryptor2(password);
		var query = "INSERT INTO users (`email`, `password`) VALUES ( '" + user + "' , " +
			" '" + password + "' )";
		showDb(query).then(function (ress) {
			console.log('query is',query);
			res.send('hi');
		}).fail(function (err) {
			console.log('');
			res.send('Errrrrrrrrrrrr : ', err);
		});
	}
	exports.register = register;
}());