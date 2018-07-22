import React from 'react';
import { oneOf } from 'prop-types';

import styles from '../../styles/icons.css';

import github from '../../static/marks/github.svg';
import twitter from '../../static/marks/twitter.svg';
import linkedin from '../../static/marks/linkedin.svg';

const iconSetup = {
  GitHub: {
    img: {
      src: github,
      alt: 'GitHub',
    },
    link: {
      href: 'https://github.com/htmlghozt',
    },
  },
  Twitter: {
    img: {
      src: twitter,
      alt: 'Twitter',
    },
    link: {
      href: 'https://twitter.com/StudiosDillard',
    },
  },
  LinkedIn: {
    img: {
      src: linkedin,
      alt: 'LinkedIn',
    },
    link: {
      href: 'https://www.linkedin.com/in/thomasdillard/',
    },
  },
};

const Icon = ({ logo }) => {
  const { img, link } = iconSetup[logo];

  return (
    <div className={styles.icon}>
      <a {...link} target="_blank">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...img} className={styles.svg} />
      </a>
    </div>
  );
};

Icon.propTypes = {
  logo: oneOf(['GitHub', 'Twitter', 'LinkedIn']).isRequired,
};

export default Icon;
