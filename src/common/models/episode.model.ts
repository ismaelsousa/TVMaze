export interface Rating {
  average: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface EpisodeModel {
  id: number;
  url: string;
  name: string;
  season: number;
  number?: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image?: Image;
  summary?: string;
  _links: Links;
}
