import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './reducers/auth';
import { Notices } from "./reducers/notices";
import thunk from 'redux-thunk';
import { Employees } from './reducers/employee';
import { Students } from './reducers/students';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            notices: Notices,
            employees:Employees,
            students: Students,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}