import React from "react";
import cover from '../cover.jpg';

function MainContent() {
    return (
      <div className="main-container">
        <img src={cover} />
        <div className="main-inner-container">
          <h1>Something About Traveling!!</h1>
          <p>"Traveling is a transformative journey, a chance to explore the 
          unknown and unravel the mysteries of the world. It's an opportunity 
          to cultivate stories that weave through the tapestry of your life, 
          leaving indelible marks on your soul. Pack lightly but carry your curiosity, 
          for the world awaits."
          </p>
        </div>
      </div>
    );
  }
  
  export default MainContent;