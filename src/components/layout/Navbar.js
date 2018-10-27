import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">
                <img src="https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png" alt="Dispute Bills" width="150px;"/>
                </Link>
            </div>
            <div id="navbar2" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/message">Message</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/aboutus">About us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <SigninLinks/>
              <SignoutLinks/>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
