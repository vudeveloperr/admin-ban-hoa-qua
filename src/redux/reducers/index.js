import { combineReducers } from 'redux';
import category from './category'
import product from "./product"
import account from './account'
import order from "./order"

const allReducers = combineReducers({
  category,
  product,
  account,
  order
});

export default allReducers;