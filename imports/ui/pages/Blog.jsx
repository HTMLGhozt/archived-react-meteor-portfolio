import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import isEqual from 'lodash/isEqual';
import {
  arrayOf, shape, string, bool,
} from 'prop-types';

import { Articles } from '../../api/articles';

class Blog extends React.Component {
  static propTypes = {
    articles: arrayOf(
      shape({
        title: string,
        content: string,
      }),
    ).isRequired,
    loading: bool.isRequired,
    hasArticles: bool.isRequired,
  }

  state = {
    articles: [],
  }

  componentDidMount() {
    const { articles } = this.props;

    if (articles.length > 0) {
      this.setArticlesToState();
    }
  }

  componentDidUpdate() {
    this.setArticlesToState();
  }

  setArticlesToState = () => {
    const { articles } = this.props;
    const { articles: stateArticles } = this.state;

    if (!isEqual(articles, stateArticles)) {
      this.setState({ articles });
    }
  }

  getInnerContent = () => {
    const { articles } = this.state;
    const { loading, hasArticles } = this.props;

    if (loading) {
      return <span>your blog articles are loading!</span>;
    }
    if (hasArticles) {
      return articles.map(article => <div>{ article.title }</div>);
    }
    return <span>no articles were found in your query</span>;
  }

  render() {
    return <div>{ this.getInnerContent() }</div>;
  }
}

export default withRouter(withTracker(() => {
  const handle = Meteor.subscribe('articles');
  const loading = !handle.ready();
  const list = Articles.find();
  const hasArticles = !loading && !!list;

  return {
    loading,
    hasArticles,
    list,
    articles: hasArticles ? list.fetch() : [],
  };
})(Blog));
