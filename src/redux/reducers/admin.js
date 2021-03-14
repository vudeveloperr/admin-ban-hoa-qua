import {FETCH_ADMIN_SUCCEED} from '../actions/admin';

export default (
    state = {
      users: "",
    },
    action,
  ) => {
    switch (action.type) {
      case FETCH_ADMIN_SUCCEED:{
          return  {
              ...state,
              users: action.data,
          }
      }
      default:
        return {
          ...state,
        };
    }
  };