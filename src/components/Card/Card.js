import React from 'react';

const Card = ({ image, alt, heading, text }) => {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={alt} />
            <div className="card-container">
                <h5 className="card-heading">
                    <span className="card-heading__text block">{heading}</span>
                </h5>
                <span className="card-body__text block">{text}</span>
            </div>
        </div>
    )
}

export default Card;