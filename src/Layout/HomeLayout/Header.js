import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../images/Logo.png"
function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  },[]);


  const isSticky = (e) => {
    const header = document.querySelector('.custom-header');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };


  return (
    <nav className="navbar header-nav custom-header navbar-expand-lg" style={{backgroundColor:"rgb(110 38 250)"}} >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img src={Logo} title="" alt="" className='img-fluid' />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        {/* / */}
        {/* Top Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          {/* <ul className="navbar-nav mr-auto">
            <li>
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="about.html">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="feature.html">
                Feature
              </a>
            </li>
            <li>
              <a className="nav-link" href="price.html">
                Price
              </a>
            </li>
            <li>
              <a className="nav-link" href="contatus.html">
                Contact Us
              </a>
            </li>
          </ul> */}
          <ul className="navbar-nav navbar-nav-right ml-auto">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        {/* / */}
      </div>
      {/* Container */}
    </nav>



  )
}

export default Header