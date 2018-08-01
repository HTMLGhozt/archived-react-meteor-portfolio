import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App';

/* if Meteor is unable to load main.html manually create `render-target` */
if (!document.getElementById('render-target')) {
  const node = document.createElement('div');
  const [body] = document.getElementsByTagName('body');
  node.setAttribute('id', 'render-target');
  body.insertBefore(node, body.children[0]);
}

Meteor.startup(() => {
  ReactDOM.render(
    App(),
    document.getElementById('render-target'),
  );
});
