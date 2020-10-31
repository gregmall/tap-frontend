import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image, quote, role }) =>(
  <div className={styles.Character}>
    <p>{name}</p>
    <img src={image} />
    <p>{quote}</p>
    <p>{role}</p>
  </div>

);
Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default Character;
