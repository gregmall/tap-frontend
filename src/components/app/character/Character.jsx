import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, quote, role }) =>(
  <div>
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
