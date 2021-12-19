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
	read:true	
}
];

const addButton = document.getElementById('add-book-button')
addButton.addEventListener('click', ()=>{
	let x = document.querySelector('form')
	x.classList.toggle('show-hide')
})