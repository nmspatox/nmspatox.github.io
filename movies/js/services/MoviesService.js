(
function(){
	angular.module('MoviesApp').factory('MoviesService', MoviesService);

	var movies = [];

	function MoviesService($window){
		return {
			getAll : function(orderBy, direction){ 
				movies = angular.fromJson($window.localStorage.movies || '[]');				

				if (orderBy && direction) 
					movies.sort((a, b) => direction==1? a[orderBy].localeCompare(b[orderBy]) 
						: b[orderBy].localeCompare(a[orderBy]));				

				return movies;
			},

			getById : function(id){ 
				movies = angular.fromJson($window.localStorage.movies || '[]');				
				return movies.find(x=> x.id == id);
			},


			addMovie : function(movie){
				movie.id = movies.length + 1;
				movies.push(movie);
				$window.localStorage.movies = angular.toJson(movies);
			},

			updateMovie : function(movie){				
				var idx = movies.findIndex(x=> x.id == movie.id);
				movies[idx] = movie;
				$window.localStorage.movies = angular.toJson(movies);
			},

			deleteMovie : function(idx){
				movies.splice(idx, 1);
				$window.localStorage.movies = angular.toJson(movies);
			}
		};
	}
}
)();