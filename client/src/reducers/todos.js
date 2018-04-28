import { ActionTypes } from "../actions/types";


export function todos(state = { todosList: [] }, action) {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return {
                ...state,
                todosList: action.payload.todos || []
            };
        default:
            return state;
    }
}
