import "./styles/PropClass.css"
import "./styles/PropConfirm.css"


const PropertyConfirm = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">Confirm Your details</p>
                <ul className="property-details">
                    <li className="">Property Name :  _</li>
                    <li className="">Property type :  _</li>
                    <li className="">Location      :  _</li>
                    <li className="">Description   :  _</li>
                    <li className="">Price Tag     :  _</li>
                </ul>
                <div className="img-cards">
                    <div className="img-file">
                        <div className="del-icon">del</div>
                    </div>
                    <div className="img-file">
                        <div className="del-icon">del</div>
                    </div>
                </div>
            </section>
            <footer>
                <a href="/add-property-cost" className="back">&lsaquo; Back</a>
                <button className="next">Submit</button>
            </footer>
        </div>
     );
}
 
export default PropertyConfirm;