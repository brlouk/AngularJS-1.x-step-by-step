(function() {
	'use strict';

	angular.module('myapp').controller('myIPController', myIPController);

	function myIPController($scope) {
		$scope.ip = '169.159.2.1';
	}

	myIPController.$inject = [ '$scope' ];

	angular.module('myapp').controller('myActorController', myActorController);

	function myActorController() {
		var vm = this;
		vm.brucewayne = {
			firstname : 'Bruce',
			lastname : 'Wayne',
			show : true
		};
		vm.liamneeson = {
			firstname : 'Liam',
			lastname : 'Neeson',
			show : true
		};
		vm.ctrlName = 'myActorController';
		vm.timestamp = Date.now();
		vm.hide = function(actor) {
			actor.show = false;
		};
	}
	
	angular.module('myapp').controller('myDataController',myDataController);
	
	function myDataController (){
		var vm=this;
		vm.content="";
	}

})();
