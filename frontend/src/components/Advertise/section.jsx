import './section.css'

const Section = () => {
    return ( 
        <section className="adv-main-section">
            <div className="intro-sub-section">
                <div className="left-card">
                    <h1 className="top">Advertise Your Property, Let us find clients for you</h1>
                    <p className="bottom">We provide the widest audience in the property market today with 2000+ Rented homes</p>
                </div>
                <div className="right-card">div image</div>
            </div>
            <div className="faqs-sub-section">
                <div className="faqs-card" >
                    <p className="left-card">FAQ'S</p>
                    <div className="right-card">
                    <select name="faqs" id="faqs">
                        <option value="property-right">Is my Property right for Makao?</option>
                    </select>
                    <select name="req-faqs" id="req-faqs">
                        <option value="property-approval">What is required for property approval</option>
                    </select>
                    <select name="fees-faqs" id="fees-faqs">
                        <option value="makao-fees">What are Makao’s fees</option>
                    </select>

                    </div>
                </div>
                <p className="bottom">We do our best to answer you questions. For enquiry email us at info@makao.com</p>
            </div>
            <div className="community-sub-section">
                <p className="left-card">Get even better Responses from a satisfied Property owner</p>
                <button >Search in community</button>
            </div>
        </section>
     );
}

export default Section;