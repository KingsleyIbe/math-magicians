import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header-elem">
    <div className="header-h1">
      <h1>Math Magicians</h1>
    </div>
    <nav className="navLinks">
      <NavLink
        className="navbar-item"
        activeClassName="active"
        to="/"
        exact
      >
        {' '}
        Home
        {' '}

      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="active"
        to="/calculator"
        exact
      >
        {' '}
        | Calculator
        {' '}

      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="active"
        to="/quote"
        exact
      >
        {' '}
        | Quote
        {' '}

      </NavLink>
    </nav>
  </header>
);

export default Header;
