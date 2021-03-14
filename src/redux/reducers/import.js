import {
    ADDITION_QUANTITY_SUCCEED,
    FETCH_LIST_IMPORT_SUCCEED
} from '../actions/import';


export default (
  state = {
    product:[],
  },
  action,
) => {
  switch (action.type) {
    case ADDITION_QUANTITY_SUCCEED:{
        return  {
            ...state,
            product: action.data.data,
        }
    }
    case FETCH_LIST_IMPORT_SUCCEED:{
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
