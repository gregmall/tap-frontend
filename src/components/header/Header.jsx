import React from 'react';

import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="public/assets/sizedlogo.jpg"/>
      </div>
      <div className={styles.character}>
        <a href="/"><button>LIST CHARACTERS</button></a>
      
      </div>
      <div className={styles.add}>
        <a href="/newcharacter"><button>ADD CHARACTER</button></a>
      </div>


    </header>
  )

}
export default Header;
