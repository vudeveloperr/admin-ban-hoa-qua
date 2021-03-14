import { combineReducers } from 'redux';
import account from './account'
import order from "./order"
import admin from "./admin"
import imports from "./import"
import vendors from "./vendor"
import category from './category';
import product from './product';

const allReducers = combineReducers({
  category,
  product,
  account,
  order,
  admin,
  imports,
  vendors
});

export default allReducers;