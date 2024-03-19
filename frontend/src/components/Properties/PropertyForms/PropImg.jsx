import "./styles/PropClass.css"
import "./styles/PropImg.css"


const PropertyImages = () => {
    return ( 
        <div className="main">
            <header className="main-header">
                <a href="/" className="brand-logo">
                    <div className="brand-logo-name">Makao</div>
                </a>
            </header>
            <section>
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Add some images</p>
                
                <div id="drop-area" className="drop-area">
                    <input type="file" id="fileInput" accept="image/*" />
                    <p>drag and drop an image here or</p>
                    <label htmlFor="fileInput">Browse</label>
                </div>

            </section>
            <footer>
                <a href="/add-property-location" className="back">&lsaquo; Back</a>
                <a href="/add-property-desc" className="next">Next &rsaquo;</a>
            </footer>
        </div>
     );
}
 
export default PropertyImages;