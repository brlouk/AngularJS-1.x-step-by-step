(function() {
	'use strict';
	angular.module('myapp').controller('myIPController',myIPController);
	
	function myIPController ($scope){
		$scope.ip='127.0.0.1';
	}
	
	myIPController.$inject=['$scope'];

})();
