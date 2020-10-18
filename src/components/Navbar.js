import React from 'react'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      scrolled: false
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
              navBarActiveClass: '',
            })
      }
    )
  }

  maybeUpdateNavbar = () => {
    const scrolled = !!window.scrollY
    if(this.state.scrolled !== scrolled){
      this.setState(() => ({ scrolled }))
    }
  }

  debouncedMaybeUpdateNavbar = () => {
    return debounce(this.maybeUpdateNavbar, 100)()
  }

  componentDidMount(){
    document.addEventListener('scroll', this.debouncedMaybeUpdateNavbar)
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.debouncedMaybeUpdateNavbar)
  }

  render() {
    return (
      <nav
        ref="nav"
        className={`navbar ${this.state.scrolled ? 'navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              Flushing Anti-Displacement Alliance
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
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
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/get-involved">
                Our Work
              </Link>
              <Link className="navbar-item" to="/blog">
                Press
              </Link>
              <Link className="navbar-item" to="/contact">
                About Us
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Get Involved
              </Link> */}
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/press">
                Press
              </Link>
              <Link className="navbar-item" to="https://act.fight4flushing.com">
                Sign Our Petition
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
