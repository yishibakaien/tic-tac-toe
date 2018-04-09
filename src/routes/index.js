// eslint-disable-next-line
import React from 'react';
import { browserHistory, Router } from 'react-router';

import Game from '../game/Game';
import ShopCart from '../shopCart/ShopCart';

const routes = [
  {
    path: '/',
    component: Game
  },
  {
    component: Game,
    path: '/game'
  },
  {
    component: ShopCart,
    path: '/shop'
  }
];

export default () => <Router history={browserHistory} routes={[...routes]} />;
