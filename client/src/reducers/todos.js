import { ActionTypes } from "../actions/types";


export function todos(state = { todosList: [] }, action) {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return {
                ...state,
                todosList: action.payload.todos || [],
                todoDeleted: false
            };
        case ActionTypes.DELETE_TODO:
            return {
                ...state,
                todoDeleted: true
            };
        default:
            return state;
    }
}
