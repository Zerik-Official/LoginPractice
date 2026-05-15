import './style.css'
import loginView from './views/loginSection.js'
import { loginController } from './controllers/loginController.js';
import homeView from './views/homeSection.js';
import { homeController } from './controllers/homeController.js';

const appContainer = document.getElementById("app");

function renderApp() {

    const userLogin = localStorage.getItem("auth");

    if (!userLogin) {

        appContainer.innerHTML = loginView();

        const formLogin = document.getElementById("form-login");

        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();

            loginController(
                formLogin,
                appContainer,
                renderApp
            );
        });

    } else {

        appContainer.innerHTML = homeView();

        homeController(
            appContainer,
            userLogin,
            renderApp
        );
    }
}

document.addEventListener("DOMContentLoaded", renderApp);