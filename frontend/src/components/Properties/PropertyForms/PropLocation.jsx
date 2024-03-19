import { useEffect, useState } from "react";
import "./styles/PropClass.css"
import "./styles/PropLocation.css"
import { useNavigate } from 'react-router-dom'
import axiosInstance from "../../../axios";

const PropertyLocation = ({ formData, onNext, onChange, onPrev }) => {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [places, setPlaces] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});

    useEffect(() => {
        try {
            axiosInstance.get('cities/')
            .then(response => {
                if (response.status === 200) {
                    setCities(response.data);
                };
            });
        } catch (error) {
            console.log('Error fetching Cities');
        }
    }, []);

    useEffect(() => {
        if (selectedCity.id) {
            try {
                axiosInstance.get(`places/?city_id=${selectedCity.id}`)
                .then(response => {
                    if (response.status === 200) {
                        setPlaces(response.data);
                    }
                });
            } catch (error) {
                console.log('Error fetching Places');
            }
        }
    }, [selectedCity]);

    const handleCityChange = (e) => {
        const cityId = e.target.value;
        const city = cities.find(city => city.id === cityId);
        setSelectedCity(city);
        onChange(e);
    };

    return ( 
        <div className="main">
            <header className="main-header-cr">
                <div onClick={() => navigate('/')} className="brand-logo brand-logo-name">Makao</div>
            </header>
            <section className="sec-cr">
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Set up location</p>
                <div className="icons">
                    <select className="selection-container" onChange={handleCityChange}>
                        <option value=''>City</option>
                        {cities && 
                            cities.map((item, key) => (
                                <option key={key} value={item.id} className="selection">{item.name}</option>
                            ))
                        }
                    </select>
                    <select className="selection-container" onChange={onChange} name='place_id' value={formData.place_id} disabled={!selectedCity}>
                        <option value="" className="selection">Place</option>
                        {places &&
                            places.map((item, key) => (
                                <option value={item.id} key={key} className="selection">{item.name}</option>
                            ))
                        }
                    </select>
                <input
                    name='location'
                    type="text"
                    placeholder="Street" 
                    className="price"
                    value={formData.location}
                    onChange={onChange} />
                </div>
            </section>
            <footer className="sub">
                <button onClick={onPrev} className="btn back">Back</button>
                <button onClick={onNext} className="btn next">Next</button>
            </footer>
        </div>
     );
}
 
export default PropertyLocation;
