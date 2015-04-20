(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('jobsCtrl', jobsCtrl);
		jobsCtrl.$inject = ['$http', 'mainViewFactory'];

		function jobsCtrl($http, mainViewFactory) {
			var vm = this;
			vm.jobs_data = '';
			getJobs();

			function getJobs() {
				console.log('send data');
				var url = "http://127.0.0.1/app/jobs";
				$http.post(url)
					.success(function (res) {
						console.log('resuslt is', res);
						vm.jobs_data = res;
					}).error(function (err) {
						console.log('error is', err);
						vm.jobs_data = err;
					});
			}
		}
	});
}());