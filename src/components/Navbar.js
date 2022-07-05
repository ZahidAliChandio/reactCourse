import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav id="nav-container" className={`color-${props.mode}==='color-black'?'color-white':'color-black' bg-${props.mode}`}>
      <a href="/" id="logo">{props.logo}</a>
      <nav id="navbar">
        <li className="item" id="item1"><a href="/" className='nav-item'>Home</a></li>
        <li className="item" id="item2"><a href="/" className='nav-item'>Services</a></li>
        <li className="item" id="item3"><a href="/" className='nav-item'>Contact Us</a></li>
        <li className="item" id="item4"><a href="/" className='nav-item'>About Us</a></li>
      </nav>
      <div id="mode-container" className='right-align disp-flex'>
        <input type="checkbox" name="mode-selector" id="mode-selector" onClick={props.toggleMode} />
        <label htmlFor="mode-selector">Change Mode</label>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  siteTitle: PropTypes.string
}

// Navbar.propTypes = { logo: PropTypes.string, 
// siteTitle: PropTypes.string }

Navbar.defaultProps = {
  logo: "siteLogo",
  siteTitle: "site Title"
}
