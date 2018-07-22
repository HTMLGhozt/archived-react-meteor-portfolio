import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';

const About = () => <div>About</div>;
const Blog = () => <div>Blog</div>;

class App extends React.Component {
  state = {
    pages: [
      { component: Home, title: 'Home', route: '/' },
      { component: About, title: 'About', route: '/about' },
      { component: Blog, title: 'Blog', route: '/blog' },
    ],
  }

  getPages = () => {
    const { pages } = this.state;
    return pages;
  }

  render() {
    const { pages } = this.state;
    return (
      <div>
        <Header getPages={this.getPages} />

        { pages.map(page => (
          <Route
            exact
            key={page.title}
            path={page.route}
            component={page.component}
          />
        )) }

        <Footer />
      </div>
    );
  }
}

export default () => <Router><App /></Router>;
