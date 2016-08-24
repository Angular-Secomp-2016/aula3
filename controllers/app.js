'use strict';
var app = angular.module('aula3',['ngRoute'])

app.config(['$routeProvider',function ($routeProvider) {
    
	 $routeProvider
	   .when('/', {
	      templateUrl : 'views/home.html',
	      controller     : 'Home'
	   })
	   
	   .otherwise ({ redirectTo: '/' });

	  }
    
]);
