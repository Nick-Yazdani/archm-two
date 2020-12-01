import React from 'react';
import { Link } from 'react-router-dom';
 
const Card = ({ image, alt, heading, excerpt }) => {
    return (
        <div className="brand">
            <Link to="/our-brands/vonnies" className="brand-link"><img className="brand-image" src={image} alt={alt} /></Link>
            <div className="brand-container">
                <h5 className="brand-heading">
                    <span className="brand-heading__text block">{heading}</span>
                </h5>
                <span className="brand-body__text block">{excerpt}</span>
            </div>
        </div>
    )
}

export default Card;