import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return(
        <div>
            <nav>
            <FontAwesomeIcon icon={faEarthAmericas} />
            <h1>My travel Journal</h1>
            </nav>
        </div>
        
    )
}