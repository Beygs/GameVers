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
  </div>
  `
}

export default GameDetailsDisplay;