(
function(){
  	angular.module('MoviesApp')
	.config(function($routeProvider, $locationProvider) {
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

	    // use the HTML5 History API
        $locationProvider.html5Mode(true);
	});
})();
