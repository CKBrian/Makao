import React from 'react'

function PropertyDetail({ property }) {
  return (
    <div>
        <div className="logo">Makao</div>
        <div className="property-image">
            <img src={property?.images} alt='property images' />
        </div>
        <h5 className="property-name">{property.name}</h5>
        <p className="description">{property.description}</p>
    </div>
  )
}

export default PropertyDetail