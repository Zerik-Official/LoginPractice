import './style.css'
import { loginView } from './views/loginSection.js'
import { loginController } from './controllers/loginController.js';

const appContainer = document.getElementById("app");

let userLogin = false;


document.addEventListener("DOMContentLoaded", () => {
    if (!userLogin) {
        appContainer.innerHTML = loginView(appContainer)
        const formLogin = document.getElementById("form-login");

        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            loginController(formLogin);

        })
    };
});