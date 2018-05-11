import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import { auth } from "./auth";
import { tasks } from "./tasks";


export const reducers = combineReducers({
    auth,
    tasks,
    form: reduxForm
});
