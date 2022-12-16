export class ButtonsMenu {
    #sectionsElement;
    #buttonsMenuElement;
    #buttonArray;
    #sectionArray;
    #active;
    #Cb1;
    constructor(params) {
        this.#sectionsElement = document.querySelectorAll(params.keyWord);
        this.#buttonsMenuElement = document.querySelectorAll(params.buttonsMenu);
        this.#active = params.active;
        this.#Cb1 = params.cb1;
        this.#buttonArray = Array.from(this.#buttonsMenuElement);
        this.#sectionArray = Array.from(this.#sectionsElement);
        this.foo();
    }
    foo() {
        this.#buttonsMenuElement.forEach(e => {
            e.onclick = () => {
                const index = this.#buttonArray.indexOf(e);
                this.showSection(index);
            }
        })
    }
    showSection(index) {
        this.#buttonsMenuElement.forEach(e => e.classList.remove(this.#active));
        this.#sectionsElement.forEach(e => e.hidden = true)
        this.#buttonArray[index].classList.add(this.#active);
        this.#sectionArray[index].hidden = false;
        if (index == 1) {
            this.#Cb1();
            // const books = library.getAllBooks();
            // listAllBooks.showBooks(books);
        }
}}
