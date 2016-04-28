# AngularJS-1.x-step-by-step
This Tutorial is designed for software developers who want to learn the basics of AngularJS in simple and easy steps. In advanced steps, we use Bower, Gulp and NodeJS to simplify developement.

Each Step has its own folder so you can work on each step separately.

Live Demo, Comming Soon!

# Steps

### Step 1 : Basics / Templates

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
In the second step, we initiate programatically the most used concepts of AngularJS.

* Module — A module is a collection of services, directives, controllers, filters, and configuration information.
* Controller — A Controller is defined by a JavaScript constructor function that is used to augment the Angular Scope.
* Scope — Scope is an object that refers to the application model

#### Get Started
* Create a html file "index.html" and add ng-app directive with the name of the main module "myapp"
```html
<html ng-app="myapp"> </html>
```
* Create a js file "index.module.js" to define the main module "myapp"
```javascript
angular.module('myapp', []);
```
* Create a js file "index.controller.js" to define a simple controller within the module "myapp"
```javascript
angular.module('myapp').controller('MyController', MyController);

	function MyController($scope) {
		$scope.hi = "I'm here!";
	}
```



