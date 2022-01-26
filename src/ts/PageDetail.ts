import { games } from "..";
import GameDetailsDisplay from "./components/GameDetailsPage";
import Game from "./Game";

const PageDetail = ({ pageArgument, pageContent }: PageArgs): void => {
  const preparePage = (): void => {
    const game = games.find(g => g.id === Number(pageArgument));

    if (!game) {
      fetch(`https://api.rawg.io/api/games/${pageArgument}?key=${process.env.RAWG_KEY}`)
        .then(response => response.json())
        .then(result => displayResult(new Game(result).getTrailer()))
      return;
    }

    displayResult(game);

    // const cleanedArg = pageArgument.replace(/\s+/g, "-");
    
    // fetchList(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&page_size=27`, cleanedArg);

    // Use Without API request

    // const data = require("../borderlands_api_results.json");
    // console.log(data);

    // displayResults(data.results);
  }

  const displayResult = (game: GameDetails): void => {
    const articles = document.querySelector(".page-details .articles");
    console.log(game);

    if (articles) articles.innerHTML = `${GameDetailsDisplay(game)}`;
  }

  const render = ():void => {
    
    pageContent.innerHTML = `
    <section class="page-details">
      <div class="articles">Hey, this is the Details Page of ${pageArgument}!</div>
    </section>
    `
    
    preparePage();
  }

  render();
};

export default PageDetail;