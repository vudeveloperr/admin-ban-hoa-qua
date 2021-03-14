import { combineReducers } from 'redux';
import category from './category'
import product from "./product"
import account from './account'
import order from "./order"
import admin from "./admin"
import imports from "./import"
import vendors from "./vendor"

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