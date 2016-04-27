(function() {
	'use strict';
	angular.module('myapp').controller('MyController', MyController);

	function MyController($scope) {
		$scope.hi="I'm here!";
	}

})();
