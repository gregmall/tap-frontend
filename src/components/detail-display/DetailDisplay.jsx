import React from 'react';
import { useById } from '../hooks/characters';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './DetailDisplay.css';

const DetailDisplay = () => {


  const { id } = useParams();
  const { loading, character } = useById(id);
  if(loading) return <span>LOADING....</span>

  return(
    <div className={styles.page}>
      <div className = {styles.detail}>
        <h1>Name: {character.name}</h1>
        <img src={character.image} alt={character.name}/>
        <h2>Role: {character.role}</h2>
        <p>Quote: "{character.quote}"</p>
        <a href="/"><button>GO BACK</button></a>
      
        <Link to={`/update/${id}`}><button>Update</button></Link>
      </div>
    </div>
  )

};

export default DetailDisplay;
