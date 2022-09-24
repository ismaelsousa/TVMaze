import {useCallback, useEffect, useState} from 'react';
import {ShowModel} from '../../common/models/show.model';
import {fetchShows} from '../../repositories/shows/shows.repository';

const useHomeController = () => {
  const [shows, setShows] = useState<Array<ShowModel>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const loadShows = useCallback(async (page: number) => {
    try {
      setLoading(true);
      const response = await fetchShows({page});
      if (page === 0) {
        setShows(response);
      } else {
        setShows(old => [...old, ...response]);
      }
      setCurrentPage(old => old + 1);
    } catch (error) {
      //TODO: Check if is a 404 error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadShows(0);
  }, [loadShows]);

  /**
   * Binding with the view
   */
  return {shows, loading};
};

export default useHomeController;
