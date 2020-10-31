import React, { Component } from 'react';
import NewCharacterForm from './NewCharacterForm';
import  { postCharacter }  from '../../../services/character-api';


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

  handleSubmit =(e) => {
    e.preventDefault();
    const character = {
      name: this.state.name,
      image: this.state.image,
      quote: this.state.quote,
      role: this.state.role
    }
    console.log(character)
    postCharacter(character)
      .then(res=> console.log(res));

    

    }
    render(){
      const { name, image, quote, role } = this.state
return (

  <>
    <NewCharacterForm
      name= {name}
      image= {image}
      quote= {quote}
      role={role}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      />
  </>
)
  

 
};
  
};




