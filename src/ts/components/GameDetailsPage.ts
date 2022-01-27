import { games } from "../..";
import ActionableDetail from "./ActionableDetail";
import CardGame from "./CardGame";

const GameDetailsDisplay = ({
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
}: GameDetails): string => {
  const formattedStores = stores
    .map(store => store.store)
    .map(store => `<a href="${store.domain}">${store.name}</a>`)
    .join("\n");

  let formattedScreenshots = "";

  if (screenshots) formattedScreenshots = screenshots.map(screenshot => `<img src="${screenshot}" alt="Screenshot">`).join("\n");

  console.log(formattedScreenshots)
  
  let formattedTrailer = "";

  if (trailer) formattedTrailer = `<h1>Trailer</h1><video src="${trailer}" type="video/mp4">`;

  const gamesArr = [...games];
  const resultsContent = gamesArr.map((game) => CardGame(game)).slice(0, 9).join("\n");

  return `
  <div class="header">
    <img src="${background_image}" alt="illustration">
    <a class="website" href="${website}">Check Website</a>
  </div>
  <div class="content">
    <div class="content__header">
      <h3 class="title">${name}</h3>
      <h4 class="rating">${rating}/5 - ${ratings_count} votes</h4>
    </div>
    ${description}
    <div class="details">
      <div class="detail">
        <p class="detail__name">Release Date</p>
        <p class="detail__values">${released}</p>
      </div>
      ${ActionableDetail("Developer(s)", developers)}
      ${ActionableDetail("Platforms", parent_platforms.map(item => item.platform))}
      ${ActionableDetail("Publisher(s)", publishers)}
      ${ActionableDetail("Genre(s)", genres)}
      ${ActionableDetail("Tags", tags.filter(tag => tag.language === "eng"))}
    </div>
    <h1>Buy</h1>
    ${formattedStores}
    ${formattedTrailer}
    <h1>Screenshots</h1>
    ${formattedScreenshots}
    <h1>Similar Games</h1>
    ${resultsContent}
  </div>
  `
}

export default GameDetailsDisplay;