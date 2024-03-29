import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: 'navbar-cen',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: 'navbar-cen',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo" style={{
                position: "absolute",
                top: "6px"
              }}>
              <div style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '40px',
                width: '40px'
              }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{
                position: "absolute",
                right: "0px"
              }}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className={`has-text-centered ${this.state.navBarActiveClass}`}>
              <Link activeStyle={{ color: 'rgba(111,137,228,1)' }} className="navbar-item" to="/community">
                Community
              </Link>
              <Link activeStyle={{ color: 'rgba(111,137,228,1)' }} className="navbar-item" to="/events">
                Events
              </Link>
              <Link activeStyle={{ color: 'rgba(111,137,228,1)' }} className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link activeStyle={{ color: 'rgba(111,137,228,1)' }} className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
