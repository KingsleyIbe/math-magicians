import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h3>Math Magician</h3>
    </div>
    <nav>
      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/"
        exact
      >
        {' '}
        Home
        {' '}

      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/calculator"
        exact
      >
        {' '}
        Calculator
        {' '}

      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/quote"
        exact
      >
        {' '}
        Quote
        {' '}

      </NavLink>
    </nav>
  </header>
);

export default Header;
