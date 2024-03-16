import './header.css';

function Header () {

  return (
    <>
      <div className="main-header">
        <a href="/" className="brand-logo">
          <div className="brand-logo-name">Makao</div>
        </a>
        <nav className="main-nav">
          <ul >
            <li ><a href="" >About</a></li>
            <li ><a href="" >Rent</a></li>
            <li ><a href="" >Community</a></li>
            <li ><a href="" >Advertise</a></li>
          </ul>
        </nav>
        <nav className="login-nav">
          <ul >
            <li ><a href="" >Login</a></li>
            <li >
              <a href="" >
              <button className="btn">Sign up</button>
              </a>
            </li>
          </ul >
        </nav>
      </div>
    </>
  )
}

export default Header

