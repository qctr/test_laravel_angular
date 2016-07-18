/*
 * User Controller by Angular
 * @author: Quoc Tri Tran
 */
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