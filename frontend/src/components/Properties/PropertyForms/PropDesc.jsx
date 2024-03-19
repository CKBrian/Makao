import "./styles/PropDesc.css"
import "./styles/PropClass.css"

const PropertyDesc = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Write up a short and catchy description</p>
                <textarea className="text-desc" type="text" placeholder="Property Description" rows={"10"} cols={30}></textarea>
            </section>
            <footer>
                <a href="/add-property-images" className="back">&lsaquo; Back</a>
                <a href="/add-property-cost" className="next">Next &rsaquo;</a>
            </footer>
        </div>
     );
}
 
export default PropertyDesc;