import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import isEqual from 'lodash/isEqual';
import { arrayOf, shape, string } from 'prop-types';

import { Articles } from '../../api/articles';

class Blog extends React.Component {
  static propTypes = {
    articles: arrayOf(
      shape({
        title: string,
        content: string,
      }),
    ),
  }

  static defaultProps = {
    articles: [],
  }

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
    const { articles } = this.props;
    const { articles: stateArticles } = this.state;

    if (!isEqual(articles, stateArticles)) {
      this.setState({ articles });
    }
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

export default withTracker(() => {
  const blogHandle = Meteor.subscribe('articles');
  const loading = !blogHandle.ready();
  const list = Articles.find();
  const hasArticles = !loading && !!list;

  return {
    loading,
    hasArticles,
    list,
    articles: hasArticles ? list.fetch() : [],
  };
})(Blog);
