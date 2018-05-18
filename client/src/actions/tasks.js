import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchTasks = () => async dispatch => {
    const { data: tasks } = await axios.get('/api/tasks');

    dispatch({ type: ActionTypes.Tasks.FETCH_TASKS, payload: { tasks } });
};

export const createTask = (body, history) => async dispatch => {
    const { data: tasks } = await axios.post('/api/tasks', body);
    history.push('/tasks');

    dispatch({ type: ActionTypes.Tasks.FETCH_TASKS, payload: { tasks } });
};

export const deleteTask = (id) => async dispatch => {
    await axios.delete(`/api/tasks/${id}`);

    dispatch({ type: ActionTypes.Tasks.DELETE_TASK })
};

export const taskChecked = (id, checked) => async dispatch => {
    dispatch({ type: ActionTypes.Tasks.TASK_CHECKED, payload: { taskChecked: id } });

    await axios.patch(`/api/tasks/${id}`, { done: checked });
};
