import React from 'react';

export default class Blog extends React.Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    const { articles } = this.state;
    if (!articles.length) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const articles = [{
      title: 'Example Title',
      content: 'Example Content',
    }];

    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        { articles.map(article => <div>{article.title}</div>) }
      </div>
    );
  }
}
