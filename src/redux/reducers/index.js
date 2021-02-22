import { combineReducers } from 'redux';
import category from './category'
import product from "./product"

const allReducers = combineReducers({
  category,
  product
});

export default allReducers;