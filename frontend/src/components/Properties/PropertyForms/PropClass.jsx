import React from 'react';
import "./styles/PropClass.css"
import { useNavigate } from 'react-router-dom';
import Building from '../../../assets/Icons/buildings.svg'
import Single from '../../../assets/Icons/house.svg'

const PropertyType = ({ formData, onNext, onChange }) => {
    const navigate = useNavigate();

    // Function to handle click on Apartment button
    const handleApartmentClick = () => {
        // Update formData with property_type set to 'apartments'
        onChange({ target: { name: 'property_type', value: 'apartments' } });
    };

    // Function to handle click on Single Home button
    const handleSingleHomeClick = () => {
        // Update formData with property_type set to 'single home'
        onChange({ target: { name: 'property_type', value: 'single home' } });
    };

    return ( 
        <div className="main">
            <header className="main-header-cr">
                <div className="brand-logo brand-logo-name" onClick={() => navigate('/')}>Makao</div>
            </header>
            <section className='sec-cr'>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">What are you Showcasing?</p>
                <div className="icons-choice">
                    <div className="icons-item" onClick={handleApartmentClick}>
                        <div className="aprt-icon">
                            <img src={Building} alt='apartment' />
                        </div>
                        <button className='btn'>Apartment</button>
                    </div>
                    <div className="icons-item" onClick={handleSingleHomeClick}>
                        <div className="single-icon">
                            <img src={Single} alt='single' />
                        </div>
                       <button className='btn'>Single Home</button> 
                    </div>
                </div>
                <div className='prop-name'>
                    <input
                        name='name'
                        type="text"
                        placeholder="Property Name"
                        value={formData.name}
                        onChange={onChange}
                    />
                </div>
            </section>
            <footer className='sub'>
                <button onClick={() => navigate('/advertise')} className="btn back">Back</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </footer>
        </div>
     );
}
 
export default PropertyType;
