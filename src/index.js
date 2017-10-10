var angular = require('angular')
require('angular-route')

// angular.module('demoApp', [])

var module = angular.module('demoApp', [ 'ngRoute' ])

require('./routes/main/main.controller')
require('./routes/login/login.controller')
require('./routes/register/register.controller')
require('./services/messageService')
require('./services/userService')

module.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/main.view.html',
    controller: 'MainController',
    controllerAs:'main'
  }),

  $routeProvider.when('/login', {
    templateUrl: '/templates/login.view.html',
    controller: 'LoginController',
    controllerAs:'login'
  }),

   $routeProvider.when('/register', {
    templateUrl: '/templates/register.view.html',
    controller: 'RegisterController',
    controllerAs:'register'
  })
})