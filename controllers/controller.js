'use strict';
angular.module('aula3')
.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	$scope.localizar = function(){
		$http({
	      method: 'GET',
	      url:"http://maps.googleapis.com/maps/api/geocode/json?address="+$scope.latitude+","+$scope.longitude,
	      headers: {
	        'Content-Type': 'application/json'
	      }
	      }).then(function successCallback(response) {
	        console.log(response.data);
	        // O array de componentes deve ser salvo numa lista, pra se procurar o nome do país
	        var listaEnderecos = response.data.results[0].address_components;
	        // O país será procurado na lista, através do tipo que está no Json
	        for (var i = 0; listaEnderecos.length > i; i++) {
	          if(listaEnderecos[i].types[0] == "country"){
	            $scope.pais = listaEnderecos[i].long_name;
	          }
	        }
		         
	      }, function errorCallback(response) {
	          
	      });
	}
	
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

		//$rootScope.cadastrados.push(usuario);

		 /*$http({
	        method: 'POST',
	        data: usuario,
	        url:"http://10.246.38.253:3000/usuarios",
	        headers: {
	          'Content-Type': 'application/json',
	          'Accept': 'application/json'
	        }
	      }).then(function successCallback(response) {
	        console.log(response)

	      },
	      function errorCallback(response) {
	        //$.toast('Erro ao identificar localização atual.', {sticky: true, type: 'danger'});                
	      });*/
		
		Requisicao.cadastrar(usuario);
		window.location = "#/cadastrados"

	}
}])
.controller('Cadastrados', ['$rootScope', '$scope','$http','Requisicao', function($rootScope, $scope,$http,Requisicao){
	/*$http({
	        method: 'GET',
	        url:"http://10.246.38.253:3000/usuarios",
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
	      
	      Requisicao.listar(function(res){
	      	console.log(res)
	      	$rootScope.cadastrados = res;
	      },function(){
	      	alert("Erro")
	      })
	      //Requisicao.listar();
}])
