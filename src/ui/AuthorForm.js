import { showErrorMessage } from "./errorMessage.js";
export class AuthorForm {
    #formElement;
    #authorElement;
    #cb;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorElement = document.getElementById(params.idAuthorInput);
        this.#cb = params.cb;
        this.addSubmitHandler();
    }
    addSubmitHandler() {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author = this.#authorElement.value;
            this.#cb(author);
        })
    }
}