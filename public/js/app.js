var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/main.html'
	});

	$routeProvider.otherwise('/', {
		templateUrl: 'templates/main.html'
	});
}]);
//# sourceMappingURL=app.js.map
