import { combineReducers } from 'redux';
import category from './category';
import product from './product';
import account from './account';
import admin from './admin';

const allReducers = combineReducers({
  category,
  product,
  account,
  admin,
});

export default allReducers;