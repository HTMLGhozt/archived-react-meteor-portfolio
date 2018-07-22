import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import NavItem from './NavItem';

import { navBar } from '../styles/navigation.css';

export default class NavBar extends React.Component {
  static propTypes = {
    pages: arrayOf(
      shape({
        route: string.isRequired,
        title: string.isRequired,
      }),
    ),
  }

  static defaultProps = {
    pages: [],
  }

  state = {
    pages: [],
  }

  componentDidMount() {
    const { pages } = this.state;

    if (!pages.length) {
      this.setPages();
    }
  }

  setPages = () => {
    const { pages } = this.props;

    this.setState({ pages });
  }

  render() {
    const { pages } = this.state;

    return (
      <nav className={navBar}>
        { pages.map(page => <NavItem key={page.title} {...page} />) }
      </nav>
    );
  }
}
