'use strict';
angular.module('aula3')
.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
	
}])

.controller('Cadastro', ['$rootScope', '$scope','$http',"Requisicao", function($rootScope, $scope,$http,Requisicao){
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
		/*Requisicao.cadastrar(usuario)*/
		window.location = "#/cadastrados"

	}
}])
.controller('Cadastrados', ['$rootScope', '$scope','$http','Requisicao', function($rootScope, $scope,$http,Requisicao){
	/*$http({
	        method: 'GET',
	        url:"http://ip:3000/usuarios",
	        headers: {
	          'Content-Type': 'application/json',
	          'Accept': 'application/json'
	        }
	      }).then(function successCallback(response) {
	        console.log(response)
	        $rootScope.cadastrados = response.data;

	      },
	      function errorCallback(response) {
	        //$.toast('Erro ao identificar localização atual.', {sticky: true, type: 'danger'});                
	      });*/
	      
	      /*Requisicao.listar(function(res){
	      	console.log(res)
	      	$rootScope.cadastrados = res;
	      },function(){
	      	alert("Erro")
	      })*/
	      Requisicao.listar();
}])
