# AngularJS-1.x-step-by-step
This Tutorial is designed for software developers who want to learn the basics of AngularJS in simple and easy steps. In advanced steps, we use Bower, Gulp and NodeJS to simplify developement.

Each Step has its own folder so you can work on each step separately.Take a look at the code souce for details.

# Steps

### Step 1 : Basics / Templates
[Live Demo](http://s618867135.onlinehome.fr/AngularJS-1.x-step-by-step/step-1/frontend/src/app/)

In this first step, we use only elementary AngularJS concepts to render a dynamic view in the browser.

* Auto Bootstrap — The ngApp directive designates the root element of the application.
* Init Scope — The ngInit directive allows you to evaluate an expression in the current scope.   
* Markup — The double curly brace notation {{ }} to bind expressions to html elements.
* Filters — using {{ | }} notation to format data for display

#### Get Started

To Enable AngularJS on your HTML, as a minimum requirement,  you need to :

* Create a simple html file "index.html"
* Add "ng-app" to your "html" element on the top of your file.
```html
<html ng-app> </html>
```
* Download a zip of AngularJs from https://angularjs.org/ and copy "angular.js"
* Load AngularJS Script File on the "body" element (for performance concerns)
```html
<body> <script src="angular.js"></script></body>
```
### Step 2 : Module / Controller / Scope
[Live Demo](http://s618867135.onlinehome.fr/AngularJS-1.x-step-by-step/step-2/frontend/src/app/)

In the second step, we initiate programatically some concepts of AngularJS.

* Module — A module is a collection of services, directives, controllers, filters, and configuration information.
* Controller / Controller As — A Controller is defined by a JavaScript constructor function that is used to augment the Angular Scope.
* Scope — A Scope is an object that refers to the application model
* Angular directives — ng-submit, ng-click, ng-repeat, select, ng-src, ng-model

#### Get Started
* Create a html file "index.html" and add ng-app directive with the name of the main module "myapp"
```html
<html ng-app="myapp"> </html>
```
* Create a js file "index.module.js" to define the module
```javascript
angular.module('myapp', []);
```
* Create a js file "index.controller.js" to define a simple controller within the module
```javascript
angular.module('myapp').controller('MyController', MyController);

function MyController($scope) {
	$scope.hi = "I'm here!";
}
```
* Use the defined controller and its scope in html file
```html
<div ng-controller="MyController">
	<p>My scope says hi :  {{hi}}</p>
</div>
```
* It's recommanded to use "Controller As" with vm instead of controller
```html
<div ng-controller="CustomerController as customer">
	<p>Customer :  {{customer.name}}</p>
</div>
```
```javascript
angular.module('myapp').controller('CustomerController', CustomerController);
function CustomerController() {
	var vm = this;
	vm.name = "Bruce Wayne";
}
```
### Step 3 : Dependency Injection / Configuration / Angular Services

[Live Demo](http://s618867135.onlinehome.fr/AngularJS-1.x-step-by-step/step-3/frontend/src/app/)

In this step, we discuss how powerful is the dependency Injection in AngularJS.

Dependency Injection (DI) is a software design pattern, in charge of creating components, resolving their dependencies, and providing them to other components as requested.You can use it when defining components or when providing run and config blocks for a module.

In Angular, components are instantiated and wired together automatically by the injector service.
To create objects as services or as specialized objects, the injector uses the following recipes at most once, which means all services are singletons:

* Value / Constant — Angular value and constant services are an ideal way to provide application a shared data without having to pollute the global namespace.
* Factory — A factory is a function which is used to return calculated value or a service on demand for a controller.
* Service — A service is a Singleton Lazily instantiated object. You can use services (or Factories) to organize and share code across your app.
* Provider — A Provider is the core recipe for all the other recipe, it's the most verbose. You should use the Provider recipe only when you want to expose an API for application-wide configuration.

(Since Services are so similar to factories, It's recommended to use a factory instead for consistency in practice.)

AngularJS configuration, it's suitable to configure providers and a good example to understand DI. You can take a look at the example below :
```javascript
(function() {
	'use strict';

	angular.module('myapp').config(config);

	//USE DEPENDENCIES
	//function name (DEP1,DEP2,...)
	function config($logProvider, appConfig) {
		// Enable Debug log
		$logProvider.debugEnabled(appConfig.debug);
	}

	
	//INJECT DEPENDENCIES : $logProvider (AngularService) and appConfig (Our Constant Json Params)
	//function.$inject=['DEP1', 'DEP2',...]
	config.$inject = [ '$logProvider', 'appConfig' ];
})();
```

#### Get Started
* Create a JS File "index.value.js"
```javascript
angular.module('myapp').value('logParam', {
	user : 'anonymous',
	app : 'AngularJS-1.x-step-by-step'
});
```
* Create a JS File "index.constant.js"
```javascript
angular.module('myapp').constant('apiConfig', {
	name : 'whatismyip',
	url : 'https://api.ipify.org?format=json'
});
angular.module('myapp').constant('appConfig', {
	debug : true
});
```
* Create a JS File "index.service.js"
```javascript
angular.module('myapp').service('IPService', IPService);

function IPService() {
	this.getIPInfo = function() {
		return {
			"city" : "Suresnes",
			"country" : "France",
			"countryCode" : "FR",
			"regionName" : "Ile-de-France",
			"status" : "success",
			"timezone" : "Europe/Paris",
			"zip" : "92150",
			"IP" : "127.0.0.1"
			}
		}
	}
```
* Create a JS File "index.factory.js"
```javascript
angular.module('myapp').factory('IPFactory', IPFactory);
	function IPFactory($http,apiConfig) {
		/*DECLARATION*/
		
		var service = {
			getIPInfo : getIPInfo
		}

		return service;

		/*IMPLEMENTATION*/
		
		function getIPInfo() {
			return $http({
				  method: 'GET',
				  url: apiConfig.url
				});
		}
	}
	
IPFactory.$inject=['$http','apiConfig'];
```
* Create a JS File "index.config.js"
```javascript
angular.module('myapp').config(config);
function config($logProvider, appConfig) {
	// Enable Debug log
	$logProvider.debugEnabled(appConfig.debug);
}
config.$inject = [ '$logProvider', 'appConfig' ];
```
* Define a controller as example to use factory
```javascript
angular.module('myapp').controller('IPController2', IPController2);

	function IPController2(IPFactory, $log) {
		var vm = this;
		IPFactory.getIPInfo().then(function(response){
			vm.data=response.data.ip
		}).catch(function(error){
			//error
			$log.error("An error occured!");
		});
	}

	IPController2.$inject = [ 'IPFactory','$log' ];
```

```html
<div ng-controller="IPController2 as ip2">
	<h2>AngularJS - Factory</h2>
	Your IP : {{ip2.data}}
</div>
```

### Step 4 : Directives

In this step, we'll explain you how you can create directives in your app.

Directives are a set of marker on a DOM element (such as an attribute, element, comment or css class), used to extend HTML by attaching specified behavior.

Angular comes with a set of these directives built-in, like ng-bind and ng-model already seen in previous steps and you can create your own directives.

#### Get Started

###### Template-expanding directive : Basic Directive

* Create a JS File "myip.directive.js"
```javascript
(function() {
	'use strict';
	angular.module('myapp').directive('myIp', myIp);

	function myIp() {
		return {
			template : '<h3>My IP : 127.0.0.1</h3>'
		}
	}

})();
```
* HTML FILE : Angular uses camelCase normalized to match directive (myIp => my-ip )
```html
<my-ip></my-ip>
```
###### Template-expanding directive : Controller Scope
* Create a JS File "index.controller.js"
```javascript
(function() {
	'use strict';
	angular.module('myapp').controller('myIPController',myIPController);
	
	function myIPController ($scope){
		$scope.ip='169.159.2.1';
	}
	
	myIPController.$inject=['$scope'];

})();
```
* Create a JS File "myip2.directive.js"
```javascript
(function() {
	'use strict';
	angular.module('myapp').directive('myIp2', myIp2);

	function myIp2() {
		return {
			template : '<h3>My IP : {{ip}}</h3>'
		}
	}

})();
```
* HTML FILE : you just need to declare the controller for binding scope
```html
	<div ng-controller='myIPController'>
		<h2>Template-expanding directive : Controller Scope</h2>
		<my-ip2></my-ip2>
	</div>
```
###### Restrict Option
* It is restricted to attribute and elements only by default. In order to create directives that are triggered by class name, you need to use the restrict option, A : Attribute, E : Element, C: Class, M : Comment. Theses restrictions can all be combined as needed.
Example :
```html
function myIp3() {
		return {
			restrict : 'AEC', // matches either attribute or element or class name
			template : '<h3>My IP : {{ip}}</h3>'
		}
	}
```
###### Isolating the Scope of a Directive
To avoid create a new controller each time you want to reuse directive with a different scope, you need to use scope option in your directive to separate the scope inside from the scope outside (the scope of parent such as Controller). This is useful when creating reusable components, which should not accidentally read or modify data in the parent scope.

The scope property can be :
* falsy : The directive will use its parent's scope.
* true: Only one scope is create for multi-directives.
* Object {...} :A new "isolate" scope is created for the directive.

To define how the property is bound to the parent scope, you can use theses wildcards : 
*  @ : bind a local scope property to the value of DOM attribute.
*  = : bidirectional binding between a local and parent scope property
*  < : one-way (one-directional) binding between a local and parent scope property (parent -> local )
*  & :  provides a way to execute an expression in the context of the parent scope.

Getting started

* Create a JS File "myactor.directive.js"
```javascript
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
				hide : '&' //Expression, function
			},
			template : '<h3>Actor from "{{controllerName}} created @ {{timestamp | date:"MM/dd/yyyy h:mma"}}"'
					+ ' : {{info.lastname}}, {{info.firstname}} '
					+ '<a href ng-click="hide()">&times;</a></h3>'
		}
	}

})();
```
* Controller : A Controller As which defines some scope properties : brucewayne, liamneeson.
```javascript
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
		}
	}

```
* HTML FILE : you can see that we can reuse Directive inside the same controller with different scope properties.
```html
<div ng-controller='myActorController as actor'>
	<h2>Isolating the Scope of a Directive</h2>
	<my-actor info="actor.brucewayne" controller-name="{{actor.ctrlName}}"
		timestamp="actor.timestamp" hide="actor.hide(actor.brucewayne)"
		ng-show="actor.brucewayne.show"></my-actor>
	<my-actor info="actor.liamneeson" controller-name="{{actor.ctrlName}}"
		timestamp="actor.timestamp" hide="actor.hide(actor.liamneeson)"
		ng-show="actor.liamneeson.show"></my-actor>
</div>
```

###### Creating a Directive that Manipulates the DOM : 
+ Understand Angular HTML Compiler : the compilation process in Angular happens in two phases.
  - Compile: traverse the DOM and collect all of the directives. The result is a composed linking function.
  - Link: combine the directives with a scope and produce a live view. Any changes in the scope model are reflected in the view, and any user interactions with the view are reflected in the scope model. This makes the scope model the single source of truth.
+ How directives are compiled : the 4 steps
  - Step 1: parse HTML into DOM element
  - Step 2: compile the template
  - Step 3: link the compiled template with the scope.
  - Step 4: Append to DOM (optional)
```javascript
var $compile = ...; // injected into your code
var scope = ...;
var parent = ...; // DOM element where the compiled template can be appended

var html = '<div ng-bind="exp"></div>';

// Step 1: parse HTML into DOM element
var template = angular.element(html);

// Step 2: compile the template
var linkFn = $compile(template);

// Step 3: link the compiled template with the scope.
var element = linkFn(scope);

// Step 4: Append to DOM (optional)
parent.appendChild(element);
```
+ link option : Directives that want to modify the DOM typically use the link option to register DOM listeners as well as update the DOM, function link(scope, element, attrs, controller, transcludeFn) { ... } :
  - scope is an Angular scope object.
  - element is the jqLite-wrapped element that this directive matches.
  - attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
  - controller is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
  - transcludeFn is a transclude linking function pre-bound to the correct transclusion scope (See later in next step).

Getting started :
* Create a JS File "mydata.directive.js"
```javascript
(function() {
	'use strict';
	angular.module('myapp').directive('myData',myData);
	
	function myData (){
		return {
			
			link : function link (scope,element,attrs){
				//get scope name
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
```
* Use a directive "my-data" on html span
```html
	<div ng-controller="myDataController as data">
		<h2>Creating a Directive that Manipulates the DOM</h2>
		<input type="text" ng-model="data.content" placeholder="Saisir Text..."/>
		<span my-data="data.content"></span>
	</div>
```
* Create a new controller "myDataController" with scope property "content"
```javascript
	angular.module('myapp').controller('myDataController',myDataController);
	
	function myDataController (){
		var vm=this;
		vm.content="";
	}
```

###### Creating a Directive that Wraps Other Elements : Transclusion
TODO
