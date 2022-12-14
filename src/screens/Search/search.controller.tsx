import {useCallback, useEffect, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import {PeopleByTextModel} from '../../common/models/peopleByText.model';
import {ShowByTextModel} from '../../common/models/showByText.model';
import {fetchPeopleByText} from '../../repositories/search/peopleByText/peopleByText.repository';
import {fetchShowsByText} from '../../repositories/search/showsByText/showsByText.repository';

const useSearchController = () => {
  /**
   * States
   */
  const [shows, setShows] = useState<Array<ShowByTextModel>>([]);
  const [people, setPeople] = useState<Array<PeopleByTextModel>>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<'people' | 'shows'>('shows');

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

  const handleSearchPeople = useCallback(async (search?: string) => {
    if (!search) {
      setPeople([]);
      return;
    }
    try {
      setLoading(true);
      const response = await fetchPeopleByText({q: search});
      setPeople(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Debounce
   */
  const debouncedSearchShows = useDebouncedCallback(handleSearchShows, 700);
  const debouncedSearchPeople = useDebouncedCallback(handleSearchPeople, 700);

  /**
   * Effects
   */

  useEffect(() => {
    /**
     * When the user clears the search text, we should clear the search results
     */
    if (searchText.length === 0) {
      debouncedSearchShows();
      debouncedSearchPeople();
    }
  }, [debouncedSearchPeople, debouncedSearchShows, searchText.length]);

  useEffect(() => {
    if (searchText.length > 0) {
      debouncedSearchShows(searchText);
      debouncedSearchPeople(searchText);
    }
  }, [debouncedSearchPeople, debouncedSearchShows, searchText]);

  /**
   * Binding with the view
   */
  return {
    searchText,
    setSearchText,
    shows,
    loading,
    searchType,
    setSearchType,
    people,
  };
};

export default useSearchController;
