const userNameSaved = "Melissa";
const userPasswordSaved = "Melissa123456";

export function loginController(loginForm) {
    const errorBadged = document.getElementById("error-message");
    const successBadged = document.getElementById("success-message");

    let currentBadged;

    if (loginForm[0] !== userNameSaved || loginForm[1] !== userPasswordSaved) {
        errorBadged.classList.remove("hidden");
        currentBadged = errorBadged;
        console.error("Usuario o contraseña no coinciden");
    } else {
        successBadged.classList.remove("hidden");
        currentBadged = successBadged;
        console.log("Redirigiendo...");
    };

    setTimeout(()=> {
        currentBadged.classList.add("hidden");
        loginForm.reset();
    }, 2000);
};