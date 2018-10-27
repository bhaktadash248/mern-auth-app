import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SigninLinks extends Component {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
          <li><NavLink to="/">Logout</NavLink></li>
       </ul>
    )
  }
}

export default SigninLinks
