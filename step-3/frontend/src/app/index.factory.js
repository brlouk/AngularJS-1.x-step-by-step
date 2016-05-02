(function() {
	'use strict';

	angular.module('myapp').factory('IPFactory', IPFactory);

	function IPFactory($http,apiConfig) {

		/*DECLARATION*/
		
		var service = {
			getIPInfo : getIPInfo
		}

		return service;

		/*IMPLEMENTATION*/
		
		function getIPInfo() {
			return $http({
				  method: 'GET',
				  url: apiConfig.url
				});
		}
	}
	
	IPFactory.$inject=['$http','apiConfig'];

})();