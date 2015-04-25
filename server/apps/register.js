(function () {
	var showDb = require('../utilities.js').showDb,
		encryptor2 = require('../utilities.js').encryptor2,
		sign = require('../utilities.js').sign,
		encode = require('../utilities.js').encode,
		q = require('../utilities.js').q;

	function register(req, res, next) {
		console.log(req.body);
		var user = {
			email: '',
			password: '',
			id: -1
		};
		user.email = req.body.user;
		user.password = req.body.password;

		var query = "INSERT INTO users (`email`, `password`) VALUES ( '" + user.email + "' , " +
			" '" + user.password + "' )";

		showDb(query).then(function (ress) {
			console.log('query is', query);
			/*for example i add user info to db and retrieve user id*/
			user.id = 56690;
			var payload = {
				iss: req.hostname,
				sub: user.id
			};

			var token = encode(payload, "shh...");
			res.send({
				user: user.email,
				token: token
			});

		}).fail(function (err) {
			console.log('');
			res.send('Errrrrrrrrrrrr : ', err);
		});
	}
	exports.register = register;
}());