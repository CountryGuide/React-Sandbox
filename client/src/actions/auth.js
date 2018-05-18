import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchUser = () => async dispatch => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        user = await axios.get('/api/current_user');
        user = user.data;

        user && localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: ActionTypes.User.FETCH_USER, payload: { user } });
    }
};
