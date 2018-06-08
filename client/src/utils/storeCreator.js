import { reducers } from "../reducers";
import { getInitialState } from "./preloadedState";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, getInitialState(), composeEnhancers(applyMiddleware(reduxThunk)));
