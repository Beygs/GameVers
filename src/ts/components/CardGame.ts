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
}: GameDetails) => {
  return (`
  <article class="card-game">
  <a href="#pagedetail/${id}">
    <div class="card-game__header">
      <img src="${background_image}">
      <div class="details">
        <h4 class="released">${released}</h4>
        <h4 class="developers">${developers.map(dev => dev.name)}</h4>
        <h4 class="rating">${rating}/5 - ${ratings_count} votes</h4>
        <p class="tags">${genres.map(genre => genre.name).join(", ")}</p>
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