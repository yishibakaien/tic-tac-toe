/* eslint-disable-next-line */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from 'react-router-dom';

import Game from '../game/Game';
import ShopCart from '../shopCart/ShopCart';

const routes = (
  <Router>
    <Switch>
      {/* <Route path="/" component={Game} /> */}
      <Route path="/game" component={Game} />
      <Route path="/shop" component={ShopCart} />
    </Switch>
  </Router>
);

export default routes;
