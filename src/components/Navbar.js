import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav id="nav-container" className={"color-light "+(props.mode==="dark"?"bg-dark ":"bg-blue ")}>
      <a id="logo" href="#" >{props.logo}</a>
      <nav id="navbar">
        <li className="item" id="item1"><a className="nav-item active" href="#">Home</a></li>
        <li className="item" id="item2"><a className="nav-item nav-item-color" href="#">Services</a></li>
        <li className="item" id="item3"><a className="nav-item nav-item-color" href="#">Contact Us</a></li>
        <li className="item" id="item4"><a className="nav-item nav-item-color" href="#">About Us</a></li>
      </nav>
      <div id="mode-container" className='right-align disp-flex'>
        <input type="checkbox" name="mode-selector" id="mode-selector" onClick={props.toggleMode} />
        <label htmlFor="mode-selector" className='text-light'>Change Mode</label>
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
