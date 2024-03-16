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
		    <a href="/" className="btn">
              <img src={icon} alt="Search Icon"  />
            </a>

            <input
              type='text'
              placeholder='Search properties by name, location...'
            />
          </form>
        </div>
      </section>
      <section className="home-sub-section">
	    <div className="row" id="sub-section-1">
			<div className="card title">
			  <p>Join Makao Community and Find your dream Home</p>
			  <button className="btn">Get started</button>
			</div>
			<div className="card subtitle">cardImage</div>
		</div>
	    <div className="row" id="sub-section-2">
			<div className="card title">
			  <p className="subtitle">Why choose us?</p>
			  <div className="cardIcons">
			  	<div id="checkIcon">
			  		<p>Trusted Residence owners that have verified properties</p>
				</div>
			  	<div id="homeIcon">
			  		<p>Choose from what you love from apartments to single homes</p>
				</div>
			  </div>
			  <div className="cardIcons">
			  	<div id="circleIcon">
			  		<p>We offer recommendations tailored for you</p>
				</div>
			  	<div id="tilesIcon">
			  		<p>No other service in Kenya offers the level of quality we do</p>
				</div>
			  </div>
			</div>
			<div className="card subtitle">cardImage</div>
		</div>
	    <div className="row" id="sub-section-3">
			<div className="card subtitle">cardImage</div>
			<div className="card title">
			  <p>Showcase Your Property to a wide audience and get tenants effortlessly</p>
			  <button className="btn">Advertise</button>
			</div>
		</div>
	    <div className="row" id="sub-section-4">
			<div className="card title">
			  <p>Get to Rent from verified and trusted Residence owners</p>
			  <button className="btn">Rent</button>
			</div>
			<div className="card subtitle">cardImage</div>
		</div>
	    <div className="row" id="sub-section-5">
			<div className="card subtitle">Card Image</div>
			<div className="card title">
			  <p>Choose from apartments to single Homes all in one place</p>
			  <button className="btn">Start Journey</button>
			</div>
		</div>
      </section>
    </>
  )
}

export default Section

