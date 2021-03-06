import {
    FETCH_PRODUCTS_SUCCEED
} from '../actions/product';


export default (
  state = {
    product:[],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCEED:{
      return  {
          ...state,
          product: action.data.data,
          total_count: action.data.total_count,
      }
    }
    default:
      return {
        ...state,
      };
  }
};