import {ShowModel} from '../../models/show.model';

export type FavoritesShowsState = {[key: string | number]: ShowModel};
export interface FavoritesShowsContextProps {
  addFavoriteShow: (show: ShowModel) => void;
  removeFavoriteShow: (show: ShowModel) => void;
  favoritesShows: FavoritesShowsState;
}

export interface FavoritesShowsProps {
  children: React.ReactNode;
}
