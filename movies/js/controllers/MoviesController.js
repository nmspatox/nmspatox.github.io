(
function(){
	angular.module('MoviesApp')
	.controller('MoviesListController', MoviesListController)
	.controller('MoviesEditController', MoviesEditController);;

	function MoviesListController(MoviesService){
		var vm = this;
		console.log("init MoviesListController");
		vm.movie = {};
		vm.orderProperty = 'title';		
		vm.orderDirection= 1;		
		vm.refreshMovies = refreshMovies;
		vm.addMovie = addNewMovie;
		vm.deleteMovie = (idx) => MoviesService.deleteMovie(idx);
		vm.sortBy = sortBy;
		vm.isActiveSort = (x, y) => vm.orderProperty == x && vm.orderDirection != y;

		vm.refreshMovies();

		function addNewMovie(movie, form){
			if (form.$valid){
				MoviesService.addMovie(movie);
				vm.movie = {};
				form.$setPristine();
				form.$setUntouched();
			}			
		}

		function sortBy(field){
			if (vm.orderProperty == field) vm.orderDirection = vm.orderDirection == 1? -1 : 1;
			vm.orderProperty = field;
			vm.refreshMovies();
		}

		function refreshMovies(){
			vm.movies = MoviesService.getAll(vm.orderProperty, vm.orderDirection);
		}			
	}

	function MoviesEditController(MoviesService, $routeParams) {
		var vm = this;
		console.log("init MoviesEditController");
		console.log($routeParams);
		vm.id = $routeParams.id;
	}
}
)();