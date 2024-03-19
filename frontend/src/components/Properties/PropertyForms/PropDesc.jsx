import "./styles/PropDesc.css"
import "./styles/PropClass.css"
import { useNavigate } from 'react-router-dom'

const PropertyDesc = ({ formData, onNext, onChange, onPrev }) => {

    const navigate = useNavigate()
    return ( 
        <div className="main">
            <header className="main-header-cr">
                    <div className="brand-logo brand-logo-name" onClick={() => navigate('/')}>Makao</div>
            </header>
            <section className="sec-cr">
                <p className="sect-title">We will help you set up your Property</p>
                <p className="info">Write up a short and catchy description</p>
                <textarea
                    name="description"
                    className="text-desc"
                    type="text"
                    value={formData.description}
                    onChange={onChange}
                    placeholder="Property Description"
                    rows={"10"} cols={30}
                />
            </section>
            <footer className="sub">
                <button onClick={onPrev} className="btn back">Back</button>
                <button onClick={onNext} className="btn next">Next</button>
            </footer>
        </div>
     );
}
 
export default PropertyDesc;