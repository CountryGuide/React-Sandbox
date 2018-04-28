import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchTodos = () => async dispatch => {
    const { data: todos } = await axios.get('/api/todos');

    dispatch({ type: ActionTypes.FETCH_TODOS, payload: { todos } });
};
