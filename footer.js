import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <div className="footer">

    <div className = "bottomleft">
    
    ‎PeterMcGuinnessPhotography.com

    </div>


    <div className = "bottomleft2">
    
    <FontAwesomeIcon icon={faCopyright} /> Copyright 2020

    </div>




{/* 
    <div className = "bottommiddle">
    asdsaddsd
    ‏‏‎ ‎‏‏‎ <a href = "https://www.instagram.com/tourismireland/?hl=en" target="_blank"> Instagram</a>

    </div> */}



    <div className = "bottomright">
    
 
    
    
    

    
    <a href = "https://hotmail.co.uk" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>

 
    ‏‏‎ ‎

    <a href = "https://www.instagram.com/tourismireland/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
    
    
    
 
    ‏‏‎ ‎

    <a href = "https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare}/></a>
    
    ‏‏‎ ‎


    <FontAwesomeIcon icon="check-square" />
    ‏‏‎ ‎
    </div>
  </div>
);

export default Footer;