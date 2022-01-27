import Game from "../Game";
import PlatformIcons from "./PlatformIcons";

const CardGame = ({
  background_image,
  id,
  name,
  parent_platforms,
  released,
  rating,
  ratings_count,
  genres,
  developers
}: Game) => {
  const formattedDevs = developers.map(dev => `<span class="dev">${dev.name}</span>`);
  const formattedGenres = genres.map(genre => `<span class="genre">${genre.name}</span>`).join(", ");

  return (`
  <article class="card-game">
  <a href="#pageDetail/${id}">
    <div class="card-game__header">
      <img src="${background_image}">
      <div class="details">
        <h4 class="released">${released}</h4>
        <h4 class="developers">${formattedDevs}</h4>
        <h4 class="rating">${rating}/5 - ${ratings_count} votes</h4>
        <p class="genres">${formattedGenres}</p>
      </div>
    </div>
    <h3 class="card-game__title">${name}</h3>
    <div class="card-game__platforms">
      ${PlatformIcons(parent_platforms)}
    </div>
  </a>
  </article>
  `
)}

export default CardGame;