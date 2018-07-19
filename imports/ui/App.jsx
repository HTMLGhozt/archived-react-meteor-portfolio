import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Blog = () => <div>Blog</div>;

export default () => (
  <div>
    <header>
      <h1>
        Thomas Dillard Portfolio
        <span>A living experiment</span>
      </h1>
    </header>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blog" component={Blog} />
  </div>
);
