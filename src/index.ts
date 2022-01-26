import "./scss/main.scss";
import routes from "./ts/routes";
import Search from "./assets/images/search.svg";

Search;

export let games: GameDetails[] = [];

const setRoute = (/*{ gameSearch, pageNumber }: { gameSearch?: string; pageNumber?: number }*/): boolean => {
  console.log(games);
  const pageContent = document.getElementById('app');

  if (pageContent) {
    // if (gameSearch) {
    //   routes["pageList"]({ pageArgument: gameSearch, pageContent });
    //   return true;
    // }

    const path = window.location.hash.substring(1).split('/');
    const pageArgument = path[1] || "";

    routes[path[0]]({ pageArgument, pageContent });
    return true;
  }

  console.error("Oups, there was an issue!");
  return false;
};

window.addEventListener('hashchange', () => {
  setRoute();
});
window.addEventListener('DOMContentLoaded', () => {
  setRoute();
});
