import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import NavItem from './NavItem';

import { navBar } from '../styles/navigation.css';

const NavBar = ({ pages }) => (
  <nav className={navBar}>
    { pages.map(page => <NavItem key={page.title} {...page} />) }
  </nav>
);

NavBar.propTypes = {
  pages: arrayOf(
    shape({
      route: string.isRequired,
      title: string.isRequired,
    }),
  ),
};

NavBar.defaultProps = {
  pages: [],
};

export default NavBar;
