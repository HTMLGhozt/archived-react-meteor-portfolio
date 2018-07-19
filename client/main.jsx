import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../imports/ui/App';

Meteor.startup(() => {
  ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('render-target'),
  );
});
