import './section.css'

const Section = () => {
    return ( 
        <section className="list-main-section">
            <div className="intro">
                <h4 className="top-title">Ready to Rent?</h4>
                <p className="top">Choose from a list of verified properties</p>
            </div>
            <div className='intro-subnav'>
                <nav className="left-subnav">
                    <ul className="subnav">
                        <li><a href="/about">Popular</a></li>
                        <li><a href="/advertise">Recommended</a></li>
                    </ul>
                </nav>
                <nav className="right-subnav">
                    <ul className="subnav">
                        <li><a href="/about">Anywhere</a></li>
                        <li><a href="/advertise">Add amenities</a></li>
                    </ul>
                </nav>
            </div>
        </section>
     );
}
 
export default Section;