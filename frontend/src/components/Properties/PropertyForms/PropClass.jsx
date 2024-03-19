
import "./styles/PropClass.css"

const PropertyType = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">What are you Showcasing?</p>
                <div className="icons">
                    <div className="apartment">
                        <div className="aprt-icon"></div>
                        <p>Apartment</p>
                    </div>
                    <div className="single">
                        <div className="single-icon"></div>
                       <p>Single Home</p> 
                    </div>
                </div>
                <input type="text" placeholder="Property Name" />
            </section>
            <footer>
                <a href="/advertise" className="back">&lsaquo; Back</a>
                <a href="/add-property-location" className="next">Next &rsaquo;</a>
            </footer>
        </div>
     );
}
 
export default PropertyType;