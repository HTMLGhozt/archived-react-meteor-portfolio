import React from 'react';
import { func } from 'prop-types';

// import { bar } from './styles/navigation.css';
import NavItem from './NavItem';

export default class NavBar extends React.Component {
  static propTypes = {
    getPages: func.isRequired,
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
    const { getPages } = this.props;

    this.setState({
      pages: getPages() || [],
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
