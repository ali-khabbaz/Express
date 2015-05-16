(function () {
	var showDb = require('../utilities.js').showDb,
		passport = require('passport'),
		local_strategy = require('passport-local').Strategy,
		encryptor2 = require('../utilities.js').encryptor2,
		createToken = require('../utilities.js').createToken,
		q = require('../utilities.js').q;

	function login(req, res, next) {
		console.log('login hostname', req.hostname);
		var user = req.body.user,
			password = req.body.password;

		var query = "SELECT `ID` FROM users WHERE " +
			" `email` =  '" + user + "' and `password` = '" + password + "'";

		passport.authenticate('local', function (err, user) {
			console.log('first', err, user);
			/*res.status(401).send({
				message: 'authentication failed',
				err: err
			});*/
			if (err) {
				console.log('login errr', err);
				next(err);
			}
			req.login(user, function (err) {
				if (err) {
					next(err);
				}
				user = {
					"email": 'akbar',
					"id": 150
				};
				var token = createToken(user, req);
				res.send({
					user: user.email,
					token: token
				});
				console.log('login result', user);
			});
		})(req,res,next);

		/*showDb(query).then(function (res_1) {
			user = {
				"email": user,
				"id": +res_1[0].ID
			};
			var token = createToken(user, req);
			res.send({
				user: user.email,
				token: token
			});
			console.log('login result', user);
		}).fail(function (err) {
			console.log('login err', err);
			res.status(401).send({
				message: 'authentication failed',
				err: err
			});
		});
		console.log('login ', user, password);*/
	}
	exports.login = login;
}());