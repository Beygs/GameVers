import "./scss/main.scss";
import routes from "./ts/routes";
import Search from "./assets/images/search.svg";

Search;

export let games: GameDetails[] = [];
export let previous_path: string;

const setRoute = (): boolean => {
  const pageContent = document.getElementById('app');

  if (pageContent) {

    const path = window.location.hash.substring(1).split('/');
    const pageArgument = path[1] || "";

    routes[path[0]]({ pageArgument, pageContent });
    return true;
  }

  console.error("Oups, there was an issue!");
  return false;
};

const setPreviousPath = (): string => {
  const path = window.location.hash.substring(1).split('/');
  console.log(path)
  if (path[0] === "" || path[0] === "pageList") return window.location.hash;
  return previous_path;
}

window.addEventListener('hashchange', () => {
  setRoute();
  previous_path = setPreviousPath();
});
window.addEventListener('DOMContentLoaded', () => {
  setRoute();
  previous_path = setPreviousPath();
});
