'use strict';
angular.module('aula3')
.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
	
}])

.controller('Cadastro', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	$scope.temCartao = false;
	$rootScope.cadastrados = [];

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

		$rootScope.cadastrados.push(usuario);

		 /*$http({
	        method: 'POST',
	        data: usuario,
	        url:"http://ip:3000/usuarios",
	        headers: {
	          'Content-Type': 'application/json',
	          'Accept': 'application/json'
	        }
	      }).then(function successCallback(response) {
	        console.log(response)

	      },
	      function errorCallback(response) {
	        //$.toast('Erro ao identificar localização atual.', {sticky: true, type: 'danger'});                
	      });
		*/
		window.location = "#/cadastrados"

	}
}])
.controller('Cadastrados', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
}])
