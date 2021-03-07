import { combineReducers } from 'redux';
import category from './category'
import product from "./product"
import account from './account'

const allReducers = combineReducers({
  category,
  product,
  account,
});

export default allReducers;