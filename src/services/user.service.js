angular.module('demoApp').factory('UserService', function($http){

	var myService={};

	var url ='https://gentle-brushlands-6591.herokuapp.com/api/users';

	// fonction pour enrgistrer les utilisateurs
	myService.registerUser = (user){
		return $http.post(url, usr);
	};

	myService.getUsers = function(){
		return $http.get(url).then(function(response){
			return response.data
		});
	};	

	return myService;

});
