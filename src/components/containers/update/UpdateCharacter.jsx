 import React, { Component } from 'react';
 

 import styles from './UpdateCharacter.css';

import { useState } from 'react';
import {  useSelector } from 'react-redux';
import {  useParams, useHistory } from 'react-router-dom';

import { updateById } from '../../../services/character-api';




 const UpdateCharacter = () => {
  const { id } = useParams();
  const history = useHistory();

  const detail = useSelector(state => state.character.detail);
  console.log(detail)
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [quote, setQuote] = useState('');
  const [role, setRole] = useState('');

  const handleChange = ({ target }) => {
    if(target.name ==='name') setName(target.value);
    if(target.name ==='image') setImage(target.value);
    if(target.name ==='quote') setQuote(target.value);
    if(target.name ==='role') setRole(target.value);

  }
  const handleClick= e => {
    e.preventDefault();
    updateById(id, {
      name: name,
      image: image,
      quote: quote,
      role: role
    })
    history.push('/')
  }



return (

  <div className={styles.update}>
<div className={styles.page}>
        <div className={styles.form}>
        <div className={styles.form}>
          <section className={styles.section}>
            <form onSubmit={handleClick}>
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
              placeholder={role}
              onChange={handleChange} />
       
      
      
        <button>UPDATE</button>
      
      </form>
      </section>
      </div>
      </div>
        </div>
        </div>

)
  

 
};
  

export default UpdateCharacter;
