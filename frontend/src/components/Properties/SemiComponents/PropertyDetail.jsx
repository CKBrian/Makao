import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axios';
import './Detail.css';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceHolder from '../../../assets/Images/placeholder.jpg';
import { isMobile } from 'react-device-detect';

function PropertyDetail() {
  const [recipient, setRecipient] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  useEffect(() => {
    if (property) {
      axiosInstance.get(`users/${property.owner}`)
        .then(response => setRecipient(response.data.phone_number))
        .catch(err => console.log("Error occurred while fetching owner:", err));
    }
  }, [property]);

  const handleSendMessage = () => {
    const message = `Hello, I'm interested in renting ${property.name}. Can you please provide more details?`;
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    if (!isMobile) {
      const subject = `Rental enquiry for ${property.name}`;
      const emailBody = `Hello,\n\nI'm interested in renting ${property.name}. Can you please provide more details?\n\nThank you.`;
      const emailURL = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(emailURL, '_blank');
    }
  };

  const handleCallOwner = () => {
    const whatsappURL = `https://wa.me/${recipient}`;
    window.open(whatsappURL, '_blank');

    if (isMobile) {
      const phoneURL = `tel:${recipient}`;
      window.open(phoneURL, '_blank');
    }
  };

  return (
    <div className='selected-property'>
      <div className="logo" onClick={() => navigate('/')}>Makao</div>
      {!property ? 
        <div>Loading...</div>
      : 
        <div className="property-details-cr">
            <div className="property-image">
              <img src={property.image ? property.image : PlaceHolder} alt={property.name} />
            </div>
            <div className="property-expl">
              <div className="property-sec">
                <h5 className="property-name">{property.name}</h5>
                <p className="property-rooms">{property.number_rooms} {property.number_rooms > 1 ? 'rooms' : 'room' }</p>
              </div>
              <div className="property-sec">
                <p className="description">{property.description}</p> 
              </div>
              <div className="property-sec property-btns">
                <button className="btn" onClick={handleSendMessage}>
                  Message Owner
                </button>
                <button className="btn not-filled" onClick={handleCallOwner}>
                  Call Owner
                </button>
              </div>
            </div>
        </div>
      }
    </div>
  );
}

export default PropertyDetail;
