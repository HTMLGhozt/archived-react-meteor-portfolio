import React from 'react';

import { contact } from '../styles/contact.css';

export default () => (
  <address className={contact}>
    <h3>Thomas Dillard</h3>
    <span>Tempe, Arizona</span>
    <span>email:&nbsp;
      <a
        href="mailto:thomas.dillard.studios@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        thomas.dillard.studios@gmail.com
      </a>
    </span>
    <span>phone:&nbsp;
      <a href="tel:+15203667175">(520) 366-7175</a>
    </span>
  </address>
);
