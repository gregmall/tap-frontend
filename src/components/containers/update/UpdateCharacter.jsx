import React, { Component } from 'react';
import CharacterForm from '../../controls/CharacterForm';
import  { getById, updateById, deleteCharacter }  from '../../../services/character-api';



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
    this.props.history.push('/');

    }
       handleDelete = async () => {
        const id = this.props.match.params.id;
    if (window.confirm('Do you really want to delete this character?')) { 
        await deleteCharacter(id);
        this.props.history.push('/');
      }
      
      this.props.history.push('/');

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
      <button onClick={this.handleDelete} >DELETE CHARACTER</button>
  </div>
)
  

 
};
  
};
