import { Game, PageArgs } from "../interfaces";
import PlatformSelect from "./components/PlatformSelect";

const PageList = ({ pageArgument, pageContent }: PageArgs): void => {
  const preparePage = (): void => {
    const cleanedArg = pageArgument.replace(/\s+/g, "-");

    const displayResults = (articles: Game[]): void => {
      console.log(articles);

      const resultsContent = articles.map(({
        background_image,
        id,
        name,
        platforms
      }: Game) => (
        `
        <article class="cardGame">
          <a href="#pagedetail/${id}">
            <img src="${background_image}">
            <h3>${name}</h3>
          </a>
        </article>
        `
      ));

      console.log(resultsContent);

      const resultsContainer = document.querySelector(".page-list .articles");
      
      if (resultsContainer) {
        resultsContainer.innerHTML = resultsContent.join("\n");
        return;
      }

      handleError();
      return;
    }
    
    const fetchList = (url: string, argument: string) => {
      // Use With API request

      // const finalURL = argument ? `${url}&search=${argument}` : url;

      // fetch(finalURL)
      // .then((response) => response.json())
      // .then((data) => displayResults(data.results))
      // .catch((error) => {
      //   console.error("Erreur ! 💥💥💥💥💥 =>", error);
      //   handleError();
      // })

    }
    
    // fetchList(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}`, cleanedArg);

    // Use Without API request

    const data = require("../borderlands_api_results.json");
    console.log(data);

    displayResults(data.results);
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
      </section>
    `;

    preparePage();
  }

  render();
}

export default PageList;