import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { PagesForm } from "./ui/PagesForm.js";
import { AuthorForm } from "./ui/AuthorForm.js";
import { BooksList } from "./ui/BooksList.js";
import { ButtonsMenu } from "./ui/ButtonsMenu.js";

const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const minDateString = '1980-01-01';
const ACTIVE = "active"

const listAllBooks = new BooksList("books-all");
const listBooksByPages = new BooksList("books-pages");
const listBookByAuthor = new BooksList("books-author");
//======================================================

const library = new Library();

const paramsBookForm = {
    idForm: "book_form", idPagesInput: "pages_input",
    idDateInput: "date_input", idPagesError: "pages_error", idDateError: "date_error",
    minPages: MIN_PAGES, maxPages: MAX_PAGES, minDate: new Date(minDateString),
    cb: book => library.addBook(book)
};
const bookForm = new BookForm(paramsBookForm);
//=====================================================================
//functions of Pages Form

const paramsPagesForm = {
    idForm: "pages-form", idPageFromInput: "pageFrom",
    idPageToInput: "pageTo", idErrorMessage: "pages_form_error",
    cb: (pagesObj) => {
        const books = library.getBooksbyPagesRange(pagesObj.pageFrom, pagesObj.pageTo);
        listBooksByPages.showBooks(books);
    }
};
const pagesForm = new PagesForm(paramsPagesForm);

//=====================================================================================
const paramsButtonMenu = {
    keyWord: "section", buttonsMenu: ".buttons-menu *", active: ACTIVE,
    cb1: () => {
        const books = library.getAllBooks();
        listAllBooks.showBooks(books);
    }
}
const buttonsMenu = new ButtonsMenu(paramsButtonMenu);
//=================================================
// Functions of the Author form 
const paramsAuthorForm = {
    idForm: "author-form", idAuthorInput: "author",
    cb: author => {
        const books = library.getBooksbyAuthor(author);
        listBookByAuthor.showBooks(books);
    }
}
const authorForm = new AuthorForm(paramsAuthorForm);
