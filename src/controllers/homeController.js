import { logoutController } from "./loginController.js";
import { productController } from "./productController.js";

export function homeController(navigate) {
    const closeSession = document.getElementById("logout-btn");

    closeSession.addEventListener("click", () => {
        logoutController(navigate);
    });

    productController();
}
