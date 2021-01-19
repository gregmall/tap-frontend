import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCharacter } from '../../actions/characterActions';
import { useHistory } from 'react-router-dom';
import styles from './CharacterForm.css';

const CharacterForm = () =>{
  const history = useHistory();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [quote, setQuote] = useState('');
  const [role, setRole] = useState('');
  

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'image') setImage(target.value);
    if(target.name === 'quote') setQuote(target.value);
    if(target.name === 'role') setRole(target.value);
  }
    return (

      <div className={styles.page}>
        <div className={styles.form}>
          <section className={styles.section}>
            <label htmlFor="name">Name: </label>
            <input id="name"
              type="text"
              name="name"
              value={name}
              placeHolder={name}
              onChange={handleChange} /><br />
            <label htmlFor="image">Image Url: </label>
            <input id="image"
              type="text"
              name="image" value={image}
              placeHolder={image}
              onChange={handleChange} /><br />
            <label htmlFor="quote">Quote: </label>
            <textarea
              placeHolder="Enter quote here"
              id="quote"
              type="textarea"
              name="quote"
              value={quote}
              placeHolder={quote}
              onChange={handleChange} /><br />
            <label htmlFor="role">Role: </label>
            <input id="role"
              type="text"
              name="role" value={role}
              placeHolder={role}
              onChange={handleChange} />
          </section>
        </div>
      </div>

    );
  };



export default CharacterForm;

