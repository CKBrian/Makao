import { useEffect, useState } from "react";
import "./styles/PropClass.css"
import "./styles/PropConfirm.css"
import axiosInstance from "../../../axios";


const PropertyConfirm = ({ formData, onNext, onPrev }) => {
    const [place, setPlace] = useState({});
    useEffect(() => {
        try {
            if (formData.place_id) {
                axiosInstance.get(`places/${formData.place_id}/`)
                .then(response => {
                    if (response.status === 200) {
                        setPlace(response.data);
                    }
                });
            }
        } catch (error) {
            console.log('Error fetching place details', error);
        }
    }, [formData.place_id]);

    return ( 
        <div className="main">
            <header className="main-header-cr">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section className="sec-cr">
                <p className="sect-title">Confirm Your details</p>
                <ul className="property-details">
                    <li className="">Property Name :  {formData.name}</li>
                    <li className="">Property type :  {formData.property_type}</li>
                    <li className="">Location      :  {formData.location}</li>
                    <li className="">Description   :  {formData.description}</li>
                    <li className="">Price Per Month     :  {formData.rent_price}</li>
                    <li className="">Number of Rooms    :  {formData.number_rooms}</li>
                    <li className="">Location    :  {place.name}</li>
                </ul>
                {/* <div className="img-cards">
                    <div className="img-file">
                        <div className="del-icon">del</div>
                    </div>
                    <div className="img-file">
                        <div className="del-icon">del</div>
                    </div>
                </div> */}
            </section>
            <footer className="sub">
                <button onClick={onPrev} className="btn back">Back</button>
                <button className="btn next" onClick={onNext}>Submit</button>
            </footer>
        </div>
     );
}
 
export default PropertyConfirm;