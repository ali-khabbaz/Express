define(['app'], function (app) {
	app.factory('mainViewFactory', mainViewFactory);
	mainViewFactory.$inject = ['$http', '$window'];

	function mainViewFactory($http, $window) {
		var factory = {
				getToken: getToken,
				setToken: setToken,
				isAuthenticated: isAuthenticated,
				removeToken: removeToken,
				request: request,
				response: response
			},
			storage = $window.localStorage,
			cached_token;
		return factory;

		function setToken(token) {
			cached_token = token;
			storage.setItem('userToken', token);
		}

		function getToken() {
			if (!cached_token) {
				cached_token = storage.getItem('userToken');
			}
			return cached_token;
		}

		function isAuthenticated() {
			if (!!getToken()) {
				console.log(getToken());
			}

			return !!getToken();
		}

		function removeToken() {
			cached_token = null;
			storage.removeItem('userToken');
		}

		function request(config) {
			var token = getToken();
			if(token){
				config.headers.authorization = 'ali is just'+ token ;
			}
			return config ;
		}

		function response(res) {
			return res ;
		}
	}

	app.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push('mainViewFactory');
	}]);
});