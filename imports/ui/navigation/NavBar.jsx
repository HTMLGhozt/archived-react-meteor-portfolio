import React from 'react';
import { func } from 'prop-types';

import NavItem from './NavItem';

export default class NavBar extends React.Component {
  static propTypes = {
    getPages: func,
  }

  static defaultProps = {
    getPages: () => [],
  }

  state = {
    pages: [],
  };

  componentDidMount() {
    const { pages } = this.state;

    if (!pages.length) {
      this.setPages();
    }
  }

  setPages = () => {
    const { getPages } = this.props;

    this.setState({
      pages: getPages(),
    });
  }

  render() {
    const { pages } = this.state;
    return (
      <nav>
        { pages.map(page => <NavItem key={page.title} {...page} />) }
      </nav>
    );
  }
}
