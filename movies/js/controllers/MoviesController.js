(
function(){
	angular.module('MoviesApp')
	.controller('MoviesListController', MoviesListController)
	.controller('MoviesEditController', MoviesEditController);;

	function MoviesListController(MoviesService){
		var vm = this;

		vm.movie = {};
		vm.orderProperty = 'title';		
		vm.orderDirection= 1;		
		vm.refreshMovies = refreshMovies;
		vm.addMovie = addNewMovie;
		vm.deleteMovie = (idx) => MoviesService.deleteMovie(idx);
		vm.sortBy = sortBy;
		vm.isActiveSort = (x, y) => vm.orderProperty == x && vm.orderDirection != y;
		vm.reset = resetForm;

		vm.refreshMovies();

		function addNewMovie(movie, form){
			if (form.$valid){
				MoviesService.addMovie(movie);
				vm.resetForm();
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

		function resetForm(form){
			vm.movie = {};
			form.$setPristine();
			form.$setUntouched();
		}		
	}

	function MoviesEditController(MoviesService, $routeParams, $location) {
		var vm = this;
		vm.id = $routeParams.id;

		vm.movie = MoviesService.getById(vm.id);
		vm.updateMovie = updateMovie;

		function updateMovie(movie, form){
			if (form.$valid){
				MoviesService.updateMovie(movie);
				vm.movie = {};

				$location.url('/');
			}			
		}
	}
}
)();