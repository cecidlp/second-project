import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return(
        <div className="navbar">
            <nav>
            <FontAwesomeIcon icon={faEarthAmericas} className="world-icon"/>
            <h1>My travel journal</h1>
            </nav>
        </div>
        
    )
}