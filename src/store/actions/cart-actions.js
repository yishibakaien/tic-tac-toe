export const ADD_TO_CART = 'ADD_TO_CART'; // 从购物车中删除商品

export const UPDATE_CART = 'UPDATE_CART'; // 更新购物车
export const DELETE_FROM_CART = 'DELETE_FROM_CART'; // 从购物车中删除商品

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
