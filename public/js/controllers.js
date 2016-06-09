myApp.controller('globalController', ['$scope', function($scope){
	$scope.global = {};
	$scope.global.navUrl = 'templates/nav.html';
}]);
myApp.controller('navController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	/* variables */
	angular.extend($scope, {
		user: userModel.getUserObject(),
		navUrl: [{
			name: 'Home',
			url: '/'
		},{
			name: 'Link',
			url: 'empty'
		},{
			name: 'Dropdown',
			url: 'empty',
			subMenu: [{
				name: 'Submenu 1',
				url: '#empty'
			},{
				name: 'Submenu 2',
				url: '#empty'
			},{
				name: 'Submenu 3',
				url: '#empty'
			}]
		}]
	});

	/* methods */
	angular.extend($scope, {
		doLogout: function(){
			userModel.doUserLogout();
			window.location.reload();
		},
		checkActiveLink: function(routeLink){
			if($location.path() == routeLink){
				return 'active';
			}
		}
	});
}]);
myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	angular.extend($scope, {
		doLogin: function(loginForm){
			data = {
				email: $scope.login.email,
				password: $scope.login.password
			};

			userModel.doLogin(data).then(function(){
				$location.path('/private');
			});
		},
	});
}]);
//# sourceMappingURL=controllers.js.map
