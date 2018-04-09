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
      // console.log(store.getState());
      const cart = store.getState().shoppingCart.cart;
      console.log('cart', cart);
    });
  }

  addToCart() {
    store.dispatch(
      addToCart({
        name: 'Coffee 500mg',
        quantity: 1,
        unitCost: 111
      })
    );
  }

  updateCart() {
    store.dispatch(
      updateCart({
        name: 'Coffee 500mg',
        quantity: 2,
        unitCost: 222
      })
    );
  }

  deleteFromCart() {
    store.dispatch(deleteFromCart('Coffee 500mg'));
  }

  asyncAddToCart() {
    store.dispatch(
      asyncAddToCart({
        name: 'Milk 300ml',
        quantity: 1,
        unitCost: 100
      })
    );
  }

  render() {
    console.log(
      'initTial state.shopping.cart',
      store.getState().shoppingCart.cart
    );

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
