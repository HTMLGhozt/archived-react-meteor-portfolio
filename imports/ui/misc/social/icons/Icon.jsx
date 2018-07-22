import React from 'react';
import { oneOf } from 'prop-types';

import styles from '../../../styles/icons.css';

import github from '../../../assets/github.svg';
import twitter from '../../../assets/twitter.svg';
import linkedin from '../../../assets/linkedin.svg';

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
      alt: 'linkedin',
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
