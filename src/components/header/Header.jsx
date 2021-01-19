import React from 'react';
import Iframe from 'react-iframe'
import styles from './Header.css';
const Header = () => {


  return (
    <header className={styles.Header}>
      <div>
      <img src="https://celebrityaccess.com/wp-content/uploads/2019/11/thisisspinaltap2019.jpg"/>
      </div>
      <div className={styles.character}>
        <a href="/"><button>LIST CHARACTERS</button></a>
      
      </div>
      <div className={styles.add}>
        <a href="/newcharacter"><button>ADD CHARACTER</button></a>
        {/* <Iframe url="https://www.youtube.com/watch?v=J8yA2iLE15g"
        width="450px"
        height="450px"
        id="myId"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="myClassname"
        display="initial"
        position="relative"/> */}
      </div>



    </header>
  )

}
export default Header;
