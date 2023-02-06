import React from 'react';

import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="/assets/sizedlogo.jpg"/>
      </div>
      <div className={styles.character}>
        <a href="/characterlist"><button>CHARACTERS</button></a>
      
      </div>
      <div className={styles.character}>
        <a href="/"><button>Home</button></a>
      
      </div>
      
      <div className={styles.add}>
        <a href="/newcharacter"><button>ADD CHARACTER</button></a>
      
      </div>
      <div className={styles.twitter}>
        <a href="https://twitter.com/SpinalT79406108" target = "blank"><br/><img src="/assets/1752359.png" /><br/></a>
      </div>



    </header>
  )

}
export default Header;
