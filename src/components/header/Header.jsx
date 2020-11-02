import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="public/assets/sizedlogo.jpg"/>
      </div>
      <div>
        <a href="/"><button>LIST CHARACTERS</button></a>
      
      </div>
      <div>
        <a href="/newcharacter"><button>ADD CHARACTER</button></a>
      </div>


    </header>
  )

}
export default Header;
