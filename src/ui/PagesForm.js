import { showErrorMessage } from "./errorMessage.js";
export class PagesForm {
    #formElement;
    #pageFromInputElement;
    #pageToInputElement;
    #errorMessageElement;
    #processCb;
    #pageFrom;
    #pageTo;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#pageFromInputElement = document.getElementById(params.idPageFromInput);
        this.#pageToInputElement = document.getElementById(params.idPageToInput);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.#processCb = params.cb;
        this.addSubmitHandler();
        this.onChangePageFrom();
        this.onChangePageTo();
    }
    addSubmitHandler() {
            this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const pagesObj = {pageFrom: this.#pageFrom, pageTo: this.#pageTo};
            this.#processCb(pagesObj);
        })
    }
    onChangePageFrom() {
        this.#pageFromInputElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pageTo && value >= this.#pageTo) {
                showErrorMessage(event.target, "Page 'from' must be less than Page 'to'",
                this.#errorMessageElement);
            } else {
                this.#pageFrom = value;
            }
        })
        
    }
    onChangePageTo() {
        this.#pageToInputElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pageFrom && value < this.#pageFrom) {
                showErrorMessage(event.target, "Page 'To' must be greater than Page 'From'",
                this.#errorMessageElement);
            }
                this.#pageTo = value;
            })
        
    }

}