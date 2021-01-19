import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersById, removeCharacter } from '../../actions/characterActions';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './DetailDisplay.css';

const DetailDisplay = () => {


  const { id } = useParams();
  const history = useHistory();
  const detail = useSelector(state => state.character.detail);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharactersById(id))
  }, []);

  const handleDelete = ({ target }) => {
    if (window.confirm('Do you really want to delete this character?')){
    dispatch(removeCharacter(target.value));
    history.push('/');
    }
    
   
  };

  return(
    <div className={styles.page}>
      <div className = {styles.detail}>
        <h1>Name: {detail.name}</h1>
        <img src={detail.image} alt={detail.name}/>
        <h2>Role: {detail.role}</h2>
        <p>Quote: "{detail.quote}"</p>
        <a href="/"><button>GO BACK</button></a>
      
        <Link to={`/update/${id}`}><button>Update</button></Link>
        <button value ={detail.id} onClick={handleDelete}>DELETE CHARACTER</button>
      </div>
    </div>
  )

};

export default DetailDisplay;
