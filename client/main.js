import './main.html';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App';

Meteor.startup(() => {
  ReactDOM.render(
    App(),
    document.getElementById('render-target'),
  );
});
