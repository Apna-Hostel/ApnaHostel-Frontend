import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './reducers/auth';
import thunk from 'redux-thunk';
import { Employees } from './reducers/employee';
import { Complaints } from './reducers/complaint';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            employee:Employees,
            complaints:Complaints,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}