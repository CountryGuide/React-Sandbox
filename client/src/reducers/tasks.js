import { ActionTypes } from "../actions/types";


export function tasks(state = { taskList: [] }, action) {
    switch (action.type) {
        case ActionTypes.FETCH_TASKS:
            return {
                ...state,
                taskList: action.payload.tasks || [],
                taskDeleted: false
            };
        case ActionTypes.DELETE_TASK:
            return {
                ...state,
                taskDeleted: true
            };
        case ActionTypes.TASK_CHECKED:
            return {
                ...state,
                taskList: state.taskList.map(task => {
                    if (task._id === action.payload.taskChecked) {
                        task.done = !task.done;
                    }

                    return task;
                }),
                taskChecked: true
            };
        default:
            return state;
    }
}
