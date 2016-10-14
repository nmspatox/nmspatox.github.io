(
function(){
	angular.module('MoviesApp')
	.controller('MoviesListController', MoviesListController)
	.controller('MoviesEditController', MoviesEditController);

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
		vm.resetForm = resetForm;

		vm.refreshMovies();

		function addNewMovie(movie, form){
			if (form.$valid){
				MoviesService.addMovie(movie);
				vm.resetForm(form);
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

	function MoviesEditController($routeParams, $location, MoviesService, MoviesOMDBService) {
		var vm = this;
		vm.id = $routeParams.id;
		vm.loadingStatus = false;

		vm.movie = MoviesService.getById(vm.id);
		vm.movies = [];
		vm.updateMovie = updateMovie;
		vm.searchInOMDB = searchInOMDB;
		vm.getDetails = getDetails;

		function updateMovie(movie, form){
			if (form.$valid){
				MoviesService.updateMovie(movie);
				vm.movie = {};

				$location.url('/movies/');
			}			
		}

		function searchInOMDB(){			
			if (vm.movie.title){
				vm.loadingStatus = true;
				MoviesOMDBService.searchByTitle(vm.movie.title)
					.success(function(data) {			            
			            vm.movies = data.Search;
			            vm.loadingStatus = false;
			        })
			        .error(function(data) {
			            console.log('Error: ' + data);
			            vm.loadingStatus = false;
		        });	
			}
		}	

		function getDetails(movieFromList) {
			vm.movie.year = parseInt(movieFromList.Year);
			vm.movie.poster = movieFromList.Poster;
			vm.movie.imdbId = movieFromList.imdbID;
		}	
	}
}
)();