import axios from 'axios';
import { ActionTypes } from './types';


export const updateCurrencyRates = () => async dispatch => {
    const { data: rates } = await axios.get('/api/currency/update');

    dispatch({ type: ActionTypes.Global.UPDATE_CURRENCY_RATES, payload: rates });
};
