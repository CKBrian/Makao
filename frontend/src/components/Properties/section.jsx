import './section.css'

const Section = () => {
    return ( 
        <section className="list-main-section">
            <div className="intro-sub-section">
                <p className="top">Ready to Rent?</p>
                <p className="top">Choose from a list of verified properties</p>
            </div>
            <div>
                <nav className="left-nav">
                    <ul className="mobile-nav">
                    <li><a href="/about">Popular</a></li>
                    <li><a href="/advertise">Recommended</a></li>
                    </ul>
                </nav>
                <nav className="right-nav">
                    <li><a href="/about">Anywhere</a></li>
                    <li><a href="/advertise">Add amenities</a></li>
                </nav>
            </div>
        </section>
     );
}
 
export default Section;