import * as ActionTypes from '../actions/actionTypes'

export const Hostels = (state = {
    isLoading: true,
    errMess: null,
    hostels: []
}, action) => {
    switch (action.type) {
        case ActionTypes.HOSTEL_SUCCESS:
            return { ...state, isLoading: false, errMess: null, hostels: action.payload };

        case ActionTypes.HOSTEL_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, hostels: [] };

        case ActionTypes.HOSTEL_LOADING:
            return { ...state, isLoading: true, errMess: [], hostels: [] };

        case ActionTypes.ADD_HOSTEL:
            var hostel = action.payload;
            return { ...state, hostels: state.hostels.concat(hostel) };

        default:
            return state;
    }
}