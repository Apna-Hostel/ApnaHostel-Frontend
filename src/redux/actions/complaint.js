import * as ActionTypes from './actionTypes';
import { baseurl } from '../config';

export const complaintsLoading = () => 
({
    type:ActionTypes.COMPLAINT_LOADING,
});

export const complaintsSuccess = (complaints) =>
(
    {
        type:ActionTypes.COMPLAINT_SUCCESS,
        payload:complaints
    }
);

export const complaintsFailed = (errmess) =>
(
    {
        type:ActionTypes.EMPLOYEES_FAILED,
        payload : errmess
    }
);

export const addComplaint = (complaint) =>
(
    {
        type:ActionTypes.ADD_COMPLAINT,
        payload:complaint
    }
);

export const postComplaint = (complaint) => (dispatch) => {

    const newcomplaint = {
        title: complaint.title,
        complaint: complaint.description
    }
    const bearer = 'Bearer ' + localStorage.getItem('token');


    return fetch(baseurl + 'complaints', {
        method: 'POST',
        body: JSON.stringify(newcomplaint),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            return response;
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
    .then(response => response.json())
    .then(response => { alert("Complaint registered Successfully!!"); dispatch(addComplaint(response)); dispatch(fetchComplaints()); })
 .catch(error => {
            alert('Your complaint could not be added\nError: ' + error.message);
        })
}

export const fetchComplaints = () => (dispatch) => {
    dispatch(complaintsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'complaints', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
    })
        .then(response => {
                return response;
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(complaints => dispatch(complaintsSuccess(complaints)))
        .catch(error => dispatch(complaintsFailed(error.message)));
}

export const deleteComplaint = (complaintId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'complaints/' + complaintId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            return response;
        },
            error => {
                
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(complaints => {dispatch(fetchComplaints());})
        .catch(error => dispatch(complaintsFailed(error.message)));
};

