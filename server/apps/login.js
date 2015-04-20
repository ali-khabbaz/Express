(function () {
	var showDb = require('../utilities.js').showDb,
		encryptor2 = require('../utilities.js').encryptor2,
		sign = require('../utilities.js').sign,
		q = require('../utilities.js').q;

	function login(req, res, next) {
		console.log('hostname',req.hostname);
		var user = req.body.user,
			password = req.body.password;
			console.log('login ', user , password);
	}
	exports.login = login;
}());