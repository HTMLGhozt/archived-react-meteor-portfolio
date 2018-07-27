import React from 'react';
import { string } from 'prop-types';

const BlogExcerpt = ({ title, content }) => (
  <div>
    <h5>{ title }</h5>
    <div>{ content }</div>
  </div>
);

BlogExcerpt.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
};

export default BlogExcerpt;
