import { combineReducers } from "redux";
import { auth } from "./auth";
import { todos } from "./todos";


export const reducers = combineReducers({
    auth,
    todos
});
