// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const jsxElement = (
    <nav className="nav-bg-container">
      <div className="wave-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <h1 className="blogs-style">Wave</h1>
      </div>
      <ul className="blogs-container">
        <Link to="/">
          <li className="blogs-style">Home</li>
        </Link>
        <Link to="/about">
          <li className="blogs-style">About</li>
        </Link>
        <Link to="/contact">
          <li className="blogs-style">Contact</li>
        </Link>
      </ul>
    </nav>
  )
  return jsxElement
}
export default Header
