(function() {
	'use strict';
	angular.module('myapp').directive('myIp2', myIp2);

	function myIp2() {
		return {
			template : '<h3>My IP : {{ip}}</h3>'
		}
	}

})();