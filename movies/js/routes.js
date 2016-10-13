(
function(){
  	angular.module('MoviesApp')
	.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "edit.html",
	        controller: "MainController"
	    })	    
	    .when("/edit", {
	        templateUrl : "edit.html"
	    });
	});
})();
