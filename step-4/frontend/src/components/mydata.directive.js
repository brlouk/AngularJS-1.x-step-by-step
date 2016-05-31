(function() {
	'use strict';
	angular.module('myapp').directive('myData',myData);
	
	function myData (){
		return {
			
			link : function link (scope,element,attrs){
				//get a scope name
				var scopeName= attrs.myData;
				
				//update element content
				function updateContent(value){
					element.text(value);
					element.css("background-color", "green");
				}
				
				//Watch for change on scope
				scope.$watch(scopeName,function(value){
					updateContent(value);
				});
				
			}
		}
		
	}

})();