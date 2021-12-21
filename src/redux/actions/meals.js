import * as ActionTypes from "./actionTypes"
import {baseurl} from '../config'
      
export const mealsLoading = () => ({
    type: ActionTypes.MEALS_LOADING
});

export const mealsFailed = (errmess) => ({
    type: ActionTypes.MEALS_FAILED,
    payload: errmess
});

export const mealsSuccess = (meals) => ({
    type: ActionTypes.MEALS_SUCCESS,
    payload: meals
});

export const addMeals = (meal) => ({
    type: ActionTypes.ADD_MEAL,
    payload: meal
});

export const postMeal = (meals) => (dispatch) => {

    const newMeal = {
        day: meals.day,
        breakfast: meals.breakfast,
        lunch: meals.lunch,
        snacks: meals.snacks,
        dinner: meals.dinner
    }
    console.log('Meal: ', newMeal);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'meals', {
        method: 'POST',
        body: JSON.stringify(newMeal),
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
        .then(response => { alert("Meal added Successfully!!"); dispatch(addMeals(response)) })
        .catch(error => {
            console.log('Post meals ', error.message);
            alert('Your meal could not be added\nError: ' + error.message);
        })
}

export const fetchMeals = () => (dispatch) => {
    dispatch(mealsLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'meals', {
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
        .then(meals => dispatch(mealsSuccess(meals)))
        .catch(error => dispatch(mealsFailed(error.message)));
}

export const updateMeal = (meal) => (dispatch) => {
    
    const time = meal.time;
    const newMeal = {
        day: meal.day,
        [time]: meal.rows
    }
    console.log('Meal: ', newMeal);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseurl + 'meals/' + meal.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(newMeal),
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {console.log(response); dispatch(fetchMeals()); alert("Meal updated!"); })
        .catch(error => {
            console.log('Update Meal ', error.message);
            alert('Meal could not be updated\nError: ' + error.message);
        })
}
