(function () {
	var q = require('./requires.js').q;
	var c = require('./requires.js').c;

	function showDb(myquery) {
		var dfd = q.defer(),
			res_result = [];
		c.on('connect', function () {}).on('error', function (err) {
			return dfd.reject(new Error(err));
		}).on('close', function () {});
		c.query(myquery)
			.on('result', function (res) {
				res
					.on('row', function (row) {
						res_result.push(row);
					})
					.on('error', function (err) {
						dfd.reject(new Error(err));
					})
					.on('end', function () {});
			})
			.on('end', function () {
				dfd.resolve(res_result);
			});
		return dfd.promise;
	}

	exports.showDb = showDb;
}());