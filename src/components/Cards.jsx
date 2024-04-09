import React from "react";

function Cards(props) {
    console.log(props.city)
    return (
            <div className="card-item">
                <img src={props.img} alt="cityImg"/> 
                <h3>{props.city}</h3>
                <p>{props.area}</p>
                <p>{props.year}</p>
                <p><a href={props.googleMapLink}>Google Map Link</a></p>
                <p>{props.description}</p>
            </div>
    );
}

export default Cards;
