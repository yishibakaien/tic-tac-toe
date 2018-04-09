import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART
} from '../actionTypes/index';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  };
}

// 更新购物车
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
// 异步方法
export function asyncAddToCart(product, quantity, unitCost) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addToCart(product, quantity, unitCost));
    }, 1000);
  };
}
