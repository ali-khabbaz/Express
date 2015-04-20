(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('loginCtrl', loginCtrl);

		loginCtrl.$inject = ['$http'];

		function loginCtrl($http) {
			var vm = this;
			vm.login = login;

			function login(email, password) {
				console.log('email', email, 'password', password);
				var url = "http://127.0.0.1/app/login";
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