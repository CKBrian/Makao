import React from 'react';
import './Card.css';
import PlaceHolder from '../../../assets/Images/placeholder.jpg';

function PropertyCard(props) {
  const formattedPrice = props.price.toLocaleString();

  return (
    <div className="property-card" onClick={props.onClick}>
      <div className="card-top">
        <img src={props.image ? props.image : PlaceHolder} alt={props.name} />
        <span className="rating">
          {/* <img src={PlaceHolder} alt="rate" /> */}
          <p>{props.rating ? props.rating : "New" }</p>
        </span>
      </div>
      <div className="property-detail">
        <h5 className="property-title">{props.name}</h5>
        <p className="property-location">{props.location}</p>
        <p className="property-location">{props.rooms} {props.rooms > 1 ? 'rooms' : 'room'} </p>
        <p className="property-price">Ksh {formattedPrice} per Month</p>
      </div>
    </div>
  );
}

export default PropertyCard;
