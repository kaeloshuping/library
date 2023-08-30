function Book(title, author, pageCount, readCondition) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readCondition = readCondition;
    this.info = function () {
        return this.title + ", " + this.author + ", " + this.pageCount + ", " + this.readCondition;
    };
};

function addBookToLibrary() {
    const newBook = new Book(title, author, pageCount, readCondition);
    myLibrary += newBook;
};

const myLibrary = [];

const addBtn = document.getElementById("add-btn");
const contentContainer = document.getElementById("content-body");

addBtn.addEventListener("click", () => {
    console.log("add button clicked");
    addBtn.remove();
    contentContainer.style.gridTemplateColumns = "2fr 4fr 1fr";
});
