const form = document.querySelector('.form')
const titleInput = document.querySelector('#book-title')
const authorInput = document.querySelector('#book-author')
const pagesInput = document.querySelector('#book-pages')
const submitButton = document.querySelector('#submit')
const readCheckbox = document.querySelector('#read')
const bookContainer = document.querySelector('.book-container')
const cancelButton = document.querySelector('#cancel')
const readButton = document.querySelectorAll('.read-button')
const addButton = document.getElementById('add-book-button')

let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
	}
}

function saveOnLocalStorage() {
	localStorage.setItem('library', JSON.stringify(myLibrary))
}

const retrieveFromLocalStorage = () => {
	myLibrary = JSON.parse(localStorage.getItem('library'))
}



const addBookToLibrary = () => {
let title = titleInput.value
let author = authorInput.value
let pages = pagesInput.value
let read = getReadStatus()
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}

const getReadStatus = () => {
	return readCheckbox.checked ? 'Read': 'Not Read Yet'
}

const toggleReadStatus = (e) => {
	e.preventDefault()
	e.target.textContent === 'Read' ? e.target.textContent = `Not Read Yet` 
	: e.target.textContent = `Read`
}

const handleDelete = (e) => {
	e.preventDefault()
	const bookElement = e.target.parentElement
	const bookTitle = bookElement.firstChild.textContent
	myLibrary.some(book => {
		if(book.title === bookTitle){
			let x = myLibrary.indexOf(book)
			myLibrary.splice(x, 1)
		}
	})
	updateLibrary()
}


const updateLibrary = () => {
bookContainer.innerHTML = ''
myLibrary.forEach(book => {
	const bookCard = document.createElement('div')
	bookCard.classList.add('book-card')

	const bookTitle = document.createElement('h3')
	bookTitle.textContent = `${book.title}`
	bookCard.appendChild(bookTitle)

	const bookAuthor = document.createElement('h3')
	bookAuthor.textContent = `${book.author}`
	bookCard.appendChild(bookAuthor)

	const bookPages = document.createElement('h3')
	bookPages.textContent = `${book.pages}`
	bookCard.append(bookPages)

	const readButton = document.createElement('button')
	readButton.textContent = `${book.read}`
	readButton.classList.add('read-button')
	bookCard.appendChild(readButton)
	readButton.addEventListener('click', toggleReadStatus)

	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'Delete'
	deleteButton.classList.add('delete-button')
	bookCard.appendChild(deleteButton)
	deleteButton.addEventListener('click', handleDelete)

	bookContainer.appendChild(bookCard)
})
	saveOnLocalStorage()
}

const clearForm = () => {
	titleInput.value = ''
	authorInput.value = ''
	pagesInput.value = ''
}

const handleVisibility  = () => {
	let x = document.querySelector('form')
	x.classList.toggle('show-hide')
}



document.addEventListener('DOMContentLoaded', () => {
addButton.addEventListener('click', handleVisibility)

submitButton.addEventListener('click', (e) => {
	
	addBookToLibrary()
	updateLibrary()
	clearForm()
	handleVisibility()
})

cancelButton.addEventListener('click', (e) => {
	handleVisibility()
	clearForm()
})


if(!localStorage.getItem('library')){
	saveOnLocalStorage()
}else{
	retrieveFromLocalStorage()
}

updateLibrary()
})