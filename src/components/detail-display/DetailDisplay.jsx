import React from 'react';
import { useById } from '../hooks/characters'
import { useParams } from 'react-router-dom';
import { deleteCharacter } from '../../services/character-api'
import { Link } from 'react-router-dom';

const DetailDisplay = () => {


  const { id } = useParams();
  const { loading, character } = useById(id);
  if(loading) return <span>LOADING....</span>

  return(
    <div>
      <h1>Name: {character.name}</h1>
      <img src={character.image} alt={character.name}/>
      <h2>{character.role}</h2>
      <p>"{character.quote}"</p>
      <a href="/"><button>GO BACK</button></a>
     
      <Link to={`/update/${id}`}><button>Update</button></Link>
      
     
      
    </div>
  )

};

export default DetailDisplay;
