import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';
import styles from './CharacterPage.css';



const CharacterPage = () => {
  
 const { characters, loading }= useCharacters();
 if(loading) return <span><img src="http://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif"/></span>
 
    
 const characterElements = characters.map(character => (
    
  <li li key={character.id} className={styles.item} >
    <Link to = {`/detail/${character.id}`}>
      <Character  {...character } />
    </Link>

  </li>
  
));

  return (

    <ul data-testid="characters" className={styles.display}>
        {characterElements}
    </ul> 
)

}
export default CharacterPage;
