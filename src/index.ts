import "./scss/main.scss";
import routes from "./ts/routes";
import Search from "./assets/images/search.svg";

Search;

const setRoute = (): boolean => {
  const path = window.location.hash.substring(1).split('/');
  const pageArgument = path[1] || "";

  const pageContent = document.getElementById('app');

  if (pageContent) {
    routes[path[0]]({ pageArgument, pageContent });
    return true;
  }

  console.error("Oups, there was an issue!");
  return false;
};

window.addEventListener('hashchange', () => setRoute());
window.addEventListener('DOMContentLoaded', () => setRoute());
