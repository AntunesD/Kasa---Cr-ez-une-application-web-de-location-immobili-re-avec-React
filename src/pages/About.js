import React from "react";

//importation image A propos 
import imageAPropos from "../images/ImageAPropos.png";

//Importation des collapse
// import Collapse from '../components/Collapse';


function About() {
  return (
    <div>
      <img src={imageAPropos} alt="vallé"/>
      {/* <Collapse/> */}
    </div>
  );
}

export default About;
