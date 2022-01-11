import { NavLink } from 'react-router-dom';

const ErrorPage = () => (
  <h2 className="error-message">
    No page match for this url. Do you want to return to the
    {' '}
    <NavLink
      className="navbar-item"
      activeClassName="active"
      to="/"
      exact
    >
      {' '}
      home page?
      {' '}

    </NavLink>

  </h2>
);

export default ErrorPage;
