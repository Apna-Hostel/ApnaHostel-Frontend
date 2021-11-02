import * as ActionTypes from './actionTypes'
export const mealbillLoading = () => ({
    type: ActionTypes.MEALBILL_LOADING
});

export const mealbillFailed = (errmess) => ({
    type: ActionTypes.MEALBILL_FAILED,
    payload: errmess
});

export const mealbillSuccess = (mealbill) => ({
    type: ActionTypes.MEALBILL_SUCCESS,
    payload: mealbill
});

export const addMealbill = (mealbill) => ({
    type: ActionTypes.ADD_MEALBILL,
    payload: mealbill
});

export const postMealbill = (mealbill) => (dispatch) => {

    const newMealbill = {
        name: mealbill.name,
        sid: mealbill.id,
        branch: mealbill.branch,
        payment: mealbill.rupees,
        paymentDate: mealbill.paymentduedate
    }
    console.log('Mealbill: ', newMealbill);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills', {
        method: 'POST',
        body: JSON.stringify(newMealbill),
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
        .then(response => { alert("Mess Bill added Successfully!!"); dispatch(addMealbill(response)); dispatch(fetchMealbill()); })
        .catch(error => {
            console.log('Post Mealbill ', error.message);
            alert('Meal bill could not be added\nError: ' + error.message);
        })
}

export const deleteMealbill = (mealId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills/' + mealId, {
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
        .then(bill => { console.log('Bill Deleted', bill); dispatch(fetchMealbill()); })
        .catch(error => dispatch(mealbillFailed(error.message)));
};

export const updateMealbill = (mealbill) => (dispatch) => {

    const newMealbill = {
        name: mealbill.name,
        sid: mealbill.sid,
        branch: mealbill.branch,
        payment: mealbill.rupees,
        paymentDate: mealbill.paymentduedate
    }
    console.log('Mealbill: ', newMealbill);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills/' + mealbill.id, {
        method: 'PUT',
        body: JSON.stringify(newMealbill),
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
        .then(response => { alert("Meal Bill Updated!"); dispatch(fetchMealbill()); })
        .catch(error => {
            console.log('Update Mealbill ', error.message);
            alert('Meal bill could not be updated\nError: ' + error.message);
        })
}

export const fetchMealbill = () => (dispatch) => {
    dispatch(mealbillLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mealBills', {
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
        .then(meals => dispatch(mealbillSuccess(meals)))
        .catch(error => dispatch(mealbillFailed(error.message)));
}