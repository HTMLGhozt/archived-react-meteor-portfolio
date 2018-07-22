import React from 'react';
import { string } from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from '../styles/navigation.css';


const NavItem = ({ route, title }) => (
  <NavLink
    exact
    className={styles.navItem}
    activeClassName={styles.navItemActive}
    to={route}
  >
    { title }
  </NavLink>
);

NavItem.propTypes = {
  route: string,
  title: string,
};

NavItem.defaultProps = {
  route: '/',
  title: 'Home',
};

export default NavItem;
