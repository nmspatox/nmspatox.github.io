(
function(){
  	angular.module('MoviesApp')
	.config(function($routeProvider, $locationProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "partials/list.html",
	        controller: "MoviesListController",
	        controllerAs: "vm"
	    })		       
	    .when("/edit/:id", {
	        templateUrl : "partials/edit.html",
	        controller: "MoviesEditController",
	        controllerAs: "vm"
	    })
	    .otherwise({
            redirectTo:'/'
        });

	    // use the HTML5 History API
        $locationProvider.html5Mode(true);
	});
})();
