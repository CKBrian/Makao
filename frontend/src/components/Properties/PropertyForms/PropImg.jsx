import "./styles/PropClass.css"
import "./styles/PropImg.css"
import { useNavigate } from 'react-router-dom'


const PropertyImages = ({ formData, onNext, onChange, onPrev }) => {

    const navigate = useNavigate()
    return ( 
        <div className="main">
            <header className="main-header-cr">
                    <div className="brand-logo brand-logo-name" onClick={() => navigate('/')}>Makao</div>
            </header>
            <section className="sec-cr">
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Add an image</p>
                
                <div id="drop-area" className="drop-area">
                    <input name="image" type="file" id="fileInput" accept="image/*" value={formData.image} onChange={onChange}/>
                    <p>drag and drop an image here or</p>
                    <label htmlFor="fileInput">Browse</label>
                </div>

            </section>
            <footer className="sub">
                <button onClick={onPrev} className="btn back">Back</button>
                <button onClick={onNext} className="btn next">Next</button>
            </footer>
        </div>
     );
}
 
export default PropertyImages;