import { useEffect, useState } from 'react';

import { getCharacters } from '../../../services/character-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(returnCharacters => setCharacters(returnCharacters))
    .finally(() => setLoading(false));

  }, []);

  return {
    loading,
    characters
  };

}
