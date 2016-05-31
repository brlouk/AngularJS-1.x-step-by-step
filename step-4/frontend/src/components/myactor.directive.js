(function() {
	'use strict';
	angular.module('myapp').directive('myActor', myActor);

	function myActor() {
		return {
			restrict : 'E', // Only Match Element
			scope : {
				info : '=',// Same as info: '=info, Bidirectional binding,
				controllerName : '@', // bind a local scope property to the
				// value of DOM attribute.
				timestamp : '<', // one-way (one-directional) binding
				hide : '&' // Expression, function
			},
			template : '<h3>Actor from "{{controllerName}} created @ {{timestamp | date:"MM/dd/yyyy h:mma"}}"'
					+ ' : {{info.lastname}}, {{info.firstname}} '
					+ '<a href ng-click="hide()">&times;</a></h3>'
		}
	}

})();