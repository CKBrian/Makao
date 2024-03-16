import './footer.css';
import '../Header/header.css';

import facebook from '../../../assets/Icons/facebook.svg'
import twitter from '../../../assets/Icons/twitter.svg'


function Footer () {

  return (
    <>
      <div className="main-footer">
        <div className="brand-logo-name">Makao</div>
        <div className="addresses ">
            <nav className="company-links">
              <p>Company</p>
              <ul >
                <li ><a href="" >About us</a></li>
                <li ><a href="" >Offerings</a></li>
                <li ><a href="" >Latest News</a></li>
                <li ><a href="" >Developers</a></li>
              </ul>
            </nav>
            <nav className="products-links">
            <p>Products</p>
            <ul >
                <li ><a href="" >Rent</a></li>
                <li ><a href="" >Advertise</a></li>
                <li ><a href="" >List home</a></li>
                <li ><a href="" >Buy Home</a></li>
                <li ><a href="" >Community</a></li>
              </ul>
            </nav>
            <nav className="contacts-links">
            <p>Contacts</p>
            <ul >
                <li ><a href="" >info@makao.com</a></li>
                <li ><a href="" >+254701234567</a></li>
              </ul>
            </nav>
            <nav className="sponsors-links">
            <p>Sponsors</p>
            <ul >
                <li ><a href="" >ALX Africa</a></li>
              </ul>
            </nav>
        </div>
      
        <nav className="footer-nav">
            <ul>
            <li>
                <a href="/" className="social-link">
                <img src={twitter}/>
                Twitter
                </a>
            </li>
            <li>
                <a href="/" className="social-link">
                <img src={facebook}/>
                Facebook
                </a>
            </li>
            </ul>
        </nav>
    
      </div>
    </>
  )
}

export default Footer


