// main.controller.js
angular.module('demoApp')
.controller('MainController',

	function(MessageService,UserService){
		// console.log(MessageService);

		var self = this;

		UserService.getUsers().then(function(users){
			console.log(users);
		});

		self.getMessage = function(){ 
			MessageService.getMessages().then(function(messages){
			console.log(messages);
			self.messages = messages;
			});

		};

		self.sendMessage = function(){
			MessageService.sendMessage(self.newMessage);
			self.newMessage='';			
		};

		self.getMessage();

		self.sendMessage();		
	} );

