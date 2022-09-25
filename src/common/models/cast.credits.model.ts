import {ShowModel} from './show.model';

export interface Character {
  href: string;
}

export interface Links {
  show: ShowModel;
  character: Character;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average?: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface WebChannel {
  id: number;
  name: string;
  country?: any;
  officialSite: string;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Previousepisode {
  href: string;
}

export interface Links2 {
  self: Self;
  previousepisode: Previousepisode;
}

export interface Embedded {
  show: ShowModel;
}

export interface CastCreditModel {
  self: boolean;
  voice: boolean;
  _links: Links;
  _embedded: Embedded;
}
