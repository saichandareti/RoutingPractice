import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="wave-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wave-image"
          />
          <h1 className="wave-heading">Wave</h1>
        </div>
        <ul className="headers-con">
          <li className="list-item">
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about" className="home">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link to="/contact" className="home">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
