(function() {
	'use strict';

	angular.module('myapp').factory('IPFactory', IPFactory);

	function IPFactory($http) {

		/*DECLARATION*/
		
		var service = {
			getIPInfo : getIPInfo
		}

		return service;

		/*IMPLEMENTATION*/
		
		function getIPInfo() {
			return $http({
				  method: 'GET',
				  url: 'https://api.ipify.org?format=json'
				});
		}
	}
	
	IPFactory.$inject=['$http'];

})();