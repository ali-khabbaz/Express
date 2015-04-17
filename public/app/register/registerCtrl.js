(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('registerCtrl', registerCtrl);

		registerCtrl.$inject = ['$http'];

		function registerCtrl($http) {
			var vm = this;
			vm.register = register;

			function register(email, password) {
				console.log('email', email, 'password', password);
				var url = "http://127.0.0.1/app/register";
				var data = {"user":email,"password":password};
				$http.post(url,data)
				.success(function(res){
					console.log('resuslt is',res);
				}).error(function(err){
					console.log('error is',err);
				});
			}
		}

	});
}());