(function() {
	'use strict';

	angular.module('myapp').config(config);

	function config($logProvider, appConfig) {
		// Enable Debug log
		$logProvider.debugEnabled(appConfig.debug);
	}

	config.$inject = [ '$logProvider', 'appConfig' ];
})();