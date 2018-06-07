import { ActionTypes } from "../actions/types";


export function rootReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.Global.UPDATE_CURRENCY_RATES:
            return {
                ...state,
                currencyRates: action.payload
            };
        default:
            return state;
    }
}
