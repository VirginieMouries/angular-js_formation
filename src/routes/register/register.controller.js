// register.controller.js

angular.module('demoApp')
.controller('RegisterController',function(UserService){
	var self = this;
	
	self.info = "Register te dit Bonjour";

	self.register = function(){
		var user ={
			firstname: self.firstname,
			lastname: self.lastname,
		}
	}
	// pour que l'utilisateur ne reste pas sur le formulaire, on fait un promise
	UserService.register(user).then(function(){
		console.log("utilisateur enrgistré");
		// $location.

	});

});