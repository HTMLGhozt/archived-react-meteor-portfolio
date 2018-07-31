import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App';

if (!document.getElementById('render-target')) {
  const node = document.createElement('DIV');
  node.setAttribute('id', 'render-target');
  document.getElementsByTagName('body')[0].appendChild(node);
}

Meteor.startup(() => {
  ReactDOM.render(
    App(),
    document.getElementById('render-target'),
  );
});
