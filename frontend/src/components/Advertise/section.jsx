import './section.css'

const Section = () => {
    return ( 
        <section className="adv-main-section">
            <div className="intro-sub-section">
                <div className="left-card">
                    <p className="top">Advertise Your Property, Let us find clients for you</p>
                    <p className="bottom">We provide the widest audience in the property market today with 2000+ Rented homes</p>
                </div>
                <div className="right-card">div image</div>
            </div>
            <div className="faqs-sub-section">
                <div>
                    <div className="left-card"></div>
                    <div className="right-card">div image</div>
                </div>
                <p>We do our best to answer you questions. For enquiry email us at info@makao.com</p>
            </div>
            <div className="community-sub-section">
                <div className="left-car">
                    <p className="top">Get even better Responses from a satisfied Property owner</p>
                </div>
                <div className="right-car"><button>Search in community</button></div>
            </div>
        </section>
     );
}
 
export default Section;