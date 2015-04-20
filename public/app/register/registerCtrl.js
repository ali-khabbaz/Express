(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('registerCtrl', registerCtrl);

		registerCtrl.$inject = ['$http', 'mainViewFactory'];

		function registerCtrl($http, mainViewFactory) {
			var vm = this;
			vm.register = register;
			vm.logOut = logOut;
			vm.authenticated = mainViewFactory.isAuthenticated();
			vm.user_email = '';

			function logOut() {
				mainViewFactory.removeToken();
				vm.authenticated = mainViewFactory.isAuthenticated();
			}

			function register(email, password) {

				console.log('email', email, 'password', password);

				var url = "http://127.0.0.1/app/register";
				var data = {
					"user": email,
					"password": password
				};

				$http.post(url, data)
					.success(function (res) {

						console.log('resuslt is', res);

						vm.user = res.user_email;

						mainViewFactory.setToken(res.token);

						vm.authenticated = mainViewFactory.isAuthenticated();

					}).error(function (err) {
						console.log('error is', err);
					});
			}
		}

	});
}());