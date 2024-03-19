
import Footer from '../Landingpage/Footer/footer';
import MobileMenu from '../Landingpage/Header/header';
import Section from './section'


const PropListings = () => {
    return ( 
        <>
            <MobileMenu property={true}/>
            <Section/>
            <Footer />
        </>
     );
}
 
export default PropListings;