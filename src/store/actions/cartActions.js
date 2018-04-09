import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART
} from '../actionTypes/index';

import { addProduct } from '../../api/index';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

// 更新购物车
export function updateCart(product) {
  return {
    type: UPDATE_CART,
    payload: product
  };
}

/**
 * 删除购物车中的某一项
 * @param {name} string
 */
export function deleteFromCart(name) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      name
    }
  };
}
// 异步方法测试
export function asyncAddToCart(product) {
  return dispatch => {
    addProduct(product)
      .then(res => {
        dispatch(addToCart(product));
      })
      .catch(err => console.log(err));
  };
}
