angular.module('booksApp')
.service('BooksService',function($window){	
	var bookList = [];

	this.allBooks = function(){		
		bookList = angular.fromJson($window.localStorage.books || '[]');
		return bookList;
	};

	this.addBook = function(newBook){
		bookList.push(angular.copy(newBook));
		$window.localStorage.books = angular.toJson(bookList);			
	};

	this.deleteBook = function(idx){
		bookList.splice(idx, 1);
		$window.localStorage.books = angular.toJson(bookList);			
	};
});