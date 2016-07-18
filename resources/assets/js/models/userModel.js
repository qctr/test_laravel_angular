/*
 * UserModel by Angular
 * @author: Quoc Tri Tran
 */
myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies){
	var userModel = {};

	userModel.doLogin = function(loginData) {
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'auth',
			method: 'POST',
			data: {
				email: loginData.email,
				password: loginData.password
			}
		}).success(function(response){
			$cookies.put('auth', JSON.stringify(response));
			
			var jQ = jQuery.noConflict();
			var authnav = jQ('.pull-right p a');
			authnav.each(function(){
				if(jQ(this).hasClass('ng-hide')){
					jQ(this).removeClass('ng-hide');
				}else{
					jQ(this).addClass('ng-hide');
				}
			});
		}).error(function(data, status, headers){
			alert('Login error: ' + data);
		});
	};

	userModel.getAuthStatus = function(){
		var status = $cookies.get('auth');
		if(status){
			return true;
		}else{
			return false;	
		}
	};

	userModel.getUserObject = function(){
		var userObject = angular.fromJson($cookies.get('auth'));
		return userObject;
	};

	userModel.doUserLogout = function(){
		$cookies.remove('auth');
	};

	return userModel;
}]);