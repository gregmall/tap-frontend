import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCharacters } from '../../../actions/characterActions';

import { useCharacters } from '../../hooks/characters';
import styles from './CharacterPage.css';
import { useDispatch, useSelector } from 'react-redux';



const CharacterPage = () => {
  const characters= useSelector(state => state.character.characters);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(fetchCharacters());
  }, []);

 
    
 const characterElements = characters.map(character => (
  <Link to = {`/detail/${character.id}`}>
  <li li key={character.id} className={styles.item} >
    
  <p><h2>{character.name}</h2></p>
    <img src={character.image} />
    <p>{character.role}</p>
   

  </li>
  </Link>
  
));

  return (

    <ul data-testid="characters" className={styles.display}>
        {characterElements}
    </ul> 
)

}
export default CharacterPage;
