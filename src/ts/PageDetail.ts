import { games } from "..";
import GameDetailsDisplay from "./components/GameDetailsPage";
import Game from "./Game";

const PageDetail = ({ pageArgument, pageContent }: PageArgs): void => {
  const preparePage = (): void => {
    const game = games.find(g => g.id === Number(pageArgument));

    if (!game) {
      fetch(`https://api.rawg.io/api/games/${pageArgument}?key=${process.env.RAWG_KEY}`)
        .then(response => response.json())
        .then((result) => displayResult(new Game(result).getTrailer().getScreenshots()))
      return;
    }

    displayResult(game);
  }

  const displayResult = (game: Game): void => {
    const container = document.querySelector(".page-details");
    console.log(game);

    if (container) container.innerHTML = `${GameDetailsDisplay(game)}`;
  }

  const render = ():void => {
    
    pageContent.innerHTML = `
    <section class="page-details">
      Hey, this is the Details Page of ${pageArgument}!
    </section>
    `
    
    preparePage();
  }

  render();
};

export default PageDetail;