import './Card.css'
import React, { useState, useEffect } from "react";

function Card({link,description}){
    
    
    
    return(

   <ul>
    <li>
        <iframe width="420" height="315"
src={`${link}`}
 frameborder="0"
    allowfullscreen='true'


>
</iframe>
    </li>
    <li>
        {description}
    </li>
   </ul>

       


        
    )
}
export default Card