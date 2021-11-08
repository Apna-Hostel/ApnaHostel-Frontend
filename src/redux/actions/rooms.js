import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'

export const roomsLoading = () => ({
    type: ActionTypes.ROOM_LOADING
});

export const roomsFailed = (errmess) => ({
    type: ActionTypes.ROOM_FAILED,
    payload: errmess
});

export const roomsSuccess = (rooms) => ({
    type: ActionTypes.ROOM_SUCCESS,
    payload: rooms
});

export const addRoom = (room) => ({
    type: ActionTypes.ADD_NOTICE,
    payload: room
});

export const postRoom = (room) => (dispatch) => {

    const newRoom = {
        roomNo: room.roomNo,
        capacity: room.capacity
    }
    console.log('Room: ', newRoom);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'rooms', {
        method: 'POST',
        body: JSON.stringify(newRoom),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("Room added Successfully!!"); dispatch(addRoom(response)); dispatch(fetchRooms()); })
        .catch(error => {
            console.log('Post rooms ', error.message);
            alert('Your room could not be added\nError: ' + error.message);
        })
}

export const fetchRooms = () => (dispatch) => {
    dispatch(roomsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'rooms', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(rooms => dispatch(roomsSuccess(rooms)))
        .catch(error => dispatch(roomsFailed(error.message)));
}

export const deleteRoom = (roomId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'rooms/' + roomId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(rooms => { console.log('Room Deleted', rooms); dispatch(fetchRooms()); })
        .catch(error => dispatch(roomsFailed(error.message)));
};

export const updateRoom = (room) => (dispatch) => {
    const newRoom = {
        rooomNo: room.roomNo,
        capacity: room.capacity
    }
    // console.log('Employee: ', newemployee);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'rooms/' + room.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newRoom),
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("Room Updated!"); dispatch(fetchRooms()); })
        .catch(error => {
            console.log('Update Room ', error.message);
            alert('Your room could not be updated\nError: ' + error.message);
        })
}
