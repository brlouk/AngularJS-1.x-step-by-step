(function() {
	'use strict';

	angular.module('myapp').controller('MyController', MyController);

	function MyController($scope) {
		$scope.hi = "Hi! My name is $scope!";
	}

	angular.module('myapp').controller('ActorController1', ActorController1);

	function ActorController1() {
		var vm = this;
		vm.name = "Bruce Wayne";
	}

	angular.module('myapp').controller('ActorController2', ActorController2);

	function ActorController2() {
		var vm = this;
		vm.displayName = "";

		vm.showActorName = function() {
			vm.displayName = "Bruce Wayne";
		}
	}

	angular.module('myapp').controller('CustomerController',
			CustomerController3);

	function CustomerController3() {
		var vm = this;

		vm.firstname = "";
		vm.lastname = "";

		vm.submit = function() {
			vm.newcustomer.firstname = vm.firstname;
			vm.newcustomer.lastname = vm.lastname;
		}

		vm.reset = function() {
			vm.newcustomer = {};
		}

		vm.reset();
	}

	angular.module('myapp').controller('ActorController3', ActorController3);

	function ActorController3() {
		var vm = this;
		vm.list = [ {
			"firstname" : "Bruce",
			"lastname" : "Wayne"
		}, {
			"firstname" : "Jet",
			"lastname" : "Li"
		}, {
			"firstname" : "liam",
			"lastname" : "Neeson"
		}, {
			"firstname" : "Maggie",
			"lastname" : "Grace"
		} ];
	}

	angular.module('myapp').controller('ImageController', ImageController);

	function ImageController() {
		var vm = this;
		vm.list = [ {
			"name" : "AngularJS",
			"url" : "https://angularjs.org/img/AngularJS-large.png"
		}, {
			"name" : "Angular Attack",
			"url" : "https://angularjs.org/img/angularattack-logo.png"
		} ];
	}

})();
