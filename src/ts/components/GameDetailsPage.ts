import { games } from "../..";
import Game from "../Game";
import ActionableDetail from "./ActionableDetail";
import CardGame from "./CardGame";

const GameDetailsDisplay = ({
  id,
  name,
  description,
  released,
  background_image,
  website,
  rating,
  ratings_count,
  parent_platforms,
  stores,
  developers,
  genres,
  tags,
  publishers,
  trailer,
  screenshots
}: Game): string => {
  const formattedStores = stores
    .map(store => store.store)
    .map(store => `<a class="store" href="${store.domain.match(/^http/) ? store.domain : "http://" + store.domain}">${store.name}</a>`)
    .join("\n");

  let formattedScreenshots = "";

  if (screenshots) formattedScreenshots = screenshots.map(screenshot => `<img src="${screenshot}" alt="Screenshot">`).join("\n");
  
  let formattedTrailer = "";

  if (trailer) formattedTrailer = `<h1>Trailer</h1><video src="${trailer}" type="video/mp4">`;

  const gamesArr = [...games];
  const resultsContent = gamesArr.filter(game => game.id !== id).map((game) => CardGame(game)).slice(0, 9).join("\n");

  return `
  <div class="header">
    <img src="${background_image}" alt="illustration">
    <a class="website" href="${website}" target="_blank">Check Website</a>
  </div>
  <div class="content">
    <div class="content__header">
      <h3 class="title">${name}</h3>
      <h4 class="rating">${rating}/5 - ${ratings_count}&nbsp;votes</h4>
    </div>
    <div class="description">
      ${description}
    </div>
    <div class="details details-first">
      <div class="detail">
        <p class="detail__name">Release Date</p>
        <p class="detail__values">${released}</p>
      </div>
      ${ActionableDetail("Developer(s)", developers, "developers")}
      ${ActionableDetail("Platforms", parent_platforms.map(item => item.platform), "platforms")}
      ${ActionableDetail("Publisher(s)", publishers, "publishers")}
    </div>
    <div class="details details-last">
      ${ActionableDetail("Genre(s)", genres, "genres")}
      ${ActionableDetail("Tags", tags.filter(tag => tag.language === "eng"), "tags")}
    </div>
    <h1>Buy</h1>
    ${formattedStores}
    ${formattedTrailer}
    <h1>Screenshots</h1>
    <div class="screenshots articles">
      ${formattedScreenshots}
    </div>
    <h1>Similar Games</h1>
    <div class="articles">
      ${resultsContent}
    </div>
  </div>
  `
}

export default GameDetailsDisplay;