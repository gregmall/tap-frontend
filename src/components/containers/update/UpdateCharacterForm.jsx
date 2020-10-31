import React from 'react';
import PropTypes from 'prop-types';

const UpdateCharacterForm =({
  name,
  image,
  quote,
  role,
  onChange,
  onSubmit
}) =>(

  <form onSubmit = {onSubmit}>
    <label htmlFor="name">Name:</label>
    <input id="name" type ="text" name="name" value={name} onChange={onChange} placeHolder={name}/>
    <label htmlFor="image">Image Url:</label>
    <input id="image" type ="text" name="image" value={image} onChange={onChange} placeHolder={image}/>
    <textarea
      placeHolder="Enter quote here"
      id="quote"
      type="textarea"
      name="quote"
      value={quote}
      onChange={onChange}
      placeHolder={quote}
   
    />
    <label htmlFor="role">Role:</label>
    <input id="role" type ="text" name="role" value={role} onChange={onChange} placeHolder={role} />
    <button type="submit" data-testid="submit">SUBMIT</button><br />



  </form>


);

UpdateCharacterForm.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UpdateCharacterForm;

