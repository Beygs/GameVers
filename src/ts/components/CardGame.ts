import { Game } from "../../interfaces"
import PlatformIcons from "./PlatformIcons";
import * as dayjs from "dayjs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const CardGame = ({
  background_image,
  id,
  name,
  platforms,
  released,
  rating,
  ratings_count,
  genres
}: Game) => (
  `
  <article class="card-game">
  <a href="#pagedetail/${id}">
    <div class="card-game__header">
      <img src="${background_image}">
      <div class="details">
        <h4 class="released">${dayjs(released, "YYYY-MM-DD").format("MMM DD, YYYY")}</h4>
        <h4 class="rating">${rating}/5 - ${ratings_count} votes</h4>
        <p class="tags">${genres.map(genre => genre.name).join(", ")}</p>
      </div>
    </div>
    <h3 class="card-game__title">${name}</h3>
    <div class="card-game__platforms">
      ${PlatformIcons(platforms)}
    </div>
  </a>
  </article>
  `
);

export default CardGame;