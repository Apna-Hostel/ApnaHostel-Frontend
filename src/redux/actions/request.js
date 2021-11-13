import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'

export const requestsLoading = () => ({
    type: ActionTypes.REQUEST_LOADING
});

export const requestsFailed = (errmess) => ({
    type: ActionTypes.REQUEST_FAILED,
    payload: errmess
});

export const requestsSuccess = (requests) => ({
    type: ActionTypes.REQUEST_SUCCESS,
    payload: requests
});

export const addRequest = (request) => ({
    type: ActionTypes.ADD_REQUEST,
    payload: request
});

export const postRequest = (request) => (dispatch) => {

    const newRequest = {
        studentName: request.name,
        sid: request.sid,
        mobileNo: request.mobile,
        dob: request.dob,
        gender: request.gender,
        email: request.email,
        branch: request.branch,
        nationality: request.nationality,
        address: request.address,
        fatherName: request.father,
        motherName: request.mother,
        fatherMobile: request.Fnum,
        hostelName: request.hostel,
        year: request.year
    }
    console.log('Request: ', JSON.stringify(newRequest));

    return fetch(baseurl + 'requests', {
        method: 'POST',
        body: JSON.stringify(newRequest),
        headers: {
            'Content-Type': 'application/json',
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
        .then(response => { alert("Request has been sent Successfully!!"); dispatch(addRequest(response)); dispatch(fetchRequests()); })
        .catch(error => {
            console.log('Post requests ', error.message);
            alert('Your request could not be sent\nError: ' + error.message);
        })
}


export const fetchRequests = () => (dispatch) => {
    dispatch(requestsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'requests', {
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
        .then(requests => dispatch(requestsSuccess(requests)))
        .catch(error => dispatch(requestsFailed(error.message)));
}

export const deleteRequest = (requestId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'requests/' + requestId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(requests => { console.log('Request Deleted', requests); dispatch(fetchRequests()); })
        .catch(error => dispatch(requestsFailed(error.message)));
};


export const updateRequest = (request) => (dispatch) => {
    const newRequest = {
        studentName: request.name,
        sid: request.id,
        mobileNo: request.mobile,
        dob: request.dob,
        gender: request.gender,
        email: request.email,
        branch: request.branch,
        nationality: request.nationality,
        address: request.address,
        fatherName: request.father,
        motherName: request.mother,
        fatherMobile: request.Fnum,
        year: request.year
    }
    // console.log('Employee: ', newemployee);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'requests/' + request.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newRequest),
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
        .then(response => { alert("Request Updated!"); dispatch(fetchRequests()); })
        .catch(error => {
            console.log('Update requests ', error.message);
            alert('Your request could not be updated\nError: ' + error.message);
        })
}
