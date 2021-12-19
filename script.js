// function book(title, author, pages, read) {
// 	this.title = title;
// 	this.author = author;
// 	this.pages = pages;
// 	this.read = read;
// 	this.info = function () {
// 		return `${title}, ${author}, ${pages}, ${read}`;
// 	};
// }

// const harryPotter = new book(`Harry Potter`, `J.K. Rowling`, 400, true);

// console.log(harryPotter.info());


const booksArray = [
	{title: 'Hobbit',
	author: 'JK WOELH',
	pages: 200,
	read: true	
	},
	{title: 'Hobfdfbit',
	author: 'JK WOELdsafdfH',
	pages: 300,
	read: false	
	}
];

booksArray.forEach(book =>{
	let books = document.createElement('div')
	books.innerHTML = `
	<ul>
		<li>${book.title}</li>
		<li>${book.author}</li>
		<li>${book.pages}</li>
		<li>${book.read}</li>
	</ul>
	<button>Read</button>
	<button>Delete</button>`
	books.classList.add('book-style')
	
	
	document.querySelector('.book-container').appendChild(books)

})


const addButton = document.getElementById('add-book-button')
addButton.addEventListener('click', ()=>{
	let x = document.querySelector('form')
	x.classList.toggle('show-hide')
})