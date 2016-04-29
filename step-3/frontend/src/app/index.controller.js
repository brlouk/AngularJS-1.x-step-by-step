(function() {
	'use strict';

	angular.module('myapp')
			.controller('ConstantController', ConstantController);

	function ConstantController(apiConfig) {
		var vm = this;
		vm.apiURL = apiConfig.url;
	}

	ConstantController.$inject = [ 'apiConfig' ];

	angular.module('myapp').controller('ValueController', ValueController);

	function ValueController(logParam, $log) {
		var vm = this;
		vm.console = logParam;
		$log.debug("I'm " + logParam.user + " surfing on " + logParam.app);
	}

	ValueController.$inject = [ 'logParam', '$log' ];

	angular.module('myapp').controller('IPController', IPController);

	function IPController(IPService) {
		var vm = this;
		vm.data = IPService.getIPInfo();
	}

	IPController.$inject = [ 'IPService' ];

})();
