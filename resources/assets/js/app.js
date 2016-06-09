var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/main.html'
	});

	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'userController'
	});

	$routeProvider.when('/logout', {
		templateUrl: 'templates/main.html'
	});

	$routeProvider.when('/private', {
		templateUrl: 'templates/private.html',
		controller: 'userController',
		authenticated: true
	});

	$routeProvider.when('/empty', {
		templateUrl: 'templates/empty.html'
	});

	$routeProvider.otherwise('/');
}]);

myApp.run(['$rootScope', '$location', 'userModel', function($rootScope, $location, userModel){
	$rootScope.$on('$routeChangeStart', function(event, next){
		if(next.$$route.authenticated){
			if(!userModel.getAuthStatus()){
				console.log('deny');
				$location.path('/');
			}
		}
	});
}]);