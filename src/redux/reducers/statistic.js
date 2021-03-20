import {
    FETCH_TOP_SALE_SUCCEED,
    FETCH_TOTAL_ACC_SUCCEED,
    FETCH_TOTAL_ORDER_SUCCEED,
    FETCH_TOTAL_REVENU_SUCCEED
  } from '../actions/statistic';
  
  
  export default (
    state = {
      topsale:[],
      totalacc: [],
      totalorder: [],
      totalrevenu: []
    },
    action,
  ) => {
    switch (action.type) {
      case FETCH_TOP_SALE_SUCCEED:{
        return  {
            ...state,
            topsale: action.data.data,
        }
      }
      case FETCH_TOTAL_ACC_SUCCEED:{
        return  {
            ...state,
            totalacc: action.data.data,
        }
      }
      case FETCH_TOTAL_ORDER_SUCCEED:{
        return  {
            ...state,
            totalorder: action.data.data,
        }
      }
      case FETCH_TOTAL_REVENU_SUCCEED:{
        return  {
            ...state,
            totalrevenu: action.data.data,
        }
      }
      default:
        return {
          ...state,
        };
    }
  };