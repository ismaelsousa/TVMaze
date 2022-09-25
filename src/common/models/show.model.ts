export interface Schedule {
  time: string;
  days: any[];
}

export interface Rating {
  average?: any;
}

export interface WebChannel {
  id: number;
  name: string;
  country?: any;
  officialSite: string;
}

export interface Externals {
  tvrage?: any;
  thetvdb?: any;
  imdb: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface ShowModel {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status?: 'Running' | 'Ended';
  runtime?: any;
  averageRuntime?: any;
  premiered?: any;
  ended?: any;
  officialSite?: any;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: any;
  webChannel: WebChannel;
  dvdCountry?: any;
  externals: Externals;
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
  updated: number;
  _links: Links;
}
