angular.module('booksApp')
.controller('BooksCtrl', BooksCtrl);

function BooksCtrl($scope, $window, BooksService) {

	this.allBooks = BooksService.allBooks();	

	this.addBook = function(newBook){					
		BooksService.addBook(angular.copy(newBook));
		
		newBook.title = '';
		newBook.author = '';		
		$scope.newBookForm.$setPristine();
	};

	this.deleteBook = function(idx){
		BooksService.deleteBook(idx);
	};
}