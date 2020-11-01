import React, { Component } from 'react';
import CharacterForm from '../../controls/CharacterForm';
import  { getById, updateById }  from '../../../services/character-api';
import { useParams } from 'react-router-dom';


export default class UpdateCharacter extends Component {
  state = {
    id: '',
    name: '',
    image: '',
    quote: '',
    role: '',

  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const character = await getById(id)
    console.log(id)

    this.setState({
      id: character.id,
      name: character.name,
      image: character.image,
      quote: character.quote,
      role: character.role
    })
  }
  handleChange = ({ target }) => {
    
    this.setState({ [target.name]: target.value });
  };

  handleClick = (e) => {
   e.preventDefault();
   console.log(this.state.name)
   console.log(this.state.id)
     updateById(this.state.id, {
      name: this.state.name,
      image: this.state.image,
      quote: this.state.quote,
      role: this.state.role
    })

    }
    render(){
      const { name, image, quote, role } = this.state
return (

  <div>
    <CharacterForm
      name= {name}
      image= {image}
      quote= {quote}
      role={role}
      onChange={this.handleChange}
      
      />
      <button onClick={this.handleClick}>UPDATE CHARACTER! </button>
  </div>
)
  

 
};
  
};
