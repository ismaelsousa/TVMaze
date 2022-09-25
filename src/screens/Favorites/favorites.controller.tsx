import {useMemo} from 'react';
import useFavoritesShows from '../../common/hooks/useFavoritesShows';
import {ShowModel} from '../../common/models/show.model';

const useFavoritesController = () => {
  const {favoritesShows, removeFavoriteShow} = useFavoritesShows();

  const favoritesList = useMemo<Array<ShowModel>>(() => {
    if (Object.keys(favoritesShows).length) {
      return Object.values(favoritesShows);
    }
    return [];
  }, [favoritesShows]);

  return {favoritesList, removeFavoriteShow};
};

export default useFavoritesController;
