import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav id="nav-container" className={`color-${props.mode}===color-black?color-white:color-black bg-${props.mode}`}>
      <Link id="logo" to="/" >{props.logo}</Link>
      <nav id="navbar">
        <li className="item" id="item1"><Link className="nav-item" to="/">Home</Link></li>
        <li className="item" id="item2"><Link className="nav-item" to="/">Services</Link></li>
        <li className="item" id="item3"><Link className="nav-item" to="/">Contact Us</Link></li>
        <li className="item" id="item4"><Link className="nav-item" to="/about">About Us</Link></li>
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
