/* eslint-disable-next-line */
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/';

// import Game from './Game';
import store from './store';

import {
  addToCart,
  updateCart,
  deleteFromCart
} from './store/actions/cart-actions';

console.log('initTial state', store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addToCart('Coffee 500mg', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

store.dispatch(updateCart('Flour 1kg', 5, 110));
store.dispatch(deleteFromCart('Coffee 500mg'));

unsubscribe();
// console.log(createStore);

ReactDOM.render(routes, document.getElementById('root'));
