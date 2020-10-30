import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../hooks/characters';


const CharacterList = () => {
  
 const { characters, loading }= useCharacters();
 if(loading) return <span><img src="http://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif"/></span>
 console.log(characters)
    
 const characterElements = characters.map(character => (
    
  <li key={character.id} >
    
      <Character  {...character } />

  </li>
  
));
console.log(characterElements)
  return (

  <ul data-testid="characters">
    motherfuck
      {characterElements}
    </ul> 
)

}
export default CharacterList;
