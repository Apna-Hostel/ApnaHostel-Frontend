import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './reducers/auth';
import { Notices } from "./reducers/notices";
import thunk from 'redux-thunk';
import { Employees } from './reducers/employee';
import { Students } from './reducers/students';
import{ MealBills } from './reducers/messBills'
import { Complaints } from './reducers/complaint';
import { Rooms } from './reducers/rooms';
import { Hostels } from './reducers/hostel';
import { Requests } from './reducers/request';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            complaints: Complaints,
            notices: Notices,
            employees:Employees,
            students: Students,
            mealBills: MealBills,
            rooms: Rooms,
            hostels: Hostels,
            requests: Requests
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}