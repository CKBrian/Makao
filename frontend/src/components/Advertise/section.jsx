import './section.css'
import Advert from  '../../assets/Icons/advertise.svg'

const Section = () => {
    return ( 
        <section className="adv-main-section">
            <div className="intro-section">
                <div className="left-card">
                    <span className="top">Advertise Your Property, Let us find clients for you</span>
                    <p className="bottom">We provide the widest audience in the property market today with 2000+ Rented homes</p>
                </div>
                <div className="right-card">
                    <img src={Advert} alt='advert image' />
                </div>
            </div>
            <div className="faqs-sub-section">
                <div className="faqs-card" >
                    <p className="left-card">FAQ'S</p>
                    <div className="right-card">
                        <p value="property-right">Is my Property right for Makao?</p>
                        <p value="property-approval">What is required for property approval</p>
                        <p value="makao-fees">What are Makao’s fees</p>
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