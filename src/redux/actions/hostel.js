import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'

export const hostelsLoading = () => ({
    type: ActionTypes.HOSTEL_LOADING
});

export const hostelsFailed = (errmess) => ({
    type: ActionTypes.HOSTEL_FAILED,
    payload: errmess
});

export const hostelsSuccess = (hostels) => ({
    type: ActionTypes.HOSTEL_SUCCESS,
    payload: hostels
});

export const fetchHostels = () => (dispatch) => {
    dispatch(hostelsLoading(true));

    return fetch(baseurl + 'hostels', {
        headers: {
            'method': 'GET',
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
        .then(hostels => dispatch(hostelsSuccess(hostels)))
        .catch(error => dispatch(hostelsFailed(error.message)));
}
