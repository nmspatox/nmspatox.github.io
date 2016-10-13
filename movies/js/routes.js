(
function(){
  	angular.module('MoviesApp')
	.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "list.html",
	        controller: "MoviesListController"
	    })	    
	    .when("/edit", {
	        templateUrl : "edit.html",
	        controller: "MoviesEditController"

	    });
	});
})();
