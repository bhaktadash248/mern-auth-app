import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SignoutLinks extends Component {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink to="/signin">Sign in</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </ul>
    )
  }
}

export default SignoutLinks
