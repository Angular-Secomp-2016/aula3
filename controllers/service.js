angular.module('aula3')
.factory('Requisicao', ['$http','$rootScope', function($http,$rootScope) {
   var ip = "http://10.246.38.253:3000"
   var config = {headers: {
	          'Content-Type': 'application/json',
	          'Accept': 'application/json'
	        }

   }
   return{
   		cadastrar:function(data){
   			$http({
	        method: 'POST',
	        data: data,
	        url:ip+"/usuarios",
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
   		},
   		listar:function(success,error){
   			/*$http({
	        method: 'GET',
	        url:ip+"/usuarios",
	        headers: {
	          'Content-Type': 'application/json',
	          'Accept': 'application/json'
	        }
	      }).then(function successCallback(response) {
	        console.log(response)
	        $rootScope.cadastrados= response.data;

	      },
	      function errorCallback(response) {
	        //$.toast('Erro ao identificar localização atual.', {sticky: true, type: 'danger'});                
	      });*/
	      $http.get(ip+'/usuarios', config).success(success).error(error)

   		}
   }
 }]);