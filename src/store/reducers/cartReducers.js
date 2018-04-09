import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART
} from '../actionTypes/index';

const initialState = {
  cart: [
    {
      name: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      name: 'milk 500ml',
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
          item => (item.name === action.payload.name ? action.payload : item)
        )
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== action.payload.name)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
