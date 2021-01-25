import React from 'react';

import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="https://1.bp.blogspot.com/-tyXy-38pnlc/W6lE52y4XGI/AAAAAAAASyU/9id4EBCTI1ovbYDEvG0pvMkwnVgodEShwCLcBGAs/s1600/logo.jpg"/>
      </div>
      <div className={styles.character}>
        <a href="/characterlist"><button>LIST CHARACTERS</button></a>
      
      </div>
      <div className={styles.character}>
        <a href="/"><button>Home</button></a>
      
      </div>
      
      <div className={styles.add}>
        <a href="/newcharacter"><button>ADD CHARACTER</button></a>
      
      </div>
      <div className={styles.twitter}>
        <a href="https://twitter.com/SpinalT79406108" target = "blank">TapBot on Twitter<br/><img src="https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-twitter-512.png" /><br/></a>
      </div>



    </header>
  )

}
export default Header;
