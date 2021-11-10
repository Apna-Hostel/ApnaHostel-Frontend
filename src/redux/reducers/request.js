import * as ActionTypes from "../actions/actionTypes"

export const Requests = (state = {
    isLoading: true,
    errMess: null,
    requests: []
}, action) => {
    switch(action.type){
        case ActionTypes.REQUEST_SUCCESS:
            return { 
                ...state, isLoading: false, errMess: null, requests: action.payload };
        case ActionTypes.REQUEST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, requests: [] };
        case ActionTypes.REQUEST_LOADING:
            return { ...state, isLoading: true, errMess: [], requests: []};
        case ActionTypes.ADD_REQUEST:
            var request = action.payload;
            return { ...state, requests: state.requests.concat(request) };
        default:
            return state;
    }
}