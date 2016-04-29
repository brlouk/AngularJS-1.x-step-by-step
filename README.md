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
* Filter Number — using {{ | }} notation to format data for display

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

In the second step, we initiate programatically the most used concepts of AngularJS.

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
In this step, we discuss how powerful is the dependency Injection in AngularJS.

Dependency Injection (DI) is a software design pattern, in charge of creating components, resolving their dependencies, and providing them to other components as requested.You can use it when defining components or when providing run and config blocks for a module.

In Angular, components are instantiated and wired together automatically by the injector service.
To create objects as services or as specialized objects, the injector uses the following recipes at most once, which means all services are singletons:

* Value / Constant — Angular value and constant services are an ideal way to provide application a shared data without having to pollute the global namespace.
* Factory — A factory is a function which is used to return calculated value on demand for a service or controller.
* Service — A service is a Singleton Lazily instantiated object. You can use services to organize and share code across your app.
* Provider — A Provider is the core recipe for all the other recipe, it's the most verbose. You should use the Provider recipe only when you want to expose an API for application-wide configuration.
