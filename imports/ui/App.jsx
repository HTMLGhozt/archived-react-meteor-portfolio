import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

class App extends React.Component {
  state = {
    pages: [
      { component: Home, title: 'Home', route: '/' },
      { component: Portfolio, title: 'Portfolio', route: '/portfolio' },
    ],
    backgroundColor: '#ffffff',
  }

  getPages = () => {
    const { pages } = this.state;
    return pages;
  }

  setBackgroundColor = (backgroundColor) => {
    this.setState({ backgroundColor });
  }

  render() {
    const { pages, backgroundColor } = this.state;
    return (
      <div style={{ backgroundColor }}>
        <Header getPages={this.getPages} />

        { pages && pages.map(page => (
          <Route
            exact
            key={page.title}
            path={page.route}
            render={props => (
              <page.component {...{ ...props, setBackgroundColor: this.setBackgroundColor, backgroundColor }} />
            )}
          />
        )) }

        <Footer />
      </div>
    );
  }
}

export default () => <Router><App /></Router>;
