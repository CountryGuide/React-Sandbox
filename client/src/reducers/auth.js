import { ActionTypes } from "../actions/types";


export function auth(state = { authState: null }, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return {
                ...state,
                authState: action.payload.user || false
            };
        default:
            return state;
    }
}
