import './style.css'
import loginView from './views/loginSection.js'
import { loginController } from './controllers/loginController.js';
import homeView from './views/homeSection.js';
import { homeController } from './controllers/homeController.js';
import Router from './router/index.js';

const router = Router({
  "/login": {
    action({ navigate, app }) {
      app.innerHTML = loginView();
      const formLogin = document.getElementById("form-login");
      formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        loginController(formLogin, navigate);
      });
    }
  },
  "/productos": {
    protected: true,
    action({ navigate, app }) {
      app.innerHTML = homeView();
      homeController(navigate);
    }
  },
  "/": {
    action({ navigate }) {
      if (localStorage.getItem("auth")) {
        navigate("/productos");
      } else {
        navigate("/login");
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => router.handleRoute());
