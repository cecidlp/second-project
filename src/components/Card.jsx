import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    const {
        imageUrl,
        location,
        googleMapsUrl,
        startDate,
        endDate,
        description,
        title
    } = props
    return (
        <div>
        <div className="card">
            <img src={imageUrl} className="location-image" />
            <div className="info-area">
            <div className="location-div">
                <div className="same">
                <FontAwesomeIcon icon={faLocationDot} className="icon-world" color="#F55A5A"/>
                <span className="location">{location}</span>
                </div>
                <a href={googleMapsUrl} className="google-link">View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <div className="dates">{startDate} - {endDate} </div>
                <p className="description">{description}</p>
            </div>
        </div>
        <hr/>
        </div>
        )
}

