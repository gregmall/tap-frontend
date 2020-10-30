import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../../services/character-api';


const CharacterList = () => {
  
 const characters= getCharacters();
    console.log(characters)
   



return (

  <div>hello</div>
)

}
export default CharacterList;
