import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducers';

const allReducer = {
  products: productsReducer,
  shoppingCart: cartReducer
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
