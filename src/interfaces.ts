interface Routes {
  [key: string]: (arg: {
    pageArgument: string;
    pageContent: HTMLElement;
  }) => void;
}

interface PageArgs {
  pageArgument: string;
  pageContent: HTMLElement;
}

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
  }[];
  ratings_count: number;
  stores: {
    store: {
      id: number;
      name: string;
    }
  }[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  }[];
  platforms: {
    id: number;
    name: string;
    count: number;
    percent: number;
  }[];
  saturated_color: string;
  dominant_color: string;
  short_screenshots: {
    image: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
  tags: {
    id: number;
    name: string;
    language: string;
  }
  [keys: string]: any;
}

export {
  Routes,
  PageArgs,
  Game
}