define([], function () {
	return {
		defaultRoutePath: '/main',
		routes: {
			'/main': {
				templateUrl: '/app/main/main.html'
			},
			'/page1': {
				templateUrl: '/app/page1/page1.html',
				dependencies: [
					'/app/page1/page1Ctrl.js'
				]
			},
			'/register': {
				templateUrl: '/app/register/register.html',
				dependencies: [
					'/app/register/registerCtrl.js',
					'/app/register/registerDirective.js'
				]
			}
		}
	};
});