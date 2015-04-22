define(['app'], function (app) {
	app.factory('authInterceptor', authInterceptor);
	authInterceptor.$inject = ['$injector'];
	function authInterceptor($injector) {
		var greeting = $injector.get('mainViewFactory');
		var factory = {
			request: request,
			response: response
		};
		return factory;

		function request(config) {
			var token = mainFac.getToken();
			if (token) {
			config.headers.authorization = 'ali is just'  + token ;
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
		//$httpProvider.responseInterceptors.push('authInterceptor');
	});
});