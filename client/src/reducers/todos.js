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
        case ActionTypes.TODO_CHECKED:
            return {
                ...state,
                todosList: state.todosList.map(todo => {
                    if (todo._id === action.payload.todoChecked) {
                        todo.done = !todo.done;
                    }

                    return todo;
                }),
                todoChecked: true
            };
        default:
            return state;
    }
}
