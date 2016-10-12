angular.module('booksApp')
.service('BooksService',function(){
	var bookList = [
		{
			title: 'The design of every day things', 
			author: 'Don Norman'
		},{
			title: 'El nombre del viento', 
			author: 'Patrik Rufus'
		},{
			title: 'Cancion de Hielo y Fuego', 
			author: 'R.R. Martin'
		},{
			title: 'Las venas abiertas de america Latina', 
			author: 'Galeano'
		},{
			title: 'A sangre fria', 
			author: 'Truman Capote'
		},{
			title: '100 aÃ±os de soledad', 
			author: 'GarcÃ­a marquez'
		},{
			title: 'Kryptonita', 
			author: 'Oyola'
		},{
			title: 'Historia de un loco', 
			author: 'Katzenbach'
		},{
			title: 'DonÂ´t make me think', 
			author: 'Steve Krug'
		},{
			title: 'Management 3.0', 
			author: 'Jurgen'
		}
	];

	this.allBooks = function(){
		return bookList;
	}

	this.addBook = function(newBook){
		bookList.push(angular.copy(newBook));
	}
});