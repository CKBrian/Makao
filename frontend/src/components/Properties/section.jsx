import { useEffect, useState } from 'react';
import './section.css'
import axiosInstance from '../../axios';
import PropertyCard from './SemiComponents/PropertyCard';
import { useNavigate } from 'react-router-dom'

const Section = () => {

    const [properties, setProperties] = useState([]);
    const navigate = useNavigate()

    const handleSelectedProperty = (property) => {
        console.log(property)
        navigate(`/listings/${property.id}`, { state: { property } });
    };

    useEffect(() => {
        axiosInstance.get('properties/')
        .then((response) => {
            setProperties(response.data);
        })
        .catch((err) => {
            console.log("Failed to fetch Properties: ", err);
        })
    }, [])
    return ( 
        <section className="list-main-section">
            <div className="intro">
                <h4 className="top-title">Ready to Rent?</h4>
                <p className="top">Choose from a list of verified properties</p>
            </div>
            <div className='intro-subnav'>
                <nav className="left-subnav">
                    <ul className="subnav">
                        <li><a href="/about">Popular</a></li>
                        <li><a href="/advertise">Recommended</a></li>
                    </ul>
                </nav>
                <nav className="right-subnav">
                    <ul className="subnav">
                        <li><a href="/about">Anywhere</a></li>
                        <li><a href="/advertise">Add amenities</a></li>
                    </ul>
                </nav>
            </div>
            <div className="property-list">
                {properties &&
                    properties.map((item, key) => (
                        <PropertyCard
                        key={key}
                        name={item.name}
                        rating={item.rating}
                        rooms={item.number_rooms}
                        location={item.location}
                        price={item.rent_price}
                        onClick={() => handleSelectedProperty(item)}
                        />
                    ))
                }
            </div>
        </section>
     );
}
 
export default Section;