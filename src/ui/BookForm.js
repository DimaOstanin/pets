import { showErrorMessage } from "./errorMessage.js";
export class BookForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #pageInputElement;
    #dateErrorElement;
    #pageErrorElement;
    #processCb;
    #minPages;
    #maxPages;
    #minDate;
    #maxDate;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#pageInputElement = document.getElementById(params.idPagesInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pageErrorElement = document.getElementById(params.idPagesError);
        this.#processCb = params.cb;
        this.#minPages = params.minPages;
        this.#maxPages = params.maxPages;
        this.#minDate = params.minDate;
        this.#maxDate = this.getMaxDate();
        this.addSubmitHandler();
        this.onChange();
    }
    addSubmitHandler() {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const book = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(book);
            this.#processCb(book);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validatePublishingDate(event.target);
        })
        this.#pageInputElement.addEventListener("change", (event) => {
            this.validatePages(event.target);
        })
       
    }
    validatePages(element) {
        const value = +element.value;
        if (value < this.#minPages || value > this.#maxPages) {
            const message = value < this.#minPages ? `number of pages must be ${this.#minPages} or greater`
                : `number of pages must be ${this.#maxPages} or less`;
            showErrorMessage(element, message, this.#pageErrorElement);
        }
    }
    validatePublishingDate(element) {
        const selectedDate = new Date(element.value);
        if(selectedDate < this.#minDate || selectedDate > this.#maxDate) {
            const message = selectedDate < this.#minDate ? `date must be ${this.#minDate} or greater`:
               `date must be ${this.#maxDate} or less`;
            showErrorMessage(element, message, this.#dateErrorElement) ;    
        }
    }
        
    getMaxDate() {
        return new Date();
    }
}
