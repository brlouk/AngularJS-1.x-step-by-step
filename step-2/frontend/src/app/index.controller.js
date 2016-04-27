(function() {
	'use strict';

	angular.module('myapp').controller('MyController', MyController);

	function MyController($scope) {
		$scope.hi = "I'm here!";
	}
	
	angular.module('myapp').controller('MyController2', MyController2);

	function MyController2() {
		this.hi="I'm here!";
	}

})();
