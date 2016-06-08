myApp.controller('globalController', ['$scope', function($scope){
	$scope.global = {};
	$scope.global.navUrl = 'templates/nav.html';
}]);
myApp.controller('navController', ['$scope', function($scope){
	angular.extend($scope, {
		navUrl: []
	});
}]);
//# sourceMappingURL=controllers.js.map
