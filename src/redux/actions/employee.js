import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'

export const employeesLoading = () => ({
    type: ActionTypes.EMPLOYEES_LOADING
});

export const employeesFailed = (errmess) => ({
    type: ActionTypes.EMPLOYEES_FAILED,
    payload: errmess
});

export const employeesSuccess = (employees) => ({
    type: ActionTypes.EMPLOYEES_SUCCESS,
    payload: employees
});

export const addEmployee = (employee) => ({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: employee
});

export const postEmployee = (employee) => (dispatch) => {

    const newEmployee = {
        employeeName: employee.name,
        employeeType: employee.type,
        mobileNo: employee.mobile,
        gender: employee.gender,
        designation: employee.designation,
        address: employee.address,
        joiningDate: employee.joinDate,
        salary: employee.salary,
        eid: employee.eid
    }
    console.log('Employee: ', JSON.stringify(newEmployee));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees', {
        method: 'POST',
        body: JSON.stringify(newEmployee),
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
        .then(response => { alert("Employee has been added Successfully!!"); dispatch(addEmployee(response)); dispatch(fetchEmployees()); })
        .catch(error => {
            console.log('Post employees ', error.message);
            alert('Your employee could not be added\nError: ' + error.message);
        })
}


export const fetchEmployees = () => (dispatch) => {
    dispatch(employeesLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees', {
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
        .then(employees => dispatch(employeesSuccess(employees)))
        .catch(error => dispatch(employeesFailed(error.message)));
}

export const deleteEmployee = (employeeId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees/' + employeeId, {
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
        .then(employees => { console.log('Employee Deleted', employees); dispatch(fetchEmployees()); })
        .catch(error => dispatch(employeesFailed(error.message)));
};


export const updateEmployee = (employee) => (dispatch) => {
    console.log(employee.id);
    console.log(employee)
    const newemployee = {
        employeeName: employee.name,
        eid: employee.eid,
        mobileNo: employee.mobile,
        gender: employee.gender,
        employeeType: employee.type,
        designation: employee.designation,
        joiningDate: employee.joinDate,
        salary: employee.salary,
        address: employee.address,
    }
    console.log('Employee: ', newemployee);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'employees/' + employee.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newemployee),
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
        .then(response => { alert("Employee Updated!"); dispatch(fetchEmployees()); })
        .catch(error => {
            console.log('Update students ', error.message);
            alert('Your employee could not be updated\nError: ' + error.message);
        })
}
