import React from 'react';
import Iframe from 'react-iframe'
import styles from './Home.css';;
export default function Home() {
  return (
    <div className = {styles.Home}>
      <h1>WELCOME TO THE ONE OF THE LOUDEST PAGES ON THE INTERNET!</h1>
      <p>This is a fan page for one of England's loudest bands.</p>
      <Iframe url="https://www.youtube.com/embed/YjC0vMIrOAk"
        width="560px"
        height="315px"
        id="myId"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="myClassname"
        display="initial"
        position="relative"/>
        <Iframe url="https://www.youtube.com/embed/Rk9aThIovMA"
        width="560px"
        height="315px"
        id="myId"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="myClassname"
        display="initial"
        position="relative"/>
        <Iframe url="https://www.youtube.com/embed/I-BYzaDwNoE"
        width="560px"
        height="315px"
        id="myId"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="myClassname"
        display="initial"
        position="relative"/>
        <Iframe url="https://www.youtube.com/embed/QrJlyapt6OY"
        width="560px"
        height="315px"
        id="myId"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  )
}

