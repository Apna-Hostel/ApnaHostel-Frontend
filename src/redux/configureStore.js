import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './reducers/auth';
import { Notices } from "./reducers/notices";
import thunk from 'redux-thunk';
import { Employees } from './reducers/employee';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            notices: Notices,
            employee:Employees,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}