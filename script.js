function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.info = function () {
        const bookInfo = [this.title, this.author, this.pageCount];
        return bookInfo;        
    };
};

function addBookToLibrary() {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pageCount = numberOfPages.value;
    if (title === "" || author === "" || pageCount === "") {
        alert("Please fill out required fields");
    } else {
        const newBook = new Book(title, author, pageCount);
        createBookCard(title, author, pageCount);
        myLibrary.push(newBook.info());
    };
};

function createBookCard(title, author, pageCount) {
    let card = document.createElement("div")
    card.className = "card";
    let titleText = document.createElement("div");
    titleText.innerHTML = "Title: " + title;
    titleText.className = "card-text";
    card.appendChild(titleText);
    let authorText = document.createElement("div");
    authorText.innerHTML = "Author: " + author;
    authorText.className = "card-text";
    card.appendChild(authorText);
    let pageCountText = document.createElement("div");
    pageCountText.innerHTML = "Number of Pages: " + pageCount;
    pageCountText.className = "card-text";
    card.appendChild(pageCountText);
    cardContainer.appendChild(card);
}

const myLibrary = [];

const addBtn = document.getElementById("add-btn")
const contentContainer = document.getElementById("content-body");
const sidebarContainer = document.getElementById("sidebar");
let form = document.querySelector("form");
let bookTitle = document.getElementById("book-title");
let bookAuthor = document.getElementById("book-author");
let numberOfPages = document.getElementById("page-count");
let submitBtn = document.getElementById("submit-btn");
let cardContainer = document.getElementById("book-cards");

addBtn.addEventListener("click", () => {
    addBtn.remove();
    contentContainer.style.gridTemplateColumns = "2fr 5fr";
    form.style.display = "flex";
    submitBtn.style.alignSelf = "flex-start";
    submitBtn.style.marginLeft = "2em";
});

submitBtn.addEventListener("click", ()=> {
    addBookToLibrary();
    form.style.display = "none";
    contentContainer.style.gridTemplateColumns = "1fr 5fr";
    sidebarContainer.appendChild(addBtn);
    form.addEventListener("submit", (event)=> {
        event.preventDefault();
    });
});