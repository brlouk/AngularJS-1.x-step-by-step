(function() {
	'use strict';
	angular.module('myapp').directive('myIp', myIp);

	function myIp() {
		return {
			template : '<h3>My IP : 127.0.0.1</h3>'
		}
	}

})();