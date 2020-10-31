import { useEffect, useState } from 'react';

import { getCharacters, getById } from '../../services/character-api';

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

export const useById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();

  useEffect(() => {
    getById(id)
    .then(returnedCharacter => setCharacter(returnedCharacter))
    .finally(() => setLoading(false))
  }, [id]);

  return {
    loading,
    character
  };
};
