/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { useCharacters } from '../../hooks/characters';
import styles from './CharacterPage.css';




const CharacterPage = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <div style = {{ alignItems: 'center', justifyContent:'center' }}><img src = "https://media.tenor.com/qXzHf2tesO0AAAAC/loading-gif-steiness.gif" /></div>;



    
  const characterElements = characters.map(character => (
    <Link to = {`/detail/${character.id}`}>

      <Card className={styles.card} >
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title><h2>{character.name}</h2></Card.Title>
          <Card.Text>{character.role}</Card.Text>
        </Card.Body>
      </Card>

    </Link>
  
  ));

  return (

    <ul data-testid="characters" className={styles.display}>
      {characterElements}
    </ul> 
  );

};
export default CharacterPage;
