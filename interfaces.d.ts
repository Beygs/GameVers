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

interface BasicObject {
  id: number;
  name: string;
  slug: string;
}

interface Store {
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
  }
}

interface Platform {
  platform: BasicObject;
}

interface Tag extends BasicObject {
  language: string;
}

interface ShortScreenshot {
  id: number;
  image: string;
}

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  released: string;
  background_image: string;
  website: string;
  rating: number;
  ratings_count: number;
  parent_platforms: Platform[];
  stores: Store[];
  developers: BasicObject[];
  genres: BasicObject[];
  tags: Tag[];
  publishers: BasicObject[];
  movies_count: number;
  trailer: string;
  screenshots?: string[];
}
