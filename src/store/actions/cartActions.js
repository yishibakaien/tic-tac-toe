import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from '../actionTypes';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  };
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  };
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  };
}

export function asyncAddToCart(product, quantity, unitCost) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addToCart(product, quantity, unitCost));
    }, 1000);
  };
}
