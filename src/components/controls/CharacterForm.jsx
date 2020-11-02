import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterForm.css';

const CharacterForm = ({
  name,
  image,
  quote,
  role,
  onChange,
  
}) =>{
    return (

      <div className={styles.CharacterForm}>
        <section>
          <label htmlFor="name">Name:</label>
          <input id="name"
            type="text"
            name="name"
            value={name}
            placeHolder={name}
            onChange={onChange} /><br />
          <label htmlFor="image">Image Url:</label>
          <input id="image"
            type="text"
            name="image" value={image}
            placeHolder={image}
            onChange={onChange} /><br />
          <textarea
            placeHolder="Enter quote here"
            id="quote"
            type="textarea"
            name="quote"
            value={quote}
            placeHolder={quote}
            onChange={onChange} /><br />
          <label htmlFor="role">Role:</label>
          <input id="role"
            type="text"
            name="role" value={role}
            placeHolder={role}
            onChange={onChange} />
        </section>
      </div>


    );
  };

CharacterForm.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
  
};

export default CharacterForm;

