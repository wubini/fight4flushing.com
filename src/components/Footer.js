import React from 'react'
import { Link } from 'gatsby'

import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-12">
                <section className="menu">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/get-involved">
                    Get Involved
                  </Link>
                  <Link className="navbar-item" to="/press">
                    Press
                  </Link>
                </section>
                <div className="social">
                  <a title="twitter" href="https://twitter.com/Flushing_ADA">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
                <p>
                  The Flushing Anti-Displacement Alliance (FADA) is a volunteer group of workers and Flushing residents who reject the politicians & corporate interests displacing our neighbors and small businesses. <b>EMAIL US: <a href="mailto:flushingada@gmail.com">flushingada@gmail.com</a></b>.
                </p>
                <p>
                  © 2020 Flushing Anti-Displacement Alliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
