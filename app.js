let newBtn = document.querySelector('#newBtn')
let close = document.querySelector('.close')
let form = document.querySelector('#form')
let popUp = document.getElementById('popUp')
let addBtn = document.getElementById("addBtn")

newBtn.addEventListener("click", ()=>{
    popUp.style.display = 'block'
});


close.addEventListener('click', ()=>{
    popUp.style.display = 'none'
})

const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
};
function render(){
    let libraryEl = document.querySelector("#library")
    libraryEl.innerHTML = ''
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class","book-card")
        bookEl.innerHTML = `
        
        <div class="card-header">
            <p class="title">${book.title}</p>
            <p class="author">${book.author}</p>
        </div>
        <div class="card-body">
            <p class="whopages">${book.pages} pages</p>
            <p class="read-status">${book.read ? "read" : "not read yet"}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove </button>
        </div>
    `;
    libraryEl.appendChild(bookEl)
    }
};




form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    addBookToLibrary()
});


function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read  = document.getElementById('read').checked
    let newBook = new Book(title,author,pages,read) 
    myLibrary.push(newBook)
    render();
}




function removeBook(index){
    myLibrary.splice(index, 1)
    render()
}