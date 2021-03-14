import {
  CREATE_PRODUCT_SUCCEED, FETCH_PRODUCTS_SUCCEED, UPDATE_PRODUCT_SUCCEED
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
    case CREATE_PRODUCT_SUCCEED:{
      return  {
          ...state,
          product: action.data.data,
      }
    }
    case UPDATE_PRODUCT_SUCCEED:{
      return  {
        ...state,
        product: action.data.data,
      }
    }
    default:
      return {
        ...state,
      };
  }
};