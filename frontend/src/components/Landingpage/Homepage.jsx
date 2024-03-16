import Header from './Header/header.jsx'
import Section from './Section/section.jsx'
import Footer from './Footer/footer.jsx'
import './Homepage.css'


function HomePage () {
	return (
		<>
		<div className="container full-height-grow">
			<Header/>
			<Section/>
			<Footer/>
		</div>
		</>
	)
};

export default HomePage

