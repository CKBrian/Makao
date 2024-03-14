import './section.css';

function Section () {

	return (
		<>
            <section className="home-main-section">
			{/*<div className="img-wrapper">
                    <div className="property-image"></div>
                </div>*/}
                <div className="call-to-action">
                    <span className="title">Looking For a House?</span>
                </div>
				<div className="search-bar subtitle">
					<form>
					<button></button>
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

