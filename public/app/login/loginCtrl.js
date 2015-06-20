(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('loginCtrl', loginCtrl);

		loginCtrl.$inject = ['$http', 'mainViewFactory'];

		function loginCtrl($http, mainFac) {
			var vm = this;
			vm.login = login;
			vm.authenticated = mainFac.isAuthenticated();
			vm.logOut = logOut;

			function logOut() {
				mainFac.removeToken();
				vm.authenticated = mainFac.isAuthenticated();
			}

			function login(email, password) {
				var url = "http://127.0.0.1/app/login";
				var data = {
					"email": email,
					"password": password
				};
				$http.post(url, data)
					.success(function (res) {
						mainFac.setToken(res.token);
						vm.authenticated = mainFac.isAuthenticated();
					}).error(function (err) {
						console.log('error is', err);
					});
			}
		}

	});
}());