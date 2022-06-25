import { Home } from "./static/js/home.js";

const createContent = () => {
  const appContent = document.querySelector("#main");

  const routes = {
    "/": "finplan-home",
    "/paths": "finplan-paths",
  };

  function findComponentName(pathname) {
    return routes[pathname];
  }

  function updatePageComponent(location) {
    const next = findComponentName(location.pathname);
    const current = appContent.firstChild;
    if (current.nodeName.toLowerCase() !== next) {
      const newComponent = document.createElement(next);
      appContent.replaceChild(newComponent, current);
    }
  }

  const appHistory = window.History.createBrowserHistory();
  appHistory.listen(updatePageComponent);
  updatePageComponent(window.location);

  document.addEventListener("click", (e) => {
    if (e.target.nodeName === "A") {
      const href = e.target.getAttribute("href");
      appHistory.push(href);
      e.preventDefault();
    }
  });

  //   const appNavBar = document.getElementById("topbar");

  //   const items = { items: ["home", "Tutorial", "Library"] };
  //   appNavBar.innerHTML = `
  //     <div>
  //     <design-navbar items=${JSON.stringify(items)}></design-navbar>

  //     </div>
  //   `;
};

createContent();
