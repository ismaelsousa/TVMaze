import {useState} from 'react';

const useSearchController = () => {
  const [searchText, setSearchText] = useState<string>('');

  return {searchText, setSearchText};
};

export default useSearchController;
