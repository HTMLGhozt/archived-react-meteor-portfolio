import React from 'react';

export default class Portfolio extends React.Component {
  state = {
    projects: [],
  }

  render() {
    const { projects } = this.state;
    return (
      <React.Fragment>
        <h1>Projects</h1>
        { projects && projects.map(project => <div>{ project.name }</div>) }
      </React.Fragment>
    );
  }
}
