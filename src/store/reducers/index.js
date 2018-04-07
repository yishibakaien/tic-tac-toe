import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducers';

const allReducer = {
  products: productsReducer,
  shoppingCart: cartReducer
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
