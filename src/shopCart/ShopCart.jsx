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
    // console.log(store.replaceReducer);
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  addToCart() {
    store.dispatch(addToCart('Coffee 500mg', 1, 111));
  }

  updateCart() {
    store.dispatch(updateCart('Coffee 500mg', 2, 222));
  }

  deleteFromCart() {
    store.dispatch(deleteFromCart('Coffee 500mg'));
  }

  asyncAddToCart() {
    store.dispatch(asyncAddToCart('Milk 300ml', 1, 100));
  }

  render() {
    console.log('initTial cart state', store.getState());

    return (
      <div className="shop-cart">
        <p>open console to see the change</p>
        <button onClick={() => this.addToCart()}>add Coffee to cart</button>
        <button onClick={() => this.updateCart()}>
          update new Coffee to cart
        </button>
        <button onClick={() => this.deleteFromCart()}>
          delete Coffee from cart
        </button>
        <button onClick={() => this.asyncAddToCart()}>
          async add Milk to cart
        </button>
      </div>
    );
  }
}
