import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image, role }) =>(
  <div className={styles.Character}>
    <p><h2>{name}</h2></p>
    <img src={image} />
    <p>{role}</p>
  </div>

);
Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default Character;
