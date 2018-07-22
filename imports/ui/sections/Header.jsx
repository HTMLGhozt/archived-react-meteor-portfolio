import React from 'react';
import { func } from 'prop-types';

import NavBar from '../navigation/NavBar';

import styles from '../styles/header.css';

const Header = ({ getPages }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      Thomas Dillard Portfolio
      <span className={styles.subtitle}>A living experiment</span>
    </h1>
    <NavBar pages={getPages()} />
  </header>
);

Header.propTypes = {
  getPages: func.isRequired,
};

export default Header;
