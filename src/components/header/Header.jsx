import React from 'react';

import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="https://celebrityaccess.com/wp-content/uploads/2019/11/thisisspinaltap2019.jpg"/>
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



    </header>
  )

}
export default Header;
