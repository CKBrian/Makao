import './section.css';
import searchIcon from '../../../assets/Icons/search.svg';


function Section () {

	return (
		<>
            <section className="home-main-section">
			<div className="img-wrapper">
                    <div className="property-image"></div>
                </div>
                <div className="call-to-action">
                    <span className="title">Looking For a House?</span>
                </div>
				<div className="search-bar subtitle">
					<form>
					<img src={searchIcon} alt="Search Icon" />
					<input
						type='text'
						placeholder='Search Properties by Name, Location...'
					/>
					</form>
				</div>
            </section>
		</>
	)
}

export default Section

