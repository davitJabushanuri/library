const form = document.querySelector('.form')
const titleInput = document.querySelector('#book-title')
const authorInput = document.querySelector('#book-author')
const pagesInput = document.querySelector('#book-pages')
const submitButton = document.querySelector('#submit')
const readCheckbox = document.querySelector('#read')
const bookContainer = document.querySelector('.book-container')

const myLibrary = [
	{title: 'Hobbit',
	author: 'Tolkien',
	pages: 200,
	read: true	
	},
	{title: 'Harry Potter',
	author: 'Rawlings',
	pages: 300,
	read: false	
	}
];

function Book (title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

const addBookToLibrary = () => {
let title = titleInput.value
let author = authorInput.value
let pages = pagesInput.value
let read = readCheckbox.value
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}


const updateLibrary = () => {
bookContainer.innerHTML = ''
myLibrary.forEach(book => {
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
	
	
	bookContainer.appendChild(books)

})
}

const clearForm = () => {
	title.input.value = ''
	authorInput.value = ''
	pagesInput.value = ''
}


const addButton = document.getElementById('add-book-button')
addButton.addEventListener('click', ()=>{
	let x = document.querySelector('form')
	x.classList.toggle('show-hide')
})

submitButton.addEventListener('click', (e) => {
	e.preventDefault()
	addBookToLibrary()
	updateLibrary()
	clearForm()
	console.log(myLibrary);
})