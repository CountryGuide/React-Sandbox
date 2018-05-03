import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchTodos = () => async dispatch => {
    const { data: todos } = await axios.get('/api/todos');

    dispatch({ type: ActionTypes.FETCH_TODOS, payload: { todos } });
};

export const createTodo = (body, history) => async dispatch => {
    const { data: todos } = await axios.post('/api/todos', body);
    history.push('/todos');

    dispatch({ type: ActionTypes.FETCH_TODOS, payload: { todos } });
};

export const deleteTodo = (id) => async dispatch => {
    await axios.delete(`/api/todos/${id}`);

    dispatch({ type: ActionTypes.DELETE_TODO })
};
