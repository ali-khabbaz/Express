define(['app'], function (app) {
	app.factory('authInterceptor', authInterceptor);
	authInterceptor.$inject = ['$window'];

	function authInterceptor($window) {
		var storage = $window.localStorage;
		var factory = {
			request: request,
			response: response
		};
		return factory;

		function request(config) {
			var token = storage.getItem('userToken');
			console.log('auth token', token);
			if (token) {
				config.headers.authorization = 'ali is just.' + token;
			}
			return config;
		}

		function response(res) {
			return res;
		}
	}
	app.config(function ($httpProvider) {
		console.log('>>>>>>', $httpProvider.interceptors.length);
		$httpProvider.interceptors.push('authInterceptor');
	});
});