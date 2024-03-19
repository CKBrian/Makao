import "./styles/PropClass.css"
import "./styles/PropLocation.css"


const PropertyLocation = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Set up location</p>
                <div className="icons">
                    <p>Location</p>
                </div>
            </section>
            <footer>
                <a href="/add-property-type" className="back">&lsaquo; Back</a>
                <a href="/add-property-images" className="next">Next &rsaquo;</a>
            </footer>
        </div>
     );
}
 
export default PropertyLocation;