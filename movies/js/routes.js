(
function(){
  	angular.module('MoviesApp')
	.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "list.html",
	        controller: "MoviesListController",
	        controllerAs: "moviesCtrl"
	    })	    
	    .when("/edit", {
	        templateUrl : "edit.html",
	        controller: "MoviesEditController",
	        controllerAs: "moviesCtrl"
	    });
	});
})();
