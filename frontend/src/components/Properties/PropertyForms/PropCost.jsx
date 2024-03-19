import "./styles/PropClass.css"
import "./styles/PropCost.css"

const PropertyCost = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Price range</p>
                <input type="text" placeholder="Ksh" className="price" />
                <p className="choice">Or Choose from</p>
                <span className="price-btns">
                    <button>10,000</button>
                    <button>12,000</button>
                    <button>15,000</button>
                    <button>20,000</button>
                </span>
            </section>
            <footer>
                <a href="/add-property-desc" className="back">&lsaquo; Back</a>
                <a href="/validate-property-details" className="next">Next &rsaquo;</a>
            </footer>
        </div>
     );
}
 
export default PropertyCost;