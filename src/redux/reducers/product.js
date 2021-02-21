import {
    FETCH_PRODUCT_SUCCEED,
} from '../actions/product';


export default (
  state = {
    product:[],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCEED:{
        return  {
            ...state,
            product: action.data,
        }
    }
    default:
      return {
        ...state,
      };
  }
};