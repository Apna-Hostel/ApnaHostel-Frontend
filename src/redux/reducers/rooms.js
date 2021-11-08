import * as ActionTypes from "../actions/actionTypes"

export const Rooms = (state = {
    isLoading: true,
    errMess: null,
    rooms: []
}, action) => {
    switch(action.type){
        case ActionTypes.ROOM_SUCCESS:
            return { 
                ...state, isLoading: false, errMess: null, rooms: action.payload };
        case ActionTypes.ROOM_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, rooms: [] };
        case ActionTypes.ROOM_LOADING:
            return { ...state, isLoading: true, errMess: [], rooms: []};
        case ActionTypes.ADD_ROOM:
            var room = action.payload;
            return { ...state, rooms: state.rooms.concat(room) };
        default:
            return state;
    }
}