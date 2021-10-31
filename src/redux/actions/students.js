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