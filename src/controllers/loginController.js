import { hashPassword } from "../utils/commons.js";
const userNameSaved = "Melissa";
const userPasswordSaved = "7db5026dd502a59031b7a57d1f9956b03d11b35d9f90d1af825fa8da9f491960";

export async function loginController(loginForm) {
    const errorBadged = document.getElementById("error-message");
    const successBadged = document.getElementById("success-message");

    const inputUsername = loginForm[0].value;
    const inputPassword = await hashPassword(String(loginForm[1].value));

    let currentBadged;

    if (inputUsername !== userNameSaved || inputPassword !== userPasswordSaved) {
        errorBadged.classList.remove("hidden");
        currentBadged = errorBadged;
        console.error("Usuario o contraseña no coinciden");
    } else {
        successBadged.classList.remove("hidden");
        currentBadged = successBadged;
        console.log("Redirigiendo...");
        localStorage.setItem("auth", "true")
    };

    setTimeout(()=> {
        currentBadged.classList.add("hidden");
        loginForm.reset();
    }, 2000);
};