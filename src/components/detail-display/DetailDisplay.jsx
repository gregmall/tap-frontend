/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersById, removeCharacter } from '../../actions/characterActions';
import { useParams, useHistory } from 'react-router-dom';

import styles from './DetailDisplay.css';

const DetailDisplay = () => {

 
  const { id } = useParams();
  const history = useHistory();
  const detail = useSelector(state => state.character.detail);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharactersById(id));
  }, [])
  ;

  const handleDelete = ({ target }) => {
    if(window.confirm('Do you really want to delete this character?')){
      dispatch(removeCharacter(target.value));
      history.push('/');
    }
    
   
  };
  const routeChange = () => { 
    const path = '/characterlist'; 
    history.push(path);
    location.reload();
  };
  const speakQuote = (quote) => {

    
    const speak = (msg) => { 
      const voices = speechSynthesis.getVoices();
      const sp = new SpeechSynthesisUtterance(msg);
      
      sp.voice = voices[49];
      speechSynthesis.speak(sp);
    };
    
    speak(quote);
    quote = '';
   

  };

  return (
    
    <div className={styles.page}>
      <section className = {styles.detail}>
        <h1>Name: {detail.name}</h1>
        <img src={detail.image} alt={detail.name}/>
        <h2>Role: {detail.role}</h2>
        <p>Quote: "{detail.quote}" {speakQuote(detail.quote)}</p>
        <button onClick={routeChange}>Close</button>
        
      
       

      </section>
    </div>
  );

};

export default DetailDisplay;
