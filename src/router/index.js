export default function Router(routes) {
  const app = document.getElementById("app");

  function handleRoute() {
    const path = window.location.pathname;
    const route = routes[path] || routes["/"];

    if (route?.protected && !localStorage.getItem("auth")) {
      navigate("/login");
      return;
    }

    app.innerHTML = "";
    route?.action({ navigate, app });
  }

  function navigate(path) {
    window.history.pushState({}, "", path);
    handleRoute();
  }

  window.addEventListener("popstate", handleRoute);

  return { handleRoute, navigate };
}
