import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import style from './styles/header.css';

const Home = () => <div>Home</div>;
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
        <header className={style.header}>
          <h1 className={style.title}>
            Thomas Dillard Portfolio
            <span className={style.subtitle}>A living experiment</span>
          </h1>
          <NavBar getPages={this.getPages} />
        </header>

        { pages.map(page => (
          <Route
            exact
            key={page.component.name}
            path={page.route}
            component={page.component}
          />
        )) }
      </div>
    );
  }
}

export default () => <Router><App /></Router>;
