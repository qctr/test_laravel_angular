/*
 * Navigaton Controller by Angular
 * @author: Quoc Tri Tran
 */
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