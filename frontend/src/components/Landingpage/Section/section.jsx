import './section.css';


function Section () {

	const icon = "https://icons.getbootstrap.com/assets/icons/search.svg"

	return (
		<>
            <section className="home-main-section">
                <div className="call-to-action">
                    <span className="title">Looking For a House?</span>
                </div>
				<div className="search-bar subtitle">
					<form>
					<img src={icon} alt="Search Icon" className="btn" />
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

