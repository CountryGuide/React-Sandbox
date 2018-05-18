import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import { auth } from "./auth";
import { tasks } from "./tasks";
import { purchases } from "./purchases";


export const reducers = combineReducers({
    auth,
    tasks,
    purchases,
    form: reduxForm
});
