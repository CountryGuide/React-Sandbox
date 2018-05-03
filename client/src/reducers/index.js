import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import { auth } from "./auth";
import { todos } from "./todos";


export const reducers = combineReducers({
    auth,
    todos,
    form: reduxForm
});
