/* eslint-disable-next-line */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from 'react-router-dom';

import Game from '../game/Game';

const routes = (
  <Router>
    <Switch>
      <Route path="/" component={Game} />
    </Switch>
  </Router>
);

export default routes;
