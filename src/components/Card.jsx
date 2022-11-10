import React from "react";

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
        <div className="card">
            <img src={imageUrl} className="location-image"/>
            <div className="location">
                <span>{location}</span>
                <span><a href={googleMapsUrl}>View on Google Maps</a></span>
            </div>
            <h2>{title}</h2>
            <div className="dates">{startDate} - {endDate} </div>
            <div className="description">{description}</div>
            <hr />
        </div>
    )
}

