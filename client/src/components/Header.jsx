/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        <nav className="teal">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">Emaily</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="http://localhost:5000/auth/google">Sign in with google</a></li>
              <li><a href="http://localhost:5000/api/current_user">Current User</a></li>
              <li><a href="http://localhost:5000/api/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
