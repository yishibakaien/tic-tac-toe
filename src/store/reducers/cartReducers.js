import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART
} from '../actionTypes/index';

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
};

const cartReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case UPDATE_CART: {
      return {
        ...state,
        // product 相同则替换掉这个 product
        cart: state.cart.map(
          item =>
            item.product === action.payload.product ? action.payload : item
        )
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
