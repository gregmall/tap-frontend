/* eslint-disable max-len */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe';
import styles from './Home.css';
export default function Home() {
  return (
    <div className = {styles.Home}>
      <h1>WELCOME TO THE ONE OF THE LOUDEST PAGES ON THE INTERNET!</h1>
      <p>How much more black could this page be and the answer is none more black</p>
      <section>
      
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
      </section>
    </div>
  );
}

