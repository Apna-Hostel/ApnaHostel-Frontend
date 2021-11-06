import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './reducers/auth';
import { Notices } from "./reducers/notices";
import thunk from 'redux-thunk';
import { Employees } from './reducers/employee';
<<<<<<< HEAD
import { Students } from './reducers/students';
import{ MealBills } from './reducers/messBills'
=======
import { Complaints } from './reducers/complaint';
>>>>>>> 1d8ab6f1c574fcd46e586195d2e78ed719d2eff6

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            complaints:Complaints,
            notices: Notices,
            employees:Employees,
            students: Students,
            mealBills: MealBills,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}