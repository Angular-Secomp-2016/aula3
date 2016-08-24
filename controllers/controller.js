'use strict';
angular.module('aula3')
.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
	$scope.cadastrados = [];
	$scope.temCartao = false;

	$scope.mostrarCartao = function(mostrar){
		if (mostrar == "Sim"){
			$scope.temCartao = true;
		} else{
			$scope.temCartao = false;
		}
	}


	$scope.cadastrar = function(){
	
		var usuario = {
			nome:$scope.nome,
			idade: $scope.idade,
			sexo:$scope.sexo,
			numero_cartao: $scope.numero_cartao,
			temCartao: $scope.possuiCartao

		};

		$scope.cadastrados.push(usuario);
		
		//window.location = "cadastrados.html"

	}
}]);
