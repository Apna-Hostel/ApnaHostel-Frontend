import * as ActionTypes from "../actions/actionTypes";

export const Auth = (state = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errMessage: null,
    admin: false
}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds
            };
        case ActionTypes.LOGIN_FAILURE:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errMessage: action.message
            };
        case ActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: true,
                errMessage: '',
                token: action.token,
                admin: action.admin
            };
        case ActionTypes.LOGOUT_REQUEST:
            return{
                ...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: '',
                user: null,
                admin: false
            };
        default:
            return state;
    }
}
