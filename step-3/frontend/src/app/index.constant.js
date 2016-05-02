(function() {
	'use strict';
	
	//CONSTANT EXAMPLE
	angular.module('myapp').constant('apiConfig', {
		name : 'whatismyip',
		//url : "http://ip-api.com/json"
		url : 'https://api.ipify.org?format=json'
	});
	
	angular.module('myapp').constant('appConfig', {
		debug : true
	});

})();
