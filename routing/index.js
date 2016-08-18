var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
  
    .when("/", {
        templateUrl : "main.html",
    })

    .when("/kemerovo",{
        template: "<h1>This... Is... Kemerovo-o-o!!!!!!!</h1>"
    })

    .when("/london", {
        templateUrl : "london.html"
    })

    .when("/paris", {
        templateUrl : "paris.html"
    });
});
