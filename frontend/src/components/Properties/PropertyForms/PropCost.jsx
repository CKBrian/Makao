import "./styles/PropClass.css"
import "./styles/PropCost.css"


const PropertyCost = ({ formData, onNext, onChange, onPrev }) => {
    
    return ( 
        <div className="main">
            <header className="main-header-cr">
                    <div className="brand-logo-name">Makao</div>
            </header>
            <section className="sec-cr">
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Rent Price Per Month</p>
                <input
                    name='rent_price'
                    type="number"
                    placeholder="Ksh" 
                    className="price"
                    value={formData.rent_price}
                    onChange={onChange} />
                <p className="info">Number of bedrooms</p>
                <input
                name="number_rooms"
                type="number"
                placeholder="Number of Bedrooms"
                value={formData.number_bedroooms}
                onChange={onChange}
                className="price"
                />
            </section>
            <footer className="sub">
                <button onClick={onPrev} className="btn back">Back</button>
                <button onClick={onNext} className="btn next">Next</button>
            </footer>
        </div>
     );
}
 
export default PropertyCost;