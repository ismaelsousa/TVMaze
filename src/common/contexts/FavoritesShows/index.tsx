import React, {useState} from 'react';
import {ShowModel} from '../../models/show.model';
import {
  FavoritesShowsContextProps,
  FavoritesShowsProps,
  FavoritesShowsState,
} from './types';

export const FavoritesShowsContext =
  React.createContext<FavoritesShowsContextProps>(
    {} as FavoritesShowsContextProps,
  );

const FavoritesShows = ({children}: FavoritesShowsProps) => {
  /**
   * States
   */
  const [favoritesShows, setFavoritesShows] = useState<FavoritesShowsState>({});

  /**
   * Callbacks
   */
  const addFavoriteShow = (show: ShowModel) => {
    setFavoritesShows(old => ({...old, [show.id]: show}));
  };
  const removeFavoriteShow = (show: ShowModel) => {
    setFavoritesShows(old => {
      if (old[show.id]) {
        delete old[show.id];
      }
      return {...old};
    });
  };

  /**
   * TODO: Hydrate
   */

  return (
    <FavoritesShowsContext.Provider
      value={{addFavoriteShow, removeFavoriteShow, favoritesShows}}>
      {children}
    </FavoritesShowsContext.Provider>
  );
};

export default FavoritesShows;
