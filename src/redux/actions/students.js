import * as ActionTypes from './actionTypes'
import {baseurl} from '../config'

export const studentsLoading = () => ({
    type: ActionTypes.STUDENTS_LOADING
});

export const studentsFailed = (errmess) => ({
    type: ActionTypes.STUDENTS_FAILED,
    payload: errmess
});

export const studentsSuccess = (students) => ({
    type: ActionTypes.STUDENTS_SUCCESS,
    payload: students
});

export const addStudent = (student) => ({
    type: ActionTypes.ADD_STUDENT,
    payload: student
});

export const postStudent = (student) => (dispatch) => {

    const newStudent = {
        studentName: student.name,
        sid: student.id,
        mobileNo: student.mobile,
        dob: student.dob,
        gender: student.gender,
        email: student.email,
        branch: student.branch,
        nationality: student.nationality,
        address: student.address,
        fatherName: student.father,
        motherName: student.mother,
        fatherMobile: student.Fnum,
        roomNo: student.roomNo
    }
    console.log('Student: ', newStudent);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newStudent),
        credentials: "same-origin"
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
        .then(response => { alert("Student has been added Successfully!!"); dispatch(addStudent(response)); dispatch(fetchStudents()); })
        .catch(error => {
            console.log('Post students ', error.message);
            alert('Your student could not be added\nError: ' + error.message);
        })
}

export const fetchStudents = () => (dispatch) => {
    dispatch(studentsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'students', {
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
        .then(students => dispatch(studentsSuccess(students)))
        .catch(error => dispatch(studentsFailed(error.message)));
}

export const updateStudent = (student) => (dispatch) => {

    const newStudent = {
        studentName: student.fullname,
        sid: student.sid,
        mobileNo: student.mobile,
        email: student.email,
        branch: student.branch,
        address: student.address,
        fatherName: student.father,
        motherName: student.mother,
        fatherMobile: student.fnum,
        roomNo: student.roomNo,
        gender: student.gender,
        nationality: student.nationality,
        dob: student.dob,
    }
    console.log('Student: ', newStudent);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'students/' + student.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newStudent),
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
        .then(response => { alert("Student Updated!"); dispatch(fetchStudents()); })
        .catch(error => {
            console.log('Update students ', error.message);
            alert('Your student could not be updated\nError: ' + error.message);
        })
}

export const deleteStudent = (studentId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'students/' + studentId, {
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
        .then(students => { console.log('Student Deleted', students); dispatch(fetchStudents()); })
        .catch(error => dispatch(studentsFailed(error.message)));
};