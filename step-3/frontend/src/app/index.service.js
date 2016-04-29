(function() {
	'use strict';
	angular.module('myapp').service('IPService', IPService);

	function IPService() {
		this.getIPInfo = function() {
			return {
				"city" : "Suresnes",
				"country" : "France",
				"countryCode" : "FR",
				"regionName" : "Ile-de-France",
				"status" : "success",
				"timezone" : "Europe/Paris",
				"zip" : "92150",
				"IP" : "127.0.0.1"
			}
		}
	}

})();