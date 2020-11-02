import React, { Component } from 'react';
import CharacterForm from '../../controls/CharacterForm';
import  { postCharacter }  from '../../../services/character-api';
import styles from './NewCharacter.css'


export default class NewCharacter extends Component {
  state = {
    name: '',
    image: '',
    quote: '',
    role: '',

  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleClick =(e) => {
    e.preventDefault();
    const character = {
      name: this.state.name,
      image: this.state.image,
      quote: this.state.quote,
      role: this.state.role
    }
   
    postCharacter(character)
    .then(this.props.history.push('/'))
      
  }
    render(){
      const { name, image, quote, role } = this.state
return (

  <div className={styles.create}>
    <CharacterForm
      name= {name}
      image= {image}
      quote= {quote}
      role={role}
      onChange={this.handleChange}
     
      />
      <div className={styles.buttons}>
        <button onClick ={this.handleClick}>CREATE NEW CHARACTER</button>
      </div>

      
</div>
)
};
  
};




