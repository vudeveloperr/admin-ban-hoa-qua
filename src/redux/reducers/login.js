import { LOGOUT, SET_TOKEN } from '../actions/login/action_types';

export default (state = {
    token: "",
    login: false,
    role: [],
}, action) => {
    switch (action.type) {
        case LOGOUT: {
            return {
                ...state,
                token: null
            };
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.data
            }
        }
        default:
            return {
                ...state,
            };
    }
};