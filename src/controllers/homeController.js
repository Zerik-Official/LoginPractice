import { logoutController } from "./loginController.js";
import loginView from "../views/loginSection.js";
import { productController } from "./productController.js";

export function homeController(appContainer, userLogin, renderApp) {
    const closeSession = document.getElementById("logout-btn");
    const productContainer = document.getElementById("products-container");

    closeSession.addEventListener("click", ()=> {
        const result = logoutController(renderApp);

        console.log("resultado de intento de cierre de sesión:", result)

        if (result) {
            appContainer.innerHTML = loginView(appContainer)
        }
    })

    productController();

}