import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'

export const noticesLoading = () => ({
    type: ActionTypes.NOTICES_LOADING
});

export const noticesFailed = (errmess) => ({
    type: ActionTypes.NOTICES_FAILED,
    payload: errmess
});

export const noticesSuccess = (notices) => ({
    type: ActionTypes.NOTICES_SUCCESS,
    payload: notices
});

export const addNotice = (notice) => ({
    type: ActionTypes.ADD_NOTICE,
    payload: notice
});

export const postNotice = (notice) => (dispatch) => {

    const newNotice = {
        title: notice.title,
        description: notice.description
    }
    console.log('Notice: ', newNotice);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'notices', {
        method: 'POST',
        body: JSON.stringify(newNotice),
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
        .then(response => { alert("Notice added Successfully!!"); dispatch(addNotice(response)); dispatch(fetchNotices()); })
        .catch(error => {
            console.log('Post notices ', error.message);
            alert('Your notice could not be added\nError: ' + error.message);
        })
}

export const fetchNotices = () => (dispatch) => {
    dispatch(noticesLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'notices', {
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
        .then(notices => dispatch(noticesSuccess(notices)))
        .catch(error => dispatch(noticesFailed(error.message)));
}

export const deleteNotice = (noticeId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'notices/' + noticeId, {
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
        .then(notices => { console.log('Notice Deleted', notices); dispatch(fetchNotices()); })
        .catch(error => dispatch(noticesFailed(error.message)));
};