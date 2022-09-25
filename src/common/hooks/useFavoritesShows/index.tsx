import {useContext} from 'react';
import {FavoritesShowsContext} from '../../contexts/FavoritesShows';

const useFavoritesShows = () => {
  const context = useContext(FavoritesShowsContext);

  if (!context) {
    throw new Error(
      'useFavoritesShows must be used within a FavoritesShowsProvider',
    );
  }
  return context;
};

export default useFavoritesShows;
