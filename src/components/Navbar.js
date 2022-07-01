import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
      <div id="nav-container">
        <a href="/" id="logo">{props.logo}</a>
        <nav id="navbar">
          <li className="item" id="item1"><a href="/" className='nav-item'>Home</a></li>
          <li className="item" id="item2"><a href="/" className='nav-item'>Services</a></li>
          <li className="item" id="item3"><a href="/" className='nav-item'>Contact Us</a></li>
          <li className="item" id="item4"><a href="/" className='nav-item'>About Us</a></li>
        </nav>
      </div>
    </>
  )
}
Navbar.propTypes = { logo: PropTypes.string.isRequired, 
  siteTitle: PropTypes.string }

  // Navbar.propTypes = { logo: PropTypes.string, 
  // siteTitle: PropTypes.string }

  Navbar.defaultProps={ logo: "siteLogo", 
  siteTitle: "site Title" }
