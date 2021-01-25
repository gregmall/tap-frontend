import React from 'react';

import  { createCharacter} from '../../../actions/characterActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom' 
import styles from './NewCharacter.css'

const NewCharacter = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [quote, setQuote] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name ==='name') setName(target.value);
    if(target.name ==='image') setImage(target.value);
    if(target.name ==='quote') setQuote(target.value);
    if(target.name ==='role') setRole(target.value);
  }
  const handleClick = e => {
    e.preventDefault();
    dispatch(createCharacter({
      name,
      image,
      quote,
      role
  
      }));
      alert('New character added! ! Refresh page to see new character!');
      history.push('/characterlist');
      setName('');
      setImage('');
      setQuote('');
      setRole('');
      
    }


return (

  <div className={styles.create}>
 <div className={styles.page}>
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
              placeHolder={role}
              onChange={handleChange} />
       
      
      
        <button>CREATE NEW CHARACTER</button>
      
      </form>
      </section>
      </div>
      </div>
        </div>

      

)
};
  
export default NewCharacter;




