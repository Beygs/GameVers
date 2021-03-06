import CardGame from "./components/CardGame";
import PlatformSelect from "./components/PlatformSelect";
import * as dayjs from "dayjs";
import { games, previous_path } from "..";
import Game from "./Game";


const PageList = ({ pageArgument, pageContent, typeArgument }: PageArgs): void => {
  let pageNumber = 1;

  const fetchList = (url: string, argument: string | undefined = undefined) => {
    // Use With API request

    const finalURL = argument ? `${url}&search=${argument}` : url;

    console.log(finalURL);

    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => getGameDetails(data.results))
      .catch((error) => {
        console.error("Erreur ! 💥💥💥💥💥 =>", error);
        handleError();
      });
  }

  const getGameDetails = (data: any[]): void => {
    if (pageNumber === 1) games.splice(0, games.length);

    data.forEach(d => {
      fetch(`https://api.rawg.io/api/games/${d.id}?&key=${process.env.RAWG_KEY}`)
        .then(response => response.json())
        .then(result => games.push(new Game(result, d.short_screenshots.map((s: ShortScreenshot) => s.image))))
        .then(() => displayResults())
        .catch((error) => {
          console.error("Erreur ! 💥💥💥💥💥 =>", error);
          handleError();
        });
    })
  }

  const displayResults = (): void => {
    const gamesArr = [...games];
    const resultsContent = gamesArr.map((game) => CardGame(game));

    const resultsContainer = document.querySelector(".page-list .articles");
    
    if (resultsContainer) {
      resultsContainer.innerHTML = resultsContent.slice(0, 9 * pageNumber).join("\n");
      return;
    }

    handleError();
    return;
  }

  const preparePage = (): void => {
    if (typeArgument) {
      fetchList(
        `https://api.rawg.io/api/games?ordering=-added&page_size=27&${typeArgument}=${pageArgument}&key=${process.env.RAWG_KEY}`
      );
      return;
    }

    if (pageArgument === "") {
      fetchList(
        `https://api.rawg.io/api/games?dates=${dayjs().format("YYYY-MM-DD")},${dayjs().add(1, "year").format("YYYY-MM-DD")}&ordering=-added&page_size=27&key=${process.env.RAWG_KEY}`
      );
      return;
    }

    const cleanedArg = pageArgument.replace(/(\s|%20)+/g, "-");

    console.log(cleanedArg);
    
    fetchList(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&page_size=27`, cleanedArg);

    // Use Without API request

    // const data = require("../borderlands_api_results.json");
    // console.log(data);

    // displayResults(data.results);
  }
    
  const handleError = (): void => {
    pageContent.innerHTML = `
    <section class="page-list">
      <div class="articles">Oups ! Nous n'avons pas réussi à charger le contenu 😅 !</div>
    </section>
    `
  }

  const render = (): void => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="description">
          <h2>Welcome,</h2>
          <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This text seems familiar.</p>
          ${PlatformSelect()}
        </div>
        <div class="articles">...loading</div>
        <button class="show-more">Show More</button>
      </section>
    `;

    const showMoreBtn = document.querySelector(".show-more");
    
    showMoreBtn?.addEventListener("click", () => {
      if (pageNumber >= 2) showMoreBtn.remove();
      pageNumber++;
      return displayResults();
    });

    const platformSelect = document.querySelector("select");

    if (platformSelect) {
      platformSelect.addEventListener("click", () => {
        window.location.hash = platformSelect.value === "" ? "" : `pageList/parent_platforms=${platformSelect.value}`;
      });
    }

    if (previous_path === window.location.hash) {
      displayResults();
    } else {
      preparePage();
    }
  }

  render();
}

export default PageList;