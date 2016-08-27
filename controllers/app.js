'use strict';
var app = angular.module('aula3',['ngRoute'])

app.config(['$routeProvider',function ($routeProvider) {
    
	 $routeProvider
	   .when('/', {
	      templateUrl : 'views/home.html',
	      controller     : 'Home'
	   })
	   .when('/cadastro', {
	      templateUrl : 'views/cadastro.html',
	      controller     : 'Cadastro'
	   })
	   .when('/cadastrados', {
	      templateUrl : 'views/cadastrados.html',
	      controller     : 'Cadastrados'
	   })
	   .when('/localizar', {
	      templateUrl : 'views/localizar.html',
	      controller     : 'Home'
	   })
	   
	   .otherwise ({ redirectTo: '/' });

	  }
    
]);
