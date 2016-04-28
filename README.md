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

1.  Add "ng-app" to your "html" element on the top of your html file.
```html
<html ng-app> </html>
```
2.  Load AngularJS Script File on the "body" element (for performance concerns)
```html
<body> <script src="angular.js"></script></body>
```
### Step 2 : Module / Controller / Scope
In the second step, we initiate programatically the most used concepts of AngularJS.

* Module — A module is a collection of services, directives, controllers, filters, and configuration information.
* Controller — A Controller is defined by a JavaScript constructor function that is used to augment the Angular Scope.
* Scope — Scope is an object that refers to the application model

