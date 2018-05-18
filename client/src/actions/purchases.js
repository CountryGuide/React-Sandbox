import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchPurchases = () => async dispatch => {
    const { data: purchases } = await axios.get('/api/purchases');

    dispatch({ type: ActionTypes.Purchases.FETCH_PURCHASES, payload: { purchases } });
};

export const createPurchase = (body, history) => async dispatch => {
    const { data: purchases } = await axios.post('/api/purchases', body);
    history.push('/purchases');

    dispatch({ type: ActionTypes.Purchases.NEW_PURCHASE, payload: { purchases } });
};

export const deletePurchase = (id) => async dispatch => {
    await axios.delete(`/api/purchases/${id}`);

    dispatch({ type: ActionTypes.Purchases.PURCHASE_DELETED })
};
