import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PAGES = [
  { label: 'Groups', destination: '/Groups' },
  //{ label: 'SignUp', destination: '/SignUp' },
  { label: 'View All Users', destination: '/users' },
  { label: 'View All Restaurants', destination: '/restaurants' },
];

function NavLink({ page }) {
  const { label, destination } = page;
  return (
    <li>
      <Link to={destination}>{label}</Link>
    </li>
  );
}
NavLink.propTypes = {
  page: propTypes.shape({
    label: propTypes.string.isRequired,
    destination: propTypes.string.isRequired,
  }).isRequired,
};

function Navbar() {
  return (
    <nav>
      <ul className="wrapper">
        {PAGES.map((page) => <NavLink key={page.destination} page={page} />)}
      </ul>
    </nav>
  );
}

export default Navbar;
