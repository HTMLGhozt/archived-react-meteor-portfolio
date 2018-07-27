import React from 'react';
import { string } from 'prop-types';

const createMarkup = content => ({
  _html: encodeURI(content.slice(0, 40)),
});

const BlogExcerpt = ({ title, content }) => (
  <div>
    <header>
      <h5>{ title }</h5>
    </header>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={createMarkup(content)} />
  </div>
);

BlogExcerpt.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
};

export default BlogExcerpt;
