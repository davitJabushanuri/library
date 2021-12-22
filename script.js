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

const saveOnLocalStorage = () => {
	localStorage.setItem('library', JSON.stringify(myLibrary))
}

const retrieveFromLocalStorage = () => {
	myLibrary = JSON.parse(localStorage.getItem('library'))
}

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
let read = getReadStatus()
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}

const getReadStatus = () =>{
	return readCheckbox.checked ? 'read': 'Not read yet'
}

const handleDelete = () => {
	let deleteButton = document.createElement('button')
	deleteButton.textContent = 'Delete'
	deleteButton.classList.add('delete-button')
	deleteButton.addEventListener('click', (e) =>{
		console.log(e.target);
	})
	return deleteButton
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
	</ul>
	<button class='read-button'>${book.read}</button>`
	books.classList.add('book-style')
	
	books.appendChild(handleDelete())
	bookContainer.appendChild(books)
	handleDelete()
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