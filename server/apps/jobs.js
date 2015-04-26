(function () {

	var decode = require('../utilities.js').decode;

	function jobs(req, res) {
		if (!req.headers.authorization) {
			return res.status(401).send({
				message: 'you are not authorized'
			});
		}
		var token = req.headers.authorization.split('ali is just.')[1];
		var payload = decode(token, "shh...");
		if (!payload.sub) {
			return res.status(401).send({
				message: 'authentication failed'
			});
		}
		res.json({
			salam: "bahbah"
		});
	}

	exports.jobs = jobs;
}());