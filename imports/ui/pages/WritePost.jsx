import React from 'react';
import { string } from 'prop-types';

import { insert } from '../../api/articles';

export default class Blog extends React.Component {
  static propTypes = {
    title: string,
    content: string,
  }

  static defaultProps = {
    title: '',
    content: '',
  }

  state = {
    title: '',
    content: '',
    passedProps: false,
  }

  componentDidMount() {
    const { title, content } = this.props;
    const { passedProps } = this.state;

    if (!passedProps && (title || content)) {
      this.setPassedProps(title, content);
    }
  }

  setPassedProps = (title, content) => {
    this.setState({ title, content, passedProps: true });
  }

  handleEdit = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;

    console.info('pre sent', title, content);

    insert.call({ title, content }, (error, response) => {
      if (error) {
        console.error(error, error.error, error.message);
      }

      console.info(response);
      this.setState({ title: '', content: '' });
    });
  }

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value={title} onChange={this.handleEdit} />
        </label>
        <label htmlFor="content">
          Content:
          <textarea type="text" name="content" value={content} onChange={this.handleEdit} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}
