export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksbyAuthor(author) {
        return this.books.filter(b => b.author==author);
    }
    getBooksbyPagesRange(pageFrom, pageTo) {
        return this.books.filter(b => b.pages >= pageFrom && b.pages < pageTo);
    }
}