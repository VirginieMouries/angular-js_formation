angular.module('demoApp').factory('MessageService',function($http){

	var url ='https://gentle-brushlands-6591.herokuapp.com/api/messages';

	var myObject={};

	myObject.getMessages = function(){
		return $http.get(url).then(function(response){
			// console.log(response);
			return response.data;
		});		
	};

	// myObject.messages=this.getMessages;


	myObject.sendMessage=function(message){
		// this.messages.push(message);
		return $http.post(url, {message: message}).then(function(response){
			console.log(response);
			console.log('attention message');
		});
	};	

	return myObject;

});