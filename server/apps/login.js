(function () {
	var showDb = require('../utilities.js').showDb,
		encryptor2 = require('../utilities.js').encryptor2,
		sign = require('../utilities.js').sign,
		q = require('../utilities.js').q;
		//local_strategy = require('./server/requires.js').local_strategy;



	function login(req, res, next) {
		console.log('hostname', req.hostname);
		var user = req.body.user,
			password = req.body.password;


		/*passport.serializeUser(function (user, done) {
			done(null, user.id);
		});


		var strategy = new local_strategy({
			usernameField: 'email'
		}, function (email, password, done) {

		});

		passport.use(strategy);*/



		res.send({
			"username": 'ali.khabbaz14@gmail.com',
			"name": "ali khabbaz"
		});
		console.log('login ', user, password);
	}
	exports.login = login;
}());