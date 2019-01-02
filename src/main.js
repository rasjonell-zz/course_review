import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';

export default props => (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
);