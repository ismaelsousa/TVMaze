import {useCallback, useEffect, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import {ShowByTextModel} from '../../common/models/showByText.model';
import {fetchShowsByText} from '../../repositories/search/showsByText/showsByText.repository';

const useSearchController = () => {
  /**
   * States
   */
  const [shows, setShows] = useState<Array<ShowByTextModel>>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Callbacks
   */
  const handleSearchShows = useCallback(async (search?: string) => {
    if (!search) {
      setShows([]);
      return;
    }
    try {
      setLoading(true);
      const response = await fetchShowsByText({q: search});
      setShows(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Debounce
   */
  const debouncedSearchShows = useDebouncedCallback(handleSearchShows, 600);

  /**
   * Effects
   */

  useEffect(() => {
    /**
     * When the user clears the search text, we should clear the search results
     */
    if (searchText.length === 0) {
      handleSearchShows();
    }
  }, [handleSearchShows, searchText.length]);

  useEffect(() => {
    if (searchText.length > 0) {
      debouncedSearchShows(searchText);
    }
  }, [debouncedSearchShows, searchText]);

  /**
   * Binding with the view
   */
  return {searchText, setSearchText, shows, loading};
};

export default useSearchController;
