import React from 'react';
import store from '../store';

import {
  addToCart,
  updateCart,
  deleteFromCart,
  asyncAddToCart
} from '../store/actions/cartActions';
import './index.css';

export default class ShopCart extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  addToCart() {
    store.dispatch(addToCart('Coffee 500mg', 1, 250));
  }

  updateCart() {
    store.dispatch(updateCart('Flour 1kg', 5, 110));
  }

  deleteFromCart() {
    store.dispatch(deleteFromCart('Coffee 500mg'));
  }

  asyncAddToCart() {
    store.dispatch(asyncAddToCart('Milk 300ml', 1, 100));
  }

  render() {
    console.log('initTial state', store.getState());

    return (
      <div className="shop-cart">
        <button onClick={() => this.addToCart()}>add to Coffee to cart</button>
        <button onClick={() => this.updateCart()}>update cart</button>
        <button onClick={() => this.deleteFromCart()}>
          delete Coffee from cart
        </button>
        <button onClick={() => this.asyncAddToCart()}>
          async add Coffee to cart
        </button>
      </div>
    );
  }
}
