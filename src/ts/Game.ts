import * as dayjs from "dayjs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";

export default class Game {
  id!: number;
  slug!: string;
  name!: string;
  description!: string;
  released!: string;
  background_image!: string;
  website!: string;
  rating!: number;
  ratings_count!: number;
  parent_platforms!: Platform[];
  stores!: Store[];
  developers!: BasicObject[];
  genres!: BasicObject[];
  tags!: Tag[];
  publishers!: BasicObject[];
  movies_count!: number;
  trailer!: string;
  screenshots?: string[];

  constructor(gameDetails: GameDetails, screenshots?: string[] ) {
    Object.assign(this, gameDetails);
    this.screenshots = screenshots;
    this.formatReleased();
  }

  getTrailer(): this {
    if (this.movies_count === 0) return this;

    const url = `https://api.rawg.io/api/games/${this.id}/movies?key=${process.env.RAWG_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.trailer = result?.results[0]?.data["480"])
      .catch((error) => console.error("Erreur ! 💥💥💥💥💥 =>", error));

    return this;
  }

  getScreenshots(): this {
    const url = `https://api.rawg.io/api/games/${this.id}/screenshots?key=${process.env.RAWG_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.screenshots = result.results.map((r: ShortScreenshot) => r.image))
      .then(screenshots => {
        const container = document.querySelector(".screenshots");

        if (container) container.innerHTML = screenshots.map((screenshot: string) => `<img src="${screenshot}" alt="Screenshot">`).join("\n");
      })
      .catch((error) => console.error("Erreur ! 💥💥💥💥💥 =>", error));

    return this;
  }

  formatReleased(): this {
    dayjs.extend(customParseFormat);

    const releaseDate = dayjs(this.released, "YYYY-MM-DD").format("MMM DD, YYYY");

    if (releaseDate === "Invalid Date") {
      this.released = "Release Date Not Revealed";
      return this;
    }

    this.released = releaseDate;
    return this;
  }
}